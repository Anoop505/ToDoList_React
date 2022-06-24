export default function ToDoList(props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginRight: "2em"
      }}
    >
      <li> {props.text}</li>
      <button
        style={{
          display: "inline",
          color: "red",
          borderRadius: "5px ",
          margin: "0.5em",
          padding: "0.1em"
        }}
        onClick={() => props.onSelect(props.id)}
      >
        {" "}
        Delete
      </button>
    </div>
  );
}
