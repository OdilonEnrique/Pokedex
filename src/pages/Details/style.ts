import styled from "styled-components";

export const Container = styled.main`
  .boxDetails {
    background: ${({ theme }) => theme.colors.light};
    padding: 2.4rem;
    border-radius: 0.8rem;
    box-shadow: 1px 1px 2px 1px #0002;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    position: relative;
    overflow: hidden;

    .buttonBackPage {
      font-size: 1.4rem;
      font-weight: 500;
      position: absolute;
      top: 16px;
      left: 18px;

      &:hover {
        text-decoration: underline;
      }
    }

    .pokemonImage {
      width: 20rem;
      border-radius: 100%;
      background: #ddd8;
      box-shadow: 1px 1px 2px 1px #0002;
      margin-top: 2.4rem;
    }

    .pokemonImage img {
      filter: drop-shadow(1px 1px 1px #000b);
      width: 100%;
    }

    .boxStatus {
      text-align: center;
      margin-top: 2rem;
    }

    strong {
      font-size: 2rem;
    }

    .sizePokemon {
      margin-top: 0.8rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2.4rem;

      span {
        font-size: 1.6rem;
        color: gray;
      }
    }

    .boxTypes {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.8rem;
      margin-top: 2rem;
    }

    .boxStats {
      margin-top: 2.8rem;
    }

    .stats {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .statsName {
      font-size: 1.4rem;
      width: 11rem;
      margin-left: auto;
    }

    progress {
      height: 0.6rem;

      &::-webkit-progress-value {
        background: ${({ theme }) => theme.colors.primary};
        border-radius: 8px;
      }

      &::-webkit-progress-bar {
        background: lightgray;
        filter: drop-shadow(1px 1px 1px #000b);
        border-radius: 8px;
      }

      &::-moz-progress-value {
        background: ${({ theme }) => theme.colors.primary};
        border-radius: 8px;
      }

      &::-moz-progress-bar {
        background: lightgray;
        filter: drop-shadow(1px 1px 1px #000b);
        border-radius: 8px;
      }
    }

    .statsValue {
      font-size: 1.4rem;
      width: 2.8rem;
      text-align: right;
    }
  }

  @media (min-width: 768px) {
    .boxDetails {
      flex-direction: row;
      width: 120rem;

      .buttonBackPage {
        font-size: 1.6rem;
        top: 22px;
        left: 28px;
      }

      .pokemonImage {
        width: 28rem;
        margin-top: 2.4rem;
      }

      .pokemonImage img {
        filter: drop-shadow(1px 1px 1px #000b);
        width: 100%;
      }

      .boxStatus {
        text-align: left;
      }

      strong {
        font-size: 3.2rem;
      }

      .sizePokemon {
        justify-content: start;

        span {
          font-size: 1.8rem;
        }
      }

      .boxTypes {
        justify-content: start;
        gap: 1.6rem;
        margin-top: 2.4rem;
      }

      .stats {
        margin-top: 0.2rem;
      }

      .statsName {
        font-size: 1.8rem;
        width: 14rem;
      }

      progress {
        height: 0.8rem;
      }

      .statsValue {
        font-size: 1.8rem;
        width: 3.6rem;
      }
    }
  }
`;
