import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  min-height: 100vh;

  main {
    max-width: 150rem;
    margin: 0 auto;
    padding: 1.2rem;
  }

  @media (min-width: 768px) {
    main {
      padding: 2.4rem;
    }
  }
`;
