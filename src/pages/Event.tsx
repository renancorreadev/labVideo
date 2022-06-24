import { Video } from "../components/Video";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import root from "./root.module.css";
import { useParams } from "react-router-dom";
import { gql } from "@apollo/client";

export function Event() {
  const { slug } = useParams<{ slug: string }>();
  return (
    <div className={root.event_container}>
      <Header />
      <main className={root.main_container}>
        {slug ? <Video lessonSlug={slug} /> : <div className="flex-1" />}
        <Sidebar />
      </main>
    </div>
  );
}
