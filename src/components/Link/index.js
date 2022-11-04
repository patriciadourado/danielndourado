import styled from "styled-components";

const Link = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: var(--color-yellow);
  cursor: pointer;
  
  @-moz-document url-prefix() {
    font-weight: lighter;
  }
  &:hover{
    color: var(--color-white);
  }
`;

export default Link;
