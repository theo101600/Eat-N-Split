import { useState } from "react";
import "./App.css";
import FriendsList from "./FriendsList";
import FormAddFriend from "./FormAddFriend";
import Button from "./Button";

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
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleShowAddFriend() {
    setShowAddFriend((currValue) => !currValue);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList data={initialFriends} />
        {showAddFriend && <FormAddFriend />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
    </div>
  );
}

export default App;
