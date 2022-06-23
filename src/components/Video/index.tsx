import root from "./root.module.css";
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Lightning,
} from "phosphor-react";
export function Video() {
  return (
    <div className={root.video_container}>
      <div className={root.video_quad_box}>
        <div className={root.videoplayer}></div>
      </div>

      <div className={root.section_container_1}>
        <div className={root.section_containerBox}>
          <div className={root.container_box_text}>
            <h1>Abertura do Evento de Blockchain</h1>
            <p>
              Nessa Aula vamos obter os dados do evento e entender como
              funciona.
            </p>
            <div className={root.container_box_teacher}>
              <img
                src="https://github.com/renancorreadev.png"
                alt="teacher image"
                className={root.image_teacher}
              />

              <div className={root.container_teacher_description}>
                <strong>Renan Correa</strong>
                <span>Front End Developper</span>
              </div>
            </div>
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
          <a href="">
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

          <a href="">
            <div className={root.fileArrow}>
              <FileArrowDown size={40} />
            </div>
            <div className={root.container_buttons}>
              <strong>Acesse os Wallpapers dessa Edição.</strong>
              <p>Clique aqui e baixe o nosso Wallpaper para esse evento.</p>
            </div>
            <div className={root.container_icon}>
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
