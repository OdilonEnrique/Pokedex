import styled from "styled-components";
import { TypeProps } from ".";

export const Container = styled.span<TypeProps>`
  background: ${({ theme, type }) => theme.colors.types[type]};
  color: ${({ theme }) => theme.colors.light};
  font-size: ${({ size }) => size! / 10}rem;
  padding: 0.4rem 1rem;
  border-radius: 0.8rem;
  box-shadow: 1px 1px 1px 0px #0008;
  text-shadow: 1px 1px 2px #0006;

  @media (min-width: 768px) {
    font-size: ${({ size }) => (size! + 4) / 10}rem;
    padding: 0.6rem 1.2rem;
  }
`;
