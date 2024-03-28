import { useState } from "react";
import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import GoalsList from "./components/GoalsList";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const addGoalHandler = () => {
    const newGoal: CourseGoal = {
      title: "My first Goal",
      description: "First goal description",
      id: Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100),
    };
    // Add goal
    setGoals((prevValues) => {
      return [newGoal, ...prevValues];
    });
  };

  return (
    <main>
      <Header image={{ src: "/goals.jpg", alt: "Goal image" }}>
        <h2>Your Course Goals </h2>
      </Header>
      <button onClick={addGoalHandler}>Add Goal</button>
      <GoalsList goals={goals} />
    </main>
  );
}
