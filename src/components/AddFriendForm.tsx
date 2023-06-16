import { useState } from "react";
import Button from "./Button";
import { FriendsType } from "../App";

type AddfriendFormProps = {
  onAddFriend: (friend: FriendsType) => void;
};

export default function AddFriendForm({ onAddFriend }: AddfriendFormProps) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !image) return alert("Invalid input");
    const id = crypto.randomUUID();

    const newFriend = {
      id,
      name,
      image: `${image}?u=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  };

  return (
    <form className="add-friend-form" onSubmit={submitHandler}>
      <label>Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}
