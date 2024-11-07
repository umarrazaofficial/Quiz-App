import styled from "styled-components";

export const FormContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  .heading-text {
    width: 100%;
    color: var(--text-color);
    margin: 0 0 30px;
    text-align: center;
    font-size: 18px;
    line-height: 22px;
    font-weight: 300;
    @media (min-width: 768px) {
      font-size: 20px;
      line-height: 24px;
    }
  }
  .thank-you-text {
    opacity: ${({ isActive }) => (isActive ? "1" : "0")};
    color: var(--text-color);
    text-align: center;
    font-size: 28px;
    line-height: 32px;
    font-weight: 600;
    margin-bottom: 30px;
    transition: all 0.5s ease-in-out;
    @media (min-width: 768px) {
      font-size: 36px;
      line-height: 40px;
    }
    span {
      color: var(--primary);
    }
  }
  .description {
    opacity: ${({ isActive }) => (isActive ? "1" : "0")};
    transition: all 0.7s ease-in-out;
    color: var(--text-color);
    text-align: center;
    font-size: 28px;
    line-height: 32px;
    font-weight: 400;
    margin-bottom: 30px;
    @media (min-width: 768px) {
      font-size: 22px;
      line-height: 30px;
    }
  }
  .animation {
    display: inline-block;
    filter: drop-shadow(0 3px 6px rgba(205, 205, 205, 0.4));

    .img {
      width: 172px;
      height: 172px;

      @media (max-width: 576px) {
        width: 142px;
        height: 142px;
      }
    }
  }
  .head {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 85px;
    .back-arrow {
      cursor: pointer;
      margin-bottom: 15px;
    }
  }

  h1 {
    color: var(--text-color);
  }

  form {
    max-width: 480px;
    width: 100%;
    overflow: hidden;

    .input-flex {
      display: flex;
      align-items: flex-start;
      gap: 15px;
      width: 100%;
    }

    label {
      display: block;
      width: 100%;
      font-size: 18px;
      line-height: 24px;
      font-weight: 400;
      margin: 0 0 16px;
      color: var(--text-color);
    }
  }

  .btn-holder {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 20px 0 16px;
    opacity: ${({ isActive }) => (isActive ? "1" : "0")};
    transition: all 0.9s ease-in-out;
  }

  .sign-in {
    width: 100%;
    color: var(--text-color);
    text-align: right;
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
    padding: 10px;
    cursor: pointer;
    @media (min-width: 768px) {
      font-size: 16px;
      line-height: 20px;
    }
  }
`;
