import { Font, Asset } from 'exponent';
import { Ionicons } from '@exponent/vector-icons';
import Actions from '~/state/actions';
import { firebaseAuth } from '~/config/firebase';
import { getUser, createUser } from '~/api/users';

export default async function({ action, dispatch }) {
  await Promise.all([
    Font.loadAsync({
      ...Ionicons.font,
      'open-sans': require('../assets/fonts/opensans-regular.ttf'),
      'open-sans-light': require('../assets/fonts/opensans-light.ttf'),
      'open-sans-bold': require('../assets/fonts/opensans-bold.ttf'),
    }),
    Asset.fromModule(require('../assets/images/logo.png')),
  ]);

  await firebaseAuth.onAuthStateChanged(async user => {
    if (!user) return dispatch(Actions.notAuthed());
    let authUser = await getUser(user.uid);

    if (authUser) {
      dispatch(Actions.loadUserSuccess(authUser));
    } else {
      const newUser = {
        uid: user.uid,
        name: user.displayName,
        avatarURL:
          'https://thebenclark.files.wordpress.com/2014/03/facebook-default-no-profile-pic.jpg',
        points: 0,
      };

      dispatch(Actions.loadUserSuccess(newUser));
      createUser(newUser);
    }

    dispatch(Actions.authSuccess(user.uid));
  });

  dispatch(Actions.appBootstrapSuccess());
}
