import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.light};
  min-width: 12rem;
  min-height: 16rem;
  padding: 1.2rem 0.8rem;
  border-radius: 0.8rem;
  box-shadow: 1px 1px 2px 1px #0002;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: scale 100ms;

  &:hover {
    scale: 1.05;
  }

  img {
    filter: drop-shadow(1px 1px 1px #000b);
    width: 8rem;
  }

  strong {
    margin-top: 0.8rem;
    font-size: 1rem;
    text-transform: capitalize;
  }

  .boxTypes {
    display: flex;
    gap: 0.4rem;
    margin-top: 0.8rem;
  }

  @media (min-width: 768px) {
    padding: 2.4rem;
    min-width: 22rem;
    min-height: 28rem;

    img {
      width: 16rem;
    }

    strong {
      font-size: 1.6rem;
    }

    .boxTypes {
      gap: 0.8rem;
      margin-top: 1.2rem;
    }
  }
`;
