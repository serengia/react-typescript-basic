import { type FormEvent, useRef } from "react";
import { CourseGoal } from "../App";

type NewGoalFormProps = {
  setFormData: (data: CourseGoal) => void;
};

export default function NewGoalForm({ setFormData }: NewGoalFormProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    const title = titleRef.current!.value;
    const description = descriptionRef.current!.value;

    const newGoal: CourseGoal = {
      title,
      description,
      id: Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100),
    };

    setFormData(newGoal);
  };

  return (
    <form onSubmit={submitHandler}>
      <p>
        <label htmlFor="title">Your goal</label>
        <input type="text" id="title" ref={titleRef} />
      </p>
      <p>
        <label htmlFor="summary">Your goal summary</label>
        <input type="text" id="summary" ref={descriptionRef} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
