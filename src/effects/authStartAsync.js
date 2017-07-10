import Actions from '~/state/actions';
import Exponent from 'exponent';
import { facebookProvider, firebaseAuth } from '~/config/firebase';
import env from '~/config/env';

export default async function({ dispatch, action }) {
  const { type, token } = await Exponent.Facebook.logInWithReadPermissionsAsync(
    env.FACEBOOK_APP_ID,
    {}
  );
  if (type === 'success') {
    const credential = facebookProvider.credential(token);
    return await firebaseAuth.signInWithCredential(credential);
  }
  dispatch(Actions.notAuthed());
}
