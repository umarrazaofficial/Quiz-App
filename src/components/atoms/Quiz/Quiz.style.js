import styled, { css } from "styled-components";

export const QuizWrapper = styled.div`
  .question-wrap {
    min-height: 200px;
    padding: 20px;
    margin-bottom: 20px;
    background-color: var(--primary);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    @media (min-width: 992px) {
      margin-bottom: 50px;
    }
    h2 {
      color: var(--white);
      font-size: 30px;
      line-height: 34px;
      font-weight: 400;
      @media (min-width: 576px) {
        font-size: 36px;
        line-height: 40px;
      }
      @media (min-width: 768px) {
        font-size: 40px;
        line-height: 44px;
      }
      @media (min-width: 992px) {
        font-size: 46px;
        line-height: 50px;
      }
    }
  }
  .options-wrap {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    @media (min-width: 992px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
  .btn-wrap {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-top: 100px;
    button {
      margin: 0 auto;
      height: 60px;
    }
    .next-btn {
      position: absolute;
      right: 0;
    }
  }
`;

export const Option = styled.div`
  padding: 20px;
  width: 100%;
  height: 100%;
  min-height: 100px;
  max-width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  background-color: ${({ $selected }) =>
    $selected ? "var(--primary)" : "var(--gray-200)"};
  margin: 0 auto;

  ${({ $correctTab }) =>
    $correctTab &&
    css`
      border: 3px solid var(--success);
    `}

  @media (min-width: 992px) {
    max-width: 250px;
  }
  .option-count {
    position: absolute;
    top: 5px;
    left: 5px;
    font-size: 22px;
    line-height: 26px;
    font-weight: 500;
  }
  h2 {
    font-size: 26px;
    line-height: 30px;
    font-weight: 400;
    @media (min-width: 576px) {
      font-size: 30px;
      line-height: 34px;
    }
    @media (min-width: 768px) {
      font-size: 36px;
      line-height: 40px;
    }
    @media (min-width: 992px) {
      font-size: 40px;
      line-height: 44px;
    }
  }
`;
