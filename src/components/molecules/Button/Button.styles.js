import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ $gap }) => ($gap ? $gap : "5px")};
  padding: 13px 15px;
  font-size: 16px;
  line-height: 18px;
  font-weight: 400;
  width: 100%;
  max-width: ${({ $width }) => $width && $width};
  background: var(--primary);
  color: var(--white);
  transition: 0.5s all ease-in-out;
  overflow: hidden;

  ${({ $loader, disabled }) =>
    $loader ||
    (disabled &&
      css`
        cursor: not-allowed;
        background-color: #cdcdcd;
        /* border: 1px solid #cdcdcd; */
        color: var(--white);
      `)}

  ${({ $lg }) =>
    $lg &&
    css`
      padding: 16px 20px;
      font-size: 22px;
      line-height: 26px;
      font-weight: 700;
      width: ${({ $width }) => ($width ? $width : "283px")};
    `}

  ${({ $variant }) =>
    $variant === "white" &&
    css`
      background: var(--white);
      color: var(--primary);
      border: 1px solid var(--primary);
      padding: 14px 27px;

      .loader {
        border-top: 3px solid var(--link-color) !important;
      }
    `}
  ${({ $variant }) =>
    $variant === "primary" &&
    css`
      background: var(--primary);
      color: var(--white);
      padding: 14px 27px;
    `}
  ${({ $variant }) =>
    $variant === "gray" &&
    css`
      background: #cdcdcd;
      color: var(--white);
      padding: 14px 27px;
    `}
    ${({ $variant }) =>
    $variant === "light-primary" &&
    css`
      background: var(--white);
      color: var(--primary);
      border: 1px solid var(--primary);
      padding: 14px 27px;
      &:hover {
        background: var(--primary);
        color: var(--white);
      }
    `}
  ${({ $variant }) =>
    $variant === "danger" &&
    css`
      background: var(--danger);
      color: var(--white);
    `}
  /*****************Background Variants End*********************/


  /*****************Border Variants Start*********************/

  ${({ $outline }) =>
    $outline &&
    css`
      border: 1px solid #0000001a;
      background: transparent;
      color: var(--text-color);
    `}
  /*****************Border Variants End*********************/

    .loader {
    width: 17px;
    height: 17px;
    border-radius: 50%;
    display: inline-block;
    border-top: 3px solid #fff;
    border-right: 3px solid transparent;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    ${({ $lg }) =>
      $lg &&
      css`
        width: 27px;
        height: 27px;
      `}
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  &::before {
    position: absolute;
    content: "";
    width: 70px;
    height: 300px;
    background: rgba(255, 255, 255, 0.7);
    transform: rotate(-35deg);
    top: -100px;
    left: -100%;
    transition: all 1500ms cubic-bezier(0.19, 1, 0.22, 1);
    opacity: 0;
  }
  &:hover {
    box-shadow: ${({ disabled }) =>
      !disabled && "0px 10.45px 20.22px -6.97px rgba(251, 225, 143, 0.8)"};
    &:before {
      left: 150%;
      opacity: 0.4;
    }
  }
`;
