import React from 'react';
import { FaExclamation, FaPlayCircle, FaCog } from 'react-icons/fa';
import { FiX, FiMinus } from 'react-icons/fi';

import { Container } from '../SignIn/styles';
import { Window } from './styles.js';

import img from '../../assets/league.jpg';
import logo from '../../assets/league-logo.png';

export default function Home(props) {
  const { username } = props.match.params;
  return (
    <Container>
      <Window>
        <img src={img} alt="background" className="background" />

        <div className="window-options">
          <div className="option">
            <FiMinus size={20} color="#fff" />
          </div>
          <div className="option">
            <span>?</span>
          </div>
          <div className="option">
            <FiX size={20} color="#fff" />
          </div>
        </div>

        <header>
          <div className="user">
            <h3>{username}</h3>
            <span>#BR1</span>
          </div>
          <span className="anchor" onClick={() => props.history.push('/')}>
            ENCERRAR SESSÃO
          </span>
          <div className="alert">
            <div className="background-square"></div>
            <FaExclamation size={18} color="#000" />
          </div>
        </header>
        <div className="play">
          <h1>JOGAR</h1>
          <FaPlayCircle size={180} color="#03c2fc" />
        </div>
        <div className="config">
          <FaCog size={19} color="#fff" />
        </div>
        <img src={logo} alt="logo" className="logo" />
      </Window>
    </Container>
  );
}
