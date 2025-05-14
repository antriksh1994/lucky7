import "./Die.css";

const Die = ({ val, color = "slateblue" }) => {
  console.log('==4==', val)

  return (
    <div className="Die" style={{ backgroundColor: color }}>
      {val}
    </div>
  );
}

export default Die;
