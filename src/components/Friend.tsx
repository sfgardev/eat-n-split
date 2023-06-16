import { FriendsType } from "../App";
import Button from "./Button";

type FriendProps = {
  friend: FriendsType;
  selectedFriend: FriendsType | null;
  onSelect: (friend: FriendsType) => void;
};

export default function Friend({
  friend,
  selectedFriend,
  onSelect,
}: FriendProps) {
  const { name, image, balance } = friend;
  const isSelected = friend.id === selectedFriend?.id;

  return (
    <li className={`friend-item ${isSelected ? "selected" : ""}`}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      {balance > 0 && (
        <p className="green">
          {name} owes you ${balance}
        </p>
      )}
      {balance < 0 && (
        <p className="red">
          You owe {name} ${Math.abs(balance)}
        </p>
      )}
      {balance === 0 && <p>You and {name} are even</p>}
      <Button onClick={() => onSelect(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}
