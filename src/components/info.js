export default function Info(inputs) {
  console.log("inside todo ", inputs);
  return (
    <>
      <div contenteditable="true">
        <input
          type="checkbox"
          checked={inputs.completed}
          onchange={[inputs.toggleTodo, inputs.id]}
        />
        <span
          style={{
            "text-decoration": inputs.completed ? "line-through" : "none"
          }}
        >
          {inputs.inputText}
        </span>
      </div>
    </>
  );
}
