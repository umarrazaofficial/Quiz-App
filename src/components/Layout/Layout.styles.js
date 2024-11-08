import styled, { css } from "styled-components";

export const StyledLayout = styled.div`
  ${({ $showlayout }) =>
    !$showlayout &&
    css`
      padding: 0px 20px;
      @media (min-width: 992px) {
        padding: 0px;
      }
    `}
  .children {
    min-height: 100vh;
    ${({ $showlayout }) =>
      $showlayout &&
      css`
        background: var(--white);
        padding: 15px 10px;
        @media (min-width: 768px) {
          padding: 20px;
        }
      `}
  }
`;
