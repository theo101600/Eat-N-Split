import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
export default function Friends({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      <button className="button">Select</button>
      {/* <FontAwesomeIcon icon={faUsers} /> */}
      {/* <FontAwesomeIcon icon={faImage} /> */}
      {/* <FontAwesomeIcon icon={faMoneyCheckDollar} /> */}
      {/* <FontAwesomeIcon icon={faPerson} /> */}
      {/* <FontAwesomeIcon icon={faMoneyBillTransfer} /> */}
    </li>
  );
}
