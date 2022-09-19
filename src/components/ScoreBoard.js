import "../styles/ScoreBoard.css";

const ScoreBoard = ({ score }) => {
  return (
    <div className="scoreBoard">
      <h2>Your current Score: {score}</h2>
    </div>
  );
};

export default ScoreBoard;
