// import { type PropsWithChildren} from "react";
// type CourseGoalProps = PropsWithChildren<{title: string}>

import { type ReactNode } from "react";

type CourseGoalProps = {
  title: string;
  deleteGoal: (id: number) => void;
  children: ReactNode;
  id: number;
};

export default function CourseGoal({
  title,
  children,
  id,
  deleteGoal,
}: CourseGoalProps) {
  const deleteGoalHandler = () => {
    deleteGoal(id);
  };

  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={deleteGoalHandler}>Delete</button>
    </article>
  );
}
