import root from "./root.module.css";
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Lightning,
} from "phosphor-react";
import { DefaultUi, Player, Youtube } from "@vime/react";
//@vite-ignore
import "@vime/core/themes/default.css";
import { useGetLessonBySlugQuery } from "../../graphql/generated";

interface VideoProps {
  lessonSlug: string;
}

export function Video(props: VideoProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: props.lessonSlug,
    },
    fetchPolicy: "no-cache",
  });

  if (!data || !data.lesson) {
    return (
      <div className="flex-1">
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <div className={root.video_container}>
      <div className={root.video_quad_box}>
        <div className={root.videoplayer}>
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className={root.section_container_1}>
        <div className={root.section_containerBox}>
          <div className={root.container_box_text}>
            <h1>{data.lesson.title}</h1>
            <p>{data.lesson.description}</p>
            {data.lesson.teacher && (
              <div className={root.container_box_teacher}>
                <img
                  src={data.lesson.teacher.avatarURL}
                  alt="teacher image"
                  className={root.image_teacher}
                />

                <div className={root.container_teacher_description}>
                  <strong>{data.lesson.teacher.name}</strong>
                  <span>{data.lesson.teacher.bio}</span>
                </div>
              </div>
            )}
          </div>

          <div className={root.container_box_buttons}>
            <a href="#" className={root.button_community}>
              <DiscordLogo size={24} />
              Comunidade Web3
            </a>

            <a href="#" className={root.button_challenge}>
              <Lightning size={24} />
              Acesse o Desafio
            </a>
          </div>
        </div>

        <div className={root.section_container_2}>
          <a href="" className={root.acess}>
            <div className={root.fileArrow}>
              <FileArrowDown size={40} />
            </div>
            <div className={root.container_buttons}>
              <strong>Material Complementar</strong>
              <p>
                Acesse o Material complementar para acerelar seu desenvolvimento
                em blockchain.
              </p>
            </div>
            <div className={root.container_icon}>
              <CaretRight size={24} />
            </div>
          </a>

          <a href="" className={root.acess_mobile}>
            <div className={root.fileArrow}>
              <FileArrowDown size={40} />
            </div>
            <div className={root.container_buttons}>
              <strong>Material Complementar</strong>
              <p>
                Acesse o Material complementar para acerelar seu desenvolvimento
                em blockchain.
              </p>
            </div>
          </a>

          <a href="" className={root.acess_mobile}>
            <div className={root.fileArrow}>
              <FileArrowDown size={40} />
            </div>
            <div className={root.container_buttons}>
              <strong>Acesse os Wallpapers dessa Edi????o.</strong>
              <p>Clique aqui e baixe o nosso Wallpaper para esse evento.</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
