var Hi = (props) => {
  return (
    <div>
      <h1>
        Hi {props.name}, i think you like {props.intrest} !
      </h1>
      {props.children}
    </div>
  );
};
export default Hi;
