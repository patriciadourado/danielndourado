import styled from "styled-components";

export const HeaderDnd = styled.header`
  padding: 20rem 30rem;
  position: fixed;
  width: 100%;
  height: 7vh;
  z-index: 101;
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: right;
  @media (max-width: 887px) {
    padding: 15rem 16rem;
    height: 60px;
    justify-content: center;
  }
`;