import { gql, useQuery } from "@apollo/client";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`;

interface Lesson {
  id: string;
  title: string;
}

function App() {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);

  if (data) {
    console.log(data);
  }

  return (
    <div className="App">
      <ul>
        {data?.lessons.map((lesson) => {
          return <li key={lesson.id}>{lesson.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
