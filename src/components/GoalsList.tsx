import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGoal } from "../App";
import InfoBox from "./InfoBox";
import { ReactNode } from "react";

type GoalListProps = {
  goals: CGoal[];
  onDelete: (id: number) => void;
};

export default function GoalsList({ goals, onDelete }: GoalListProps) {
  if (goals.length === 0) {
    return <InfoBox mode="hint">Start adding some goals</InfoBox>;
  }

  let dynamicInfoBox: ReactNode;

  if (goals.length >= 4) {
    dynamicInfoBox = (
      <InfoBox mode="warning" severity="low">
        You are adding too many goals
      </InfoBox>
    );
  }

  return (
    <>
      {dynamicInfoBox}
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
