import styled from "styled-components";

export const OnboardingBlock = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
  height: 100vh;
`;
export const FormCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  width: 100%;
  @media (min-width: 992px) {
    width: 50%;
    flex-grow: 1;
    min-height: auto;
  }
  .brand_logo {
    max-width: 250px;
    align-self: center;
    margin-bottom: 20px;
    @media (min-width: 768px) {
      max-width: 300px;
      margin-bottom: 40px;
    }
    img {
      display: block;
      max-width: 100%;
      height: auto;
    }
  }
`;

export const BannerCol = styled.div`
  width: 50%;
  display: none;
  justify-content: center;
  align-items: center;
  background-color: rgba(243, 243, 243, 0.41);
  @media (min-width: 992px) {
    display: flex;
  }
  img {
    user-select: none;
    max-width: 285px;
    width: 100%;
    height: 286px;
  }
`;
