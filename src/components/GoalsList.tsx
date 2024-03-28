import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGoal } from "../App";

type GoalListProps = {
  goals: CGoal[];
};

export default function GoalsList({ goals }: GoalListProps) {
  return (
    <ul>
      {goals.map((g) => (
        <li key={g.id}>
          <CourseGoal title={g.title}>
            <p>{g.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
