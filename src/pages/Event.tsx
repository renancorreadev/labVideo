import { Video } from "../components/Video";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import root from "./root.module.css";

export function Event() {
  return (
    <div className={root.event_container}>
      <Header />
      <main className={root.main_container}>
        <Video />
        <Sidebar />
      </main>
    </div>
  );
}
