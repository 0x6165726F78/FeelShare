import Exponent from 'exponent';
import { facebookProvider, firebaseAuth } from '~/config/firebase';

export async function logOut() {
  return await firebaseAuth.signOut();
}
