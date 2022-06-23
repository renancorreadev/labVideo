import root from "./root.module.css";
import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link } from "react-router-dom";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: LessonType;
}

export type LessonType = "live" | "class";

export function Lesson({ slug, availableAt, type }: LessonProps) {
  const isLessonAvailable = isPast(availableAt);
  const availableDateFormat = format(
    availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    { locale: ptBR }
  );

  return (
    <Link
      to={`/event/lesson/${slug}`}
      className={root.lesson_container + " group"}
    >
      <span className={root.datetime}>{availableDateFormat}</span>
      <div className={root.viewBox + " group-hover:border-green-500"}>
        <header className={root.header}>
          {isLessonAvailable ? (
            <span className={root.content_title}>
              <CheckCircle size={20} />
              Conteudo Liberado
            </span>
          ) : (
            <span className={root.content_title_unavailable}>
              <Lock size={20} />
              Em Breve
            </span>
          )}
          <span className={root.content_live}>
            {type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>
        <strong className={root.content_strong}>
          Abertura do evento Ignite labs
        </strong>
      </div>
    </Link>
  );
}
