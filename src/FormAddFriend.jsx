import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faImage } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import { useState } from "react";

export default function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();
    const id = crypto.randomUUID();

    if (!name || !image) {
      return;
    }

    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };
    onAddFriend(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48");
  }
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor="">
        {" "}
        <FontAwesomeIcon className="icons" icon={faUsers} /> Friend
      </label>
      <input
        type="text"
        name=""
        id=""
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="">
        <FontAwesomeIcon className="icons" icon={faImage} />
        Image URL
      </label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}
