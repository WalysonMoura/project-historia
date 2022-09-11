import Head from "next/head";
import Image from "next/image";

import { Fade } from "react-awesome-reveal";

import MenuBottom from "../components/MenuBottom";

// Styled Components
import * as Style from "../styles/style";
import Globals from "../styles/Globals";

export default function Home() {
  return (
    <>
      <Head>
        <title>Getúlio Vargas</title>
        <meta
          name="description"
          content="Site desenvolvido para o trabalho parcial de história"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Globals />
      <Style.Main>
        <div className="cicle1"></div>
        <div className="cicle2"></div>
        <div className="cicle3"></div>
        <div className="cicle4"></div>
        <Style.Content>
          <div>
            <Fade top delay={1000} cascade>
              <div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
              </div>
              <h1>Getúlio Vargas</h1>
              <p>
                Getúlio Vargas, um dos grandes nomes da política brasileira do
                século XX, foi o presidente que mais tempo governou o nosso
                país.
              </p>
              <Style.Button>Saiba mais...</Style.Button>
            </Fade>
          </div>
          <Image
            src="/img1.png"
            width={800}
            height={800}
            alt="imlll agem"
            responsive
          />
        </Style.Content>
        <Fade>
          <Style.VideoConteiner>
            <section className="video">
              <iframe
                src="https://www.youtube.com/embed/eVgOODBrCMc"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </section>
            <div></div>
          </Style.VideoConteiner>
        </Fade>
      </Style.Main>

      <MenuBottom />
    </>
  );
}
