import { useState } from "react";
import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";

type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const addGoalHandler = () => {
    const newGoal = {
      title: "My first Goal",
      description: "First goal description",
      id: Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100),
    };
    // Add goal
    setGoals((prevValues) => {
      return [newGoal, ...prevValues];
    });
  };

  const deleteGoalHandler = (id: number) => {
    setGoals((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };
  return (
    <main>
      <Header image={{ src: "/goals.jpg", alt: "Goal image" }}>
        <h2>Your Course Goals </h2>
      </Header>
      <button onClick={addGoalHandler}>Add Goal</button>
      {goals.map((g) => (
        <CourseGoal
          key={g.id}
          title={g.title}
          id={g.id}
          deleteGoal={deleteGoalHandler}
        >
          <p>{g.description}</p>
        </CourseGoal>
      ))}
    </main>
  );
}
