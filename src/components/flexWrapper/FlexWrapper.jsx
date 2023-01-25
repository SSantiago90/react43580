import "./flexwrapper.css";

function FlexWrapper(props) {
  let style = { flexDirection: props.column ? "column" : "row" };
  return (
    <div style={style} className="flex">
      {props.children}
    </div>
  );
}

export default FlexWrapper;
