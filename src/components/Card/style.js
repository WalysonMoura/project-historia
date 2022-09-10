import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 20px;
  transition: all 0.3s;
  box-shadow: 0 -1px 12px hsla(174, 63%, 15%, 0.15);

  :hover {
    div {
      background-color: #181d24;
      transition: all 0.2s;
    }

    background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
    box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.3);
  }
  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 20px;

    :hover {
      transform: scale(0.98);
      border-radius: 20px;
    }
    img {
      border-radius: 50%;
      width: 10.5rem;
      height: 10.5rem;
    }

    h2 {
      font-weight: 300;
      color: #f8f8f8;
    }


    :hover {
      ul {
        li {
          transform: translateY(0);
          opacity: 1;
        }
      }
    }
  }
`;

export const MenuList = styled.ul`
  max-width: 1250px;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5rem;

  @media (max-width: 900px) {
    padding: 0 3rem;
  }
`;
