import styles from "./button.module.css";

// named exports
export function Button_Prop(props) {
  return (
    <button style={{ backgroundColor: props.color }} className={styles.btn}>
      {props.text}
    </button>
  );
}

export default function Button(props) {
  function handleClick() {
    props.onClick();
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
