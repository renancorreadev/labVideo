import root from "./root.module.css";
import { Lesson } from "../Header/Lesson";

import { LessonType } from "../Header/Lesson";
import { gql, useQuery } from "@apollo/client";

const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: publishedAt_ASC, stage: PUBLISHED) {
      id
      lessonType
      availableAt
      title
      slug
    }
  }
`;
interface GetLessonsQueryResponse {
  lessons: {
    id: string;
    title: string;
    availableAt: string;
    slug: string;
    lessonType: LessonType;
  }[];
}

export function Sidebar() {
  const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY);

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
