import Die from "./Die";
import "./Dice.css";

const Dice = ({ dice, color }) => {

  return (
    <section className="Dice">
      {dice.map((val, i) => (
        <Die key={i} val={val} color={color} />
      ))}
    </section>
  );
}
export default Dice;

[3, 4, 2];
