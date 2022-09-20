import styled from "styled-components";
export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 0 auto;
`;
export const Content = styled.section`
  max-width: 1050px;
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: auto;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
    margin-top: 3rem;

    img {
      width: 20rem;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    color: #f7f7f5;
    padding-left: 1rem;


    div {
      position: relative;
      margin-bottom: 3rem;

      .wrapper {
        width: 200px;
        height: 60px;
        position: relative;
        z-index: 1;
      }

      .circle {
        width: 20px;
        height: 20px;
        position: absolute;
        border-radius: 50%;
        background-color: #fff;
        left: 15%;
        transform-origin: 50%;
        animation: circle7124 0.5s alternate infinite ease;

        :nth-child(2) {
          left: 45%;
          animation-delay: 0.2s;
        }

        :nth-child(3) {
          left: auto;
          right: 15%;
          animation-delay: 0.3s;
        }
      }
      @keyframes circle7124 {
        0% {
          top: 60px;
          height: 5px;
          border-radius: 50px 50px 25px 25px;
          transform: scaleX(1.7);
        }

        40% {
          height: 20px;
          border-radius: 50%;
          transform: scaleX(1);
        }

        100% {
          top: 0%;
        }
      }

      .shadow {
        width: 20px;
        height: 4px;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.9);
        position: absolute;
        top: 62px;
        transform-origin: 50%;
        z-index: -1;
        left: 15%;
        filter: blur(1px);
        animation: shadow046 0.5s alternate infinite ease;

        :nth-child(4) {
          left: 45%;
          animation-delay: 0.2s;
        }
        :nth-child(5) {
          left: auto;
          right: 15%;
          animation-delay: 0.3s;
        }
      }

      @keyframes shadow046 {
        0% {
          transform: scaleX(1.5);
        }

        40% {
          transform: scaleX(1);
          opacity: 0.7;
        }

        100% {
          transform: scaleX(0.2);
          opacity: 0.4;
        }
      }
    }
    h1 {
      font-family: "Poppins", sans-serif;
      font-size: 3rem;
      font-weight: 500;
      text-align: center;
      color:  #6695f2;
    }

    p {
      font-family: "Poppins", sans-serif;
      font-size: 1.25rem;
      text-align: justify;
      font-weight: 300;
      text-indent: 1rem;
      line-height: 1.65rem;
      padding: 1rem;
    }
  }
`;
export const Button = styled.button`
 cursor: pointer;
  position: relative;
  text-align: center;
  display: block;
  width: 10rem;
  border: none;
  font-size: 12px;
  height: 2.5rem;
  text-decoration: none;
  font-weight: 600;
  box-shadow: 0 10px 50px #006eff;
  background-image: linear-gradient(
    to right,
    #6695f2,
    #3d6cfa,
    #6695f2,
    #3d6cfa
  );
  font-size: .83rem;
  border-radius: .5rem;
  margin-top: 1rem;
  color: #f8f8f8;
  font-weight: 400;
  @media (max-width: 768px) {
   margin: 0 auto;
  }
`;

export const VideoConteiner = styled.section`
  max-width: 1050px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;

  .video {
    position: relative;
    width: 50%;

    padding-bottom: 56.25%;

    background: rgba(255, 255, 255, 0.05);
    margin: 2%;
    box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    margin-bottom: 7rem;
    iframe {
      position: absolute;
      width: 90%;
      height: 90%;

      top: 5%;
      left: 5%;

      border: none;
      border-radius: 5px;
    }
  }

  div {
    position: relative;
    width: 120px;
    height: 90px;
    margin: 0 auto;
    :before {
      content: "";
      position: absolute;
      bottom: 30px;
      left: 50px;
      height: 30px;
      width: 30px;
      border-radius: 50%;
      background:  #6695f2;
      animation: loading-bounce 0.5s ease-in-out infinite alternate;
    }

    :after {
      content: "";
      position: absolute;
      right: 0;
      top: 0;
      height: 7px;
      width: 45px;
      border-radius: 4px;
      box-shadow: 0 5px 0 #f2f2f2, -35px 50px 0 #f2f2f2, -70px 95px 0 #f2f2f2;
      animation: loading-step 1s ease-in-out infinite;
    }
    @keyframes loading-bounce {
      0% {
        transform: scale(1, 0.7);
      }

      40% {
        transform: scale(0.8, 1.2);
      }

      60% {
        transform: scale(1, 1);
      }

      100% {
        bottom: 140px;
      }
    }
    @keyframes loading-step {
      0% {
        box-shadow: 0 10px 0 rgba(0, 0, 0, 0), 0 10px 0 #f2f2f2,
          -35px 50px 0 #f2f2f2, -70px 90px 0 #f2f2f2;
      }

      100% {
        box-shadow: 0 10px 0 #f2f2f2, -35px 50px 0 #f2f2f2, -70px 90px 0 #f2f2f2,
          -70px 90px 0 rgba(0, 0, 0, 0);
      }
    }
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    flex-direction: column;
    margin-bottom: 6rem;
    margin-top: 4rem;

    .video {
      width: 90%;
      margin-bottom: 0;

      iframe {
        width: 90%;
        height: 90%;
      }
    }
  }
`;
