import styled from "styled-components";

export const Menu = styled.header`
  height: 4rem;
  width: 100%;
  padding: 1rem 0;
  position: fixed;
  z-index: 60;
  bottom: 0;

  background-color:  #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0 -1px 12px hsla(174, 63%, 15%, 0.15);
  border-radius: 1.25rem 1.25rem 0 0;

  nav {


    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 768px){
    height: 5rem;

  }
`;

export const MenuList = styled.ul`
  max-width: 1250px;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5rem;

  li{
    a{
      transition: all 0.3s ease;
      cursor: pointer;

      >svg{
       font-size: 3rem;
        
      }
    }
  }

  @media (max-width: 900px) {
    padding: 0 3rem;
    li{
    a{
     
      >svg{
     
      }
    }
  }
  }

`;
