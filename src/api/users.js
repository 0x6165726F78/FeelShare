import { ref } from '~/config/firebase';

export function getUsers() {
  return ref
    .child('/users')
    .orderByChild('points')
    .once('value')
    .then(snapshot => snapshot.val());
}

export function getUser(uid) {
  return ref
    .child(`/users/${uid}`)
    .once('value')
    .then(snapshot => snapshot.val());
}

export function createUser(user) {
  return ref.child('/users/').update({
    [user.uid]: user,
  });
}

export function getUsersListener(fn) {
  ref.child('/users').orderByChild('points').on('value', fn);
}

export function updateUser({ uid, points, avatarURL }) {
  return ref.child(`/users/${uid}`).update({
    points,
    avatarURL,
  });
}
