import { useState } from "react";
import AddFriendForm from "./components/AddFriendForm";
import FriendsList from "./components/FriendsList";
import SplitBillForm from "./components/SplitBillForm";
import Button from "./components/Button";

const initialFriends = [
  {
    id: "118836",
    name: "Dwayne",
    image: "https://i.pravatar.cc/48?u=118846",
    balance: -30,
  },
  {
    id: "933372",
    name: "Kira",
    image: "https://i.pravatar.cc/48?u=935372",
    balance: 50,
  },
  {
    id: "499476",
    name: "Liza",
    image: "https://i.pravatar.cc/48?u=504476",
    balance: 0,
  },
];

export type FriendsType = {
  id: string;
  name: string;
  image: string;
  balance: number;
};

function App() {
  const [friends, setFriends] = useState<FriendsType[]>(initialFriends);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState<FriendsType | null>(
    null
  );

  const handleShowAddForm = () => {
    setShowAddForm((show) => !show);
    setSelectedFriend(null);
  };

  const handleAddFriend = (friend: FriendsType) => {
    setFriends((prevFriends) => [...prevFriends, friend]);
    setShowAddForm(false);
  };

  const handleSelect = (friend: FriendsType) => {
    selectedFriend?.id === friend.id
      ? setSelectedFriend(null)
      : setSelectedFriend(friend);
    setShowAddForm(false);
  };

  const handleSplitBill = (value: number) => {
    setFriends((prevFriends) =>
      prevFriends.map((friend) =>
        friend.id === selectedFriend?.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  };

  return (
    <div className="app">
      <h1>Split Your Bill!</h1>
      <div className="sidebar">
        <FriendsList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelect={handleSelect}
        />
        {showAddForm && <AddFriendForm onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddForm}>
          {showAddForm ? "Close" : "Add friend"}
        </Button>
      </div>

      {selectedFriend && (
        <SplitBillForm
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

export default App;
