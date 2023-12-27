import Board from "../components/Board";
import styles from "./Main.module.scss";

import SideBar from "../layout/SideBar";

const Mainpage = () => {
  const dummyData = [
    {
      name: "김8ㅗ120로23로1390ㄹ23ㅗ90ㄹ13ㅗ90랴ㅗ랴ㅗ이박",
      Like: 123,
      imgurl: "https://th.bing.com/th/id/OIG.hSKc.XhLnL7SPxOdkRsU",
    },
    {
      name: "이이이",
      Like: 456,
      imgurl: "https://th.bing.com/th/id/OIG.OpkExVcbWNAYQoxEwsfj",
    },
    {
      name: "박박박",
      Like: 135,
      imgurl: "https://th.bing.com/th/id/OIG.t.FGYWQLl5x7CQ1WKfJj",
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
      <section className={styles.container}>
        <div className={styles.inner}>
          <SideBar />
          <main className={styles.main}>
            <div className={styles.title}>
              <p>usestate?</p>
              <p>게시판 title</p>
              <p>게시판 소개 4ㅗ190ㅗ19012ㅓ어129ㅓ1ㅇ29어129어1209어1290</p>
            </div>
            <div className={styles.newpost}>+ 새글작성</div>
            <div className={styles.board}>
              {dummyData.map((el) => (
                <Board el={el} />
              ))}
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default Mainpage;
