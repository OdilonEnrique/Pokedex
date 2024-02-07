import styled from "styled-components";

export const Container = styled.main`
  h1 {
    font-size: 1.4rem;
    text-align: center;
    color: lightgray;
    margin-top: 0.8rem;
  }

  .gridCards {
    min-height: 100vh;
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    flex-wrap: wrap;
  }

  .paginationComponent {
    width: 22rem;
    margin: 1.4rem auto 0;
    padding: 0.6rem 1.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .boxNumberPage {
      font-size: 1.2rem;
      font-weight: 700;
    }

    button {
      background: ${({ theme }) => theme.colors.danger};
      color: ${({ theme }) => theme.colors.light};
      font-size: 1rem;
      font-weight: 700;
      padding: 0.6rem 1.2rem;
      border-radius: 0.8rem;
      box-shadow: 1px 1px 2px 0px #0008;
      text-shadow: 1px 1px 2px #0004;

      &:disabled {
        background: lightgray;
      }

      &:not(:disabled):hover {
        filter: brightness(1.05);
      }
    }
  }

  @media (min-width: 768px) {
    h1 {
      margin-top: 2.4rem;
      font-size: 2.8rem;
    }

    .gridCards {
      margin-top: 4.2rem;
      gap: 2.4rem;
    }

    .paginationComponent {
      width: 32rem;
      margin: 3.2rem auto 0;

      .boxNumberPage {
        font-size: 1.8rem;
      }

      button {
        font-size: 1.6rem;
        padding: 0.8rem 1.6rem;
      }
    }
  }
`;
