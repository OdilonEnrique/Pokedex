import styled from "styled-components";
import { TypeProps } from ".";

export const Container = styled.span<TypeProps>`
  background: ${({theme, type}) => theme.colors.types[type]};
`;
