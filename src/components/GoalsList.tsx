import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGoal } from "../App";

type GoalListProps = {
  goals: CGoal[];
  onDelete: (id: number) => void;
};

export default function GoalsList({ goals, onDelete }: GoalListProps) {
  return (
    <ul>
      {goals.map((g) => (
        <li key={g.id}>
          <CourseGoal title={g.title} onDelete={onDelete} id={g.id}>
            <p>{g.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
