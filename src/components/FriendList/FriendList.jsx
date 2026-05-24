import { Friend } from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';
export const FriendList = ({ friends }) => {
  console.log(friends);
  return (
    <ul className={css['friend-list']}>
      {friends.map(friend => (
        <Friend
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          key={friend.id}
        />
      ))}
    </ul>
  );
};
