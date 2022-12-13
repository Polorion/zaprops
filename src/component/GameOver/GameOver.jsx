import * as React from "react";
import S from "./GameOver.module.scss";
import { ReactComponent as Box } from "../../img/box.svg";
import { useSelector } from "react-redux";

const GameOver = (props) => {
  const score = useSelector((state) => state.player.score);
  return (
    <div className={`${S.body} ${props.gameOver && S.gameOver}`}>
      <div className={S.score}> {score}</div>
      <form
        className={S.form}
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <input placeholder={"ваш телефон"} type="tel" />
        <button
          on
          onClick={() => {
            console.log(1);
          }}
        >
          {" "}
          отправить
        </button>
      </form>
      <Box />
    </div>
  );
};

export default GameOver;
