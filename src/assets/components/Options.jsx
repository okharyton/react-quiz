export default function Options({ question }) {
  console.log(question);
  return (
    <div className="options">
      {question.options.map((option) => (
        <button key={option} className="btn btn-option">
          {option}
        </button>
      ))}
    </div>
  );
}
