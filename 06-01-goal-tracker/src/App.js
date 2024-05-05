import { useState } from "react";

const initialGoals = [
  {
    id: 1,
    goal: "React project",
    // dueby: new Date("2022-10-31"),
    dueby: "2024-04-29",
    completed: false,
  },
  {
    id: 2,
    goal: "Node",
    dueby: "2024-04-22",
    completed: false,
  },
  {
    id: 3,
    goal: "pr2",
    dueby: "2024-04-28",
    completed: true,
  },
];

export default function App() {
  const [goals, setGoals] = useState(initialGoals);

  function handleAddNewGoal(goal) {
    setGoals((goals) => [...goals, goal]);
  }

  function handleToggleGoal(goalId) {
    setGoals((goals) =>
      goals.map((goal) =>
        goal.id === goalId ? { ...goal, completed: !goal.completed } : goal
      )
    );
  }
  return (
    <div className="App">
      <h1>Goals</h1>
      <Goals goals={goals} onToggleGoal={handleToggleGoal} />
      <AddGoal onAddGoal={handleAddNewGoal} />
    </div>
  );
}

function Goals({ goals, onToggleGoal }) {
  const sortedGoals = goals
    .slice()
    .sort((a, b) => Number(a.completed - b.completed));

  return (
    <ul>
      {sortedGoals.map((goal) => (
        <Goal goal={goal} onToggleGoal={onToggleGoal} key={goal.id} />
      ))}
    </ul>
  );
}

function Goal({ goal, onToggleGoal }) {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  month = month < 9 ? "0" + month : month;
  let year = newDate.getFullYear();
  let todayDate = year + "-" + month + "-" + date;
  console.log(goal.dueby, todayDate);
  return (
    <li>
      <p>
        <input
          type="checkbox"
          value={goal.completed}
          checked={goal.completed}
          onChange={() => onToggleGoal(goal.id)}
        />
        <span
          style={
            goal.completed
              ? { textDecoration: "line-through", color: "grey" }
              : {}
          }
        >
          {goal.goal},{" "}
          {goal.dueby < todayDate ? `overdue` : `due by: ${goal.dueby}`}
        </span>
      </p>
    </li>
  );
}

function AddGoal({ onAddGoal }) {
  const [goal, setGoal] = useState("");
  const [dueDate, setDueDate] = useState("");

  function handleAddGoal(e) {
    e.preventDefault();

    if (!goal || !dueDate) return;
    const id = crypto.randomUUID();
    const newGoal = {
      id,
      goal,
      dueby: dueDate,
      completed: false,
    };
    onAddGoal(newGoal);
    setGoal("");
    setDueDate("");
  }

  return (
    <form onSubmit={(e) => handleAddGoal(e)}>
      <label>Goal: </label>
      <input
        type="text"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      />
      <label> Due Date: </label>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button>Add Goal</button>
    </form>
  );
}
