import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGoal } from "../App";
import InfoBox from "./InfoBox";

type GoalListProps = {
  goals: CGoal[];
  onDelete: (id: number) => void;
};

export default function GoalsList({ goals, onDelete }: GoalListProps) {
  if (goals.length === 0) {
    return <InfoBox mode="hint">Start adding some goals</InfoBox>;
  }
  return (
    <>
      {goals.length > 5 && (
        <InfoBox mode="warning">You are putting too many goals</InfoBox>
      )}
      <ul>
        {goals.map((g) => (
          <li key={g.id}>
            <CourseGoal title={g.title} onDelete={onDelete} id={g.id}>
              <p>{g.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}
