import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 100;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 100;
  } to {
    opacity: 0;
  }
`;

export const RiotContainer = styled.div`
  width: 100%;
  height: 50px;
  position: relative;
  margin-bottom: 15px;

  .border {
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    opacity: 0;

    pointer-events: none;

    border-radius: 4px;
    border: 2px solid #333;

    &.fadeIn {
      animation: ${fadeIn} 0.3s ease forwards;
    }

    &.fadeOut {
      animation: ${fadeOut} 0.3s ease forwards;
    }
  }

  input {
    width: 100%;
    height: 100%;
    background-color: ${(props) =>
      props.behavior === 'show' ? '#fafafa' : '#e8e8e8'};
    border-radius: 4px;

    padding: 10px 0 0 10px;
    transition: all 0.1s;

    color: #333;
    font-weight: 700;
    font-size: 16px;

    &.is-valid + label {
      span {
        transform: translateY(-87%);
        font-size: 10px;
      }

      left: 10px;
    }
  }

  label {
    color: #949494;
    font-size: 12px;
    font-weight: 700;

    position: absolute;
    bottom: 0px;
    left: ${(props) => (props.behavior === 'show' ? '10px' : '20px')};
    width: 100%;
    height: 100%;
    transition: all 0.3s;

    pointer-events: none;

    span {
      position: absolute;
      bottom: 32%;
      transition: all 0.3s ease;
      ${(props) =>
        props.behavior === 'show'
          ? 'transform: translateY(-87%); font-size: 10px;'
          : ''}
    }
  }

  svg {
    opacity: ${(props) => (props.behavior === 'show' ? 1 : 0)};
    visibility: ${(props) =>
      props.behavior === 'show' ? 'visible' : 'hidden'};
    position: absolute;
    top: 30%;
    right: 10px;

    transition: all 0.3s;
  }
`;
