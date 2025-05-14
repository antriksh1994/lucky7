import { useState } from "react";
import { getRolls } from "./utils";
import Button from "./Button";
import Dice from "./Dice";

const LuckyN = ({ title = "Dice Game", numDice = 2, winCheck }) => {
  
  const [dice, setDice] = useState(getRolls(numDice));
  /*
    You're calling the function that was passed as a prop —
    and you're passing the dice array (from state) as the argument.
  */
  const isWinner = winCheck(dice);
  const roll = () => setDice(getRolls(numDice));

  return (
    <main className="LuckyN">
      <h1>
        {title} {isWinner && "You Win!"}
      </h1>
      <Dice dice={dice} />
      <Button clickFunc={roll} label="Re-Roll" />
    </main>
  );
}

export default LuckyN;
