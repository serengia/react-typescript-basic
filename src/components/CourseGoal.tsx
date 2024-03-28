// import { type PropsWithChildren} from "react";
// type CourseGoalProps = PropsWithChildren<{title: string}>

import { type ReactNode } from "react";
import Header from "./Header";

type CourseGoalProps = {
  title: string;
  children: ReactNode;
};

export default function CourseGoal({ title, children }: CourseGoalProps) {
  return (
    <article>
      <Header image={{ src: "/goals.jpg", alt: "Goal image" }}>
        <h2>Your Course Goals </h2>
      </Header>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button>Delete</button>
    </article>
  );
}
