function UserCard(props) {
  return (
    <div className="card">
      <h3>{props.name}</h3>
      <p>{props.role}</p>
      <button>Connect</button>
    </div>
  );
}

export default UserCard;
