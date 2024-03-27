// import { type PropsWithChildren} from "react";
// type CourseGoalProps = PropsWithChildren<{title: string}>

import { type ReactNode } from "react";

type CourseGoalProps = {
  title: string;
  children: ReactNode;
};

export default function CourseGoal({ title, children }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button>Delete</button>
    </article>
  );
}
