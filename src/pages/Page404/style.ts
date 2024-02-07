import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  place-content: center;
  height: 100vh;

  img {
    margin-top: 2.4rem;
    width: 32rem;
    box-shadow: 1px 1px 2px 1px #0002;
  }

  button {
    background: ${({ theme }) => theme.colors.danger};
    color: ${({ theme }) => theme.colors.light};
    box-shadow: 1px 1px 1px #0004;
    border-radius: 3.2rem;
    font-size: 1.2rem;
    font-weight: 700;
    padding: 1rem;
    width: 30%;
    margin: 1.6rem auto 0;

    &:hover {
      cursor: pointer;
      filter: brightness(1.05);
    }
  }

  @media (min-width: 768px) {
    img {
      margin-top: 4.8rem;
      width: 56rem;
    }

    button {
      font-size: 1.6rem;
      padding: 1.2rem;
      width: 25%;
      margin: 2.4rem auto 0;
    }
  }
`;