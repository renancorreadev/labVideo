import root from "./root.module.css";
import { Lesson } from "../Lesson";
import { useGetLessonsQuery } from "../../graphql/generated";

export function Sidebar() {
  const { data } = useGetLessonsQuery();

  return (
    <>
      <aside className={root.aside_container}>
        <span className={root.title}>Cronograma de aulas</span>

        <div className={root.lesson_container}>
          {data?.lessons.map((lesson) => {
            return (
              <>
                <Lesson
                  key={lesson.id}
                  title={lesson.title}
                  slug={lesson.slug}
                  availableAt={new Date(lesson.availableAt)}
                  type={lesson.lessonType}
                />
              </>
            );
          })}
        </div>
      </aside>

      <div className="flex flex-col gap-8"></div>
    </>
  );
}
