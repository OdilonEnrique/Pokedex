import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  padding: 2.4rem 3.2rem;
  width: 100%;
  text-align: center;
  font-weight: 700;
  text-shadow: 1px 1px 2px #0004;
  box-shadow: 0px 0px 1px 1px #0004;

  a {
    font-size: 1.2rem;
    border-radius: 0.8rem;
    padding: 1.2rem;
    background: #eee2; /* # eee2 */
    display: block;
    color: ${({ theme }) => theme.colors.light};
    text-align: center;
  }

  @media (min-width: 768px) {
    padding: 2.4rem 3.2rem;

    a {
      font-size: 2.4rem;
      padding: 3.2rem;
    }
  }
`;
