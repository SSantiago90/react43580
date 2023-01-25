import styles from "./button.module.css";

export default function Button(props) {
  /* console.log(props); */

  return (
    <button style={{ backgroundColor: props.color }} className={styles.btn}>
      {props.text}
    </button>
  );
}

// named exports
export function ButtonChild(props) {
  function handleClick() {
    console.log("...");
    props.onTouch();
  }

  return (
    <button
      onClick={handleClick}
      style={{ backgroundColor: props.color }}
      className={styles.btn}
    >
      {props.children}
    </button>
  );
}
