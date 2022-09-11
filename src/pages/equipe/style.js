import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  padding: 2.5rem 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 3.5rem;
    font-weight: 300;
    text-align: center;
    color: #6695f2;
  }
`;

export  const Conteiner = styled.section`
 
  width: 100%;
  max-width: 1024px;
  max-height: 50vh;
  padding: 0 1.3rem;
  display: grid;
  row-gap: 2rem;
  column-gap: 5rem;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  justify-content: center;
  justify-items: center;
`;
