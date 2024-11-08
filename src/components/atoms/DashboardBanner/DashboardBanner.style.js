import styled from "styled-components";

export const DashboardBannerWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 0px 10px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  @media (min-width: 1440px) {
    padding: 0px 30px;
  }
  .col {
    width: 50%;
    justify-self: flex-end;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  .col-1 {
    display: flex;
    flex-direction: column;
    gap: 25px;
    @media (min-width: 576px) {
      gap: 35px;
    }
  }
  .col-2 {
    display: flex;
    justify-content: flex-end;
  }
  .heading {
    max-width: 500px;
    font-size: 32px;
    font-weight: 500;
    line-height: 36px;
    @media (min-width: 576px) {
      font-size: 40px;
      font-weight: 500;
      line-height: 46px;
    }
  }
  .desc {
    max-width: 700px;
    position: relative;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    color: #828282;
    padding-left: 15px;
    &::before {
      content: "";
      position: absolute;
      left: -5px;
      width: 2px;
      height: 20px;
      background-color: var(--text-color);
      margin-left: 10px;
      @media (min-width: 576px) {
        height: 26px;
      }
    }
    @media (min-width: 576px) {
      font-size: 18px;
      font-weight: 400;
      line-height: 26px;
    }
  }
  .vector {
    max-width: 300px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    rotate: 180;
  }
`;
