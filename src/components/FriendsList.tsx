import { FriendsType } from "../App";
import Friend from "./Friend";

type FriendsListProps = {
  friends: FriendsType[];
  selectedFriend: FriendsType | null;
  onSelect: (friend: FriendsType) => void;
};

export default function FriendsList({
  friends,
  selectedFriend,
  onSelect,
}: FriendsListProps) {
  return (
    <ul className="friends-list">
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          selectedFriend={selectedFriend}
          onSelect={onSelect}
        />
      ))}
    </ul>
  );
}
