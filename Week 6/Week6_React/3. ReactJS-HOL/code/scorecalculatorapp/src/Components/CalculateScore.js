import '../Stylesheets/mystyle.css';

export default function CalculateScore() {
  const name = "John Doe";
  const school = "ABC High School";
  const total = 450;
  const goal = 500;
  const average = total / 5;

  return (
    <div className="scoreBox">
      <p>Name: {name}</p>
      <p>School: {school}</p>
      <p>Total: {total}</p>
      <p>Goal: {goal}</p>
      <p>Average: {average}</p>
    </div>
  );
}