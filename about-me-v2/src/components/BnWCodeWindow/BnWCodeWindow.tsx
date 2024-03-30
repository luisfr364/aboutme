import styles from "./BnWCodeWindow.module.css";

function BnWCodeWindow(props: any) {
  return (
    <div className={styles.container}>
      <span className={styles.test}>{props.language}</span>
      <div className={styles.container__fakeCodeEditor}>
        <pre>
          <code>
            <span>{props.code}</span>
            <span className={styles.tile}></span>
          </code>
        </pre>
      </div>
    </div>
  );
}

export default BnWCodeWindow;
