import Actions from '~/state/actions';
import { getUsers, getUsersListener } from '~/api/users';

export default async function({ dispatch, action, getState }) {
  const { feed } = getState().listeners;
  if (!feed) {
    getUsersListener(async snapshot => {
      const users = snapshot.val();
      dispatch(Actions.loadUsersSuccess(users));
    });
  }
}
