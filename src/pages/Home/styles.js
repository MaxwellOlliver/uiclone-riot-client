import styled from 'styled-components';

export const Window = styled.div`
  width: 76%;
  height: 80%;

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    filter: brightness(0.5) grayscale(50%);
  }

  header {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 40px;
    position: absolute;
    left: 0;
    top: 0;

    .user {
      display: flex;
      align-items: flex-end;
      width: 100%;
      z-index: 2;
      color: #fff;
      font-size: 20px;
      cursor: default;

      h3 {
        margin-right: 5px;
      }

      span {
        color: #aaa;
        font-weight: 700;
      }
    }

    .anchor {
      margin-bottom: 40px;
      font-size: 10px;
      font-weight: 700;
      z-index: 2;
      color: #03c2fc;
      cursor: pointer;

      &:hover {
        filter: brightness(0.9);
      }
    }

    .alert {
      width: 33px;
      height: 33px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 10px;

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
  }
  .window-options {
    display: flex;
    height: 50px;
    z-index: 2;

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
  }

  .play {
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;

    h1 {
      font-size: 220px;
      color: #fff;
      cursor: pointer;
      transition: all 0.3s;
      font-weight: 900;
      letter-spacing: 2px;
    }

    &:hover {
      h1 {
        color: #03c2fc;
      }
    }
  }

  .logo {
    position: absolute;
    bottom: 10px;
    left: 30px;

    width: 170px;
  }

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
`;
