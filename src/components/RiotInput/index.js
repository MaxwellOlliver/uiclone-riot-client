import React, { useState, useEffect, useRef } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { RiotContainer } from './styles.js';

export default function RiotInput(props) {
  const [isValid, setIsValid] = useState(false);
  const [behavior, setBehavior] = useState('');
  const [type, setType] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    setIsValid(props.isValid);
  }, [props.isValid]);

  useEffect(() => {
    setType(props.type);
  }, [props.type]);

  function makeVisible() {
    if (type === 'text') {
      setType('password');
    } else {
      setType('text');
    }
  }

  function setCursorToFinal() {
    const pos = inputRef.current.value.length;
    console.log(pos);
    inputRef.current.focus();
    inputRef.current.setSelectionRange(pos, pos);
  }

  return (
    <RiotContainer behavior={behavior}>
      <input
        type={type}
        name={props.name}
        onChange={
          props.stateSetter && ((e) => props.stateSetter(e.target.value))
        }
        autoComplete="off"
        className={isValid ? 'is-valid' : ''}
        id={props.id}
        onFocus={() => setBehavior('show')}
        onBlur={() => setBehavior('hide')}
        ref={inputRef}
      />
      <label>
        <span>{props.placeholder}</span>
      </label>
      {props.type === 'password'
        ? (() =>
            type === 'text' ? (
              <FaEyeSlash
                size={20}
                color="#333"
                onClick={makeVisible}
                onMouseDown={(e) => e.preventDefault()}
              />
            ) : (
              <FaEye
                size={20}
                color="#333"
                onClick={makeVisible}
                onMouseDown={(e) => e.preventDefault()}
              />
            ))()
        : null}
      <div
        className={
          behavior === 'show'
            ? 'border fadeIn'
            : behavior === 'hide'
            ? 'border fadeOut'
            : ''
        }
      ></div>
    </RiotContainer>
  );
}
