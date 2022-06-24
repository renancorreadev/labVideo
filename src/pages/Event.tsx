import { Video } from "../components/Video";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import root from "./root.module.css";
import { useParams } from "react-router-dom";

export function Event() {
  const { slug } = useParams<{ slug: string }>();

  const LessonOnDemand = () => {
    return (
      <div className="flex-1 flex flex-col justify-center  align-center ">
        <strong className="text-center text-blue-500 leading-tight text-[3rem] mt-[140px] animate-bounce ">
          Escolha uma aula e dê o play.
        </strong>
        <img
          className="flex justify-center w-[600px] h-[600px]  align-center self-center"
          src="/src/assets/web3.png"
          alt=""
        />
      </div>
    );
  };
  return (
    <div className={root.event_container}>
      <Header />
      <main className={root.main_container}>
        {slug ? <Video lessonSlug={slug} /> : <LessonOnDemand />}
        <Sidebar />
      </main>
    </div>
  );
}
