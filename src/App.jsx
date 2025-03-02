import { useState } from "react";
import "./App.css";
import FriendsList from "./FriendsList";
import FormAddFriend from "./FormAddFriend";
import Button from "./Button";
import FormSplitBill from "./FormSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=129846",
    balance: 50,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=128836",
    balance: -16,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=497476",
    balance: 12,
  },
  {
    id: 599696,
    name: "Feona",
    image: "https://i.pravatar.cc/48?u=497469",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setShowAddFriend((currValue) => !currValue);
  }

  function handleAddFriend(friend) {
    setFriends((currValue) => [...currValue, friend]);
    setShowAddFriend(false);
  }

  function handleSelection(friend) {
    setSelectedFriend((curValue) =>
      curValue?.id === friend.id ? null : friend
    );
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends((curValue) =>
      curValue.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && !showAddFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

export default App;
