import { useState } from "react";
import { FriendsType } from "../App";
import Button from "./Button";

type SplitBillFormProps = {
  selectedFriend: FriendsType;
  onSplitBill: (value: number) => void;
};

export default function SplitBillForm({
  selectedFriend,
  onSplitBill,
}: SplitBillFormProps) {
  const [billValue, setBillValue] = useState("");
  const [userExpense, setUserExpense] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const friendExpense = Number(billValue) - Number(userExpense);
  const isValid = !billValue || !userExpense;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isValid) return alert("Invalid input");

    onSplitBill(whoIsPaying === "user" ? Number(userExpense) : -friendExpense);
  };

  return (
    <form className="split-bill-form" onSubmit={handleSubmit}>
      <h2>Split a bill with a {selectedFriend.name}</h2>
      <label>Bill value</label>
      <input
        type="text"
        value={billValue}
        onChange={(e) => setBillValue(e.target.value)}
      />
      <label>Your expense</label>
      <input
        type="text"
        value={userExpense}
        onChange={(e) =>
          Number(e.target.value) > Number(billValue)
            ? userExpense
            : setUserExpense(e.target.value)
        }
      />
      <label>{selectedFriend?.name}'s expense</label>
      <input type="text" value={friendExpense} disabled />
      <label>Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend?.name}</option>
      </select>
      <Button disabled={isValid}>Split bill</Button>
    </form>
  );
}
