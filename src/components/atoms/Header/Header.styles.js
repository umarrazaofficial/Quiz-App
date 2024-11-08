import styled from "styled-components";

export const StyledHeader = styled.div`
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  gap: 20px;
  border-bottom: 0.59px solid rgba(236, 236, 232, 1);
  @media (max-width: 500px) {
    flex-direction: column;
  }
  .logo {
    cursor: pointer;
    @media (max-width: 576px) {
      width: 150px;
    }
  }
  .nav-links {
    display: flex;
    gap: 30px;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    transition: 0.3s all ease-in-out;
    img {
      transition: 0.3s all ease-in-out;
    }
    a {
      display: flex;
      align-items: center;
      gap: 10px;
      width: 120px;
      color: rgba(130, 130, 130, 1);
      transition: 0.3s all ease-in-out;
      @media (max-width: 991px) {
        color: var(--white);
        img {
          filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(175deg)
            brightness(103%) contrast(105%);
        }
      }
      &:hover {
        color: var(--text-color);
        img {
          filter: invert(18%) sepia(0%) saturate(0%) hue-rotate(107deg)
            brightness(100%) contrast(92%);
        }
      }
    }
    .active {
      color: var(--white);
      img {
        filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(175deg)
          brightness(103%) contrast(105%);
      }
      @media (min-width: 992px) {
        color: var(--primary);
        img {
          filter: invert(78%) sepia(43%) saturate(833%) hue-rotate(351deg)
            brightness(101%) contrast(98%);
        }
      }
    }
  }
  .col-2 {
    display: flex;
    align-items: center;
    gap: 16px;

    @media (max-width: 500px) {
      width: 100%;
      justify-content: space-between;
      align-items: space-between;
    }

    .nav-links {
      @media (max-width: 991px) {
        position: absolute;
        width: 200px;
        background: var(--primary);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        left: 0px;
        bottom: 0;
        top: 0px;
        z-index: 999;
        transform: translateX(-200%);
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 50px 0px;
        .aside-active & {
          transform: translateX(0%);
        }
        .logout {
          flex-grow: 1;
          align-items: flex-end;
        }
      }
    }
  }
  .profile {
    display: flex;
    align-items: center;
    cursor: pointer;
    max-width: 190px;
    width: 100%;
    background: rgba(70, 80, 69, 0.05);
    border-radius: 12px;
    padding: 0px 20px 0px 10px;
    .pic {
      width: 60px;
      height: 60px;
      border-radius: 50px;
      overflow: hidden;
      flex-shrink: 0;
      img {
        display: block;
        width: 100%;
        height: auto;
        object-fit: cover;
      }
    }

    .body {
      display: flex;
      flex-direction: column;

      .greeting {
        font-size: 13px;
        font-weight: 300;
        line-height: 15px;
      }
      .name {
        font-size: 15px;
        font-weight: 600;
        line-height: 18px;
      }
      /* @media (max-width: 991px) {
                display: none;
            } */
    }
  }

  .hamburger {
    cursor: pointer;
    @media (min-width: 992px) {
      display: none;
    }
  }
`;
