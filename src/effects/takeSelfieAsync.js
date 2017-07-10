import { ImagePicker } from 'exponent';
import Actions from '~/state/actions';
import { uploadImageAsync } from '~/api/storage';
import {
  getHappiness,
  calculateScore,
  getSelfieMessage,
} from '~/utils/helpers';
import { getEmotions } from '~/api/microsoft';
import { updateUser } from '~/api/users';

export default async function({ dispatch, actions, getState }) {
  const pickerResult = await ImagePicker.launchCameraAsync({
    allowsEditing: true,
    aspect: [4, 3],
  });

  let uploadResponse, uploadResult;
  try {
    if (!pickerResult.cancelled) {
      uploadResponse = await uploadImageAsync(pickerResult.uri);
      uploadResult = await uploadResponse.json();

      const url = uploadResult.location;

      let emotions = (await getEmotions(url))[0];
      if (emotions) {
        const state = getState();
        const user = state.users[getState().authState.uid];
        const pastScore = user.points;
        const newScore = calculateScore(getHappiness(emotions));

        if (newScore > pastScore) {
          await updateUser({ uid: user.uid, points: newScore, avatarURL: url });
        }

        const message = getSelfieMessage(emotions);

        dispatch(
          Actions.takeSelfieSuccess({ image: url, points: newScore, message })
        );
      } else {
        dispatch(
          Actions.resetSelfieScreen(`Don't fool me.\u000a Try again ¯\_(ツ)_/¯`)
        );
      }
    } else {
      dispatch(Actions.resetSelfieScreen());
    }
  } catch (e) {
    dispatch(Actions.takeSelfieError(e));
  }
}
