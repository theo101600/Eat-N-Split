import Friends from "./Friends";

export default function FriendsList({ data }) {
  const friends = data;
  return (
    <ul>
      {friends.map((friend) => (
        <Friends key={friend.id} friend={friend} />
      ))}
    </ul>
  );
}
