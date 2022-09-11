import styled from "styled-components";

export const Card = styled.section`
  width: 20rem;
  margin: 0 auto;
  cursor: pointer;
`;
export const Content = styled.div`
  position: relative;

  height: 25rem;
  transition: all 2.25s;
  background-color: rgb(127, 204, 240);
  padding: 5em;
  transform-style: preserve-3d;
  border-radius: 1rem;

  :hover {
    transform: rotateY(0.5turn);
  }

  .frente,
  .verso {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 2em;
    transform-style: preserve-3d;
    backface-visibility: hidden;
  }
  .frente {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    h3 {
      transform: translateZ(5rem);
      font-size: 2rem;
      font-weight: 500;
      color: #12162d;
    }
    p {
      font-size: 1.5rem;
      text-align: center;
      color: hsl(238, 100%, 15%);
    }
  }

  .verso {
    transform: rotateY(0.5turn);
    background-color: #009bff;
    border-radius: 1rem;

    p {
      transform: translateZ(3rem);
      text-align: center;
      font-size: 1.2rem;
      color: #0f0f0f;
    }
  }
`;
