import styled from 'styled-components';
import img from '../../assets/league.jpg';

export const Container = styled.div`
  width: 100%;
  min-width: 1000px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #353a45;
`;

export const Window = styled.div`
  width: 85%;
  height: 80%;

  min-width: 700px;
  min-height: 700px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: #f5f5f5;

  .config {
    position: absolute;
    bottom: 40px;
    right: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7px;
    border-radius: 4px;
    background: #fff6;

    cursor: pointer;

    &:hover {
      background: #fffa;
    }
  }

  .alert {
    width: 33px;
    height: 33px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 40px;
    left: 40px;

    cursor: pointer;

    &:hover {
      filter: brightness(0.8);
    }

    svg {
      z-index: 2;
    }

    .background-square {
      width: 100%;
      height: 100%;

      position: absolute;
      background: #eb4cf5;
      border-radius: 2px;
      z-index: 1;

      transform: rotate(45deg);
    }
  }

  .side-img {
    width: 69%;
    height: 100%;
    background: url(${img}) center no-repeat;
    background-size: cover;
    position: relative;

    .window-options {
      display: flex;
      height: 50px;

      position: absolute;
      right: 0;
      top: 0;

      .option {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 40px;

        cursor: pointer;

        &:hover,
        &:focus {
          background-color: #fff4;
        }

        &:hover:last-child,
        &:focus:last-child {
          background-color: #e34b49;
        }

        span {
          color: #fff;
          font-weight: 300;
        }
      }

      span {
      }
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fafafa;
  width: 32%;
  min-width: 350px;
  height: 100%;
  padding: 40px 55px;

  header {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    position: relative;
    padding: 30px 0;
    margin-bottom: 20px;

    img {
      width: 35px;
      height: 35px;
      user-select: none;
      -webkit-user-drag: none;
      -moz-window-dragging: none;
    }

    .icon-question {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background-color: #bbb;

      position: absolute;
      right: 5px;
      top: 5px;
    }
  }

  .row {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 10px;

    button {
      width: calc(100% / 3 - 6px);
      border-radius: 4px;
      border: none;
      background-color: #333;
      margin: 0;
      padding: 7px 15px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;

      &.facebook {
        background-color: #1977f3;

        img {
          width: 20px;
          height: 20px;
        }
      }

      &.google {
        background-color: #fff;
        border: 1px solid #ddd;

        img {
          width: 20px;
          height: 20px;
        }
      }

      &.apple {
        background-color: #000;

        
        img {
          width: 18px;
          height: 23px;
        }
      }
    }
  }

  .check-box {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;

    input {
      display: none;
    }

    label {
      display: flex;
      transition: all 0.3s;
      align-items: center;

      cursor: pointer;

      .box {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 15px;
        height: 15px;
        border-radius: 2px;
        background-color: #e8e8e8;
        margin-right: 10px;

        svg {
          display: none;
          margin-top: 1px;
        }
      }

      span {
        color: #949494;
        font-size: 12px;
        font-weight: 500;
      }
    }

    input:checked + label {
      .box {
        background-color: #e34b49;

        svg {
          display: block;
        }
      }

      span {
        color: #333;
      }

      &:hover {
        .box {
          filter: brightness(0.9);
        }
      }
    }
  }

  button {
    margin: 70px 0;
    background: transparent;
    padding: 13px 15px;
    border-radius: 20px;
    border: 2px solid #e8e8e8;

    &.valid {
      border-color: #e34b49;
      background-color: #e34b49;
      cursor: pointer;

      &:hover {
        border-color: #c44847;
        background-color: #c44847;
      }
    }
  }
  h3 {
    font-size: 25px;
    margin-bottom: 30px;
  }

  footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    span {
      color: #a6a6a6;
      font-size: 12px;
      font-weight: 700;
      margin-bottom: 5px;
      text-align: center;
      cursor: pointer;

      &:last-child {
        margin-bottom: 0;
        position: absolute;
        bottom: 0;
        right: 0;
        color: #bfbfbf;
      }

      &:hover {
        color: #333;
      }
    }
  }
`;
