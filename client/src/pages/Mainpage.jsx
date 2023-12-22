import Board from "../components/Board";
import styles from "./Main.module.scss";

const Mainpage = () => {
  const dummyData = [
    {
      name: "김김김",
      Like: 123,
      imgurl: "https://th.bing.com/th/id/OIG.t.FGYWQLl5x7CQ1WKfJj",
    },
    {
      name: "이이이",
      Like: 456,
      imgurl: "https://th.bing.com/th/id/OIG.OpkExVcbWNAYQoxEwsfj",
    },
    {
      name: "박박박",
      Like: 135,
      imgurl: "https://th.bing.com/th/id/OIG.hSKc.XhLnL7SPxOdkRsU",
    },
    {
      name: "최최최",
      Like: 531,
      imgurl: "https://th.bing.com/th/id/OIG.WYvLaYwbb7ss1dJ2LkGn",
    },
    {
      name: "정정정",
      Like: 324,
      imgurl: "https://th.bing.com/th/id/OIG.4OSh23LQD4CNM9PPQ8Zt",
    },
  ];

  return (
    <>
      <header></header>
      <section>
        <aside className={styles.lside}>
          <div className={styles.a1}></div>
          <div className={styles.a2}></div>
          <div className={styles.a3}></div>
          <div className={styles.a4}></div>
        </aside>
        <main className={styles.main}>
          <div className={styles.inner}>
            {dummyData.map((el) => (
              <Board el={el} />
            ))}
          </div>
        </main>
      </section>
    </>
  );
};

export default Mainpage;
