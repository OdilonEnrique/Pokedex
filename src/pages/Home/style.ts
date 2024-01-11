import styled from "styled-components";

export const Container = styled.main`
  min-height: 100vh;

  h1 {
    font-size: 1.4rem;
    text-align: center;
    color: lightgray;
    margin-top: 0.8rem;
  }

  .gridCards{
    min-height: 100vh;
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    flex-wrap: wrap;
  }

  @media (min-width: 768px) {
    h1{
      margin-top: 2.4rem;
      font-size: 2.8rem;
    }

    .gridCards{
      margin-top: 4.2rem;
      gap: 2.4rem;
    }
  }
`;
