export default function click() {
  function hey() {
    console.log("hey");
  }
  return (
    <div>
      <button onClick={hey}>Click me</button>
    </div>
  );
}
