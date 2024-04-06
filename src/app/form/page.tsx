import styles from "./page.module.scss";

export default function Write() {
  return (
    <div className={styles.form_wrapper}>
      <h2>글작성</h2>
      <form className={styles.form} action="/api/test" method="POST">
        <input type="text" name="title" placeholder="title" />
        <textarea name="content" placeholder="content"></textarea>
        <button type="submit">버튼</button>
      </form>
    </div>
  );
}
