import styled from "styled-components";

export const AddQuizWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  @media (min-width: 992px) {
    padding: 50px 0;
  }
  .col {
    width: 100%;
    padding: 0px 10px;
    @media (min-width: 992px) {
      width: 50%;
      padding: 0;
    }
  }
  .col-1 {
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
    .form-wrap {
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
    }
  }
  .col-2 {
    display: none;
    justify-content: center;
    align-items: center;
    @media (min-width: 992px) {
      display: flex;
    }
    img {
      user-select: none;
      max-width: 285px;
      width: 100%;
      height: 286px;
    }
  }
`;
