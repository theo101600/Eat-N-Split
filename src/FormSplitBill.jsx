import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyCheckDollar,
  faPerson,
  faUsers,
  faMoneyBillTransfer,
} from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import { useState } from "react";

export default function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }

  return (
    <form className="form-split-bill" action="" onSubmit={handleSubmit}>
      <h2> Split a bill with {selectedFriend.name}</h2>
      <label htmlFor="">
        <FontAwesomeIcon className="icons" icon={faMoneyCheckDollar} />
        Bill Valuenumber
      </label>
      <input
        type="number"
        value={bill}
        onChange={(e) =>
          setBill(Number(e.target.value) < 0 ? 0 : Number(e.target.value))
        }
      />
      <label htmlFor="">
        <FontAwesomeIcon className="icons" icon={faPerson} />
        Your Expense
      </label>
      <input
        type="number"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />
      <label htmlFor="">
        <FontAwesomeIcon className="icons" icon={faUsers} />
        {selectedFriend.name}&apos;s Expense
      </label>
      <input type="number" value={paidByFriend} disabled />
      <label htmlFor="">
        <FontAwesomeIcon className="icons" icon={faMoneyBillTransfer} />
        Who is paying the bill
      </label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
