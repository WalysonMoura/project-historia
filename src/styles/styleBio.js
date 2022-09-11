import styled from "styled-components";

export const Main = styled.main`
  max-width: 768px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding-top: 2rem;
  padding-bottom: 5rem;
  overflow-x: hidden;


  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 3.5rem;
    font-weight: 300;
    text-align: center;
    color: #6695f2;
  }

  p {
    font-family: "Poppins", sans-serif;
    font-size: 1.25rem;
    text-align: justify;
    font-weight: 300;
    text-indent: 1rem;
    line-height: 1.65rem;
    padding: 1rem;
    color: #f8f8f8;
  }
`;
export const Card = styled.section`
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  gap: 5rem;
`;
