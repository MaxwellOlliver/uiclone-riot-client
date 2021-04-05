import React, { useState } from 'react';
import { FaQuestion, FaCheck, FaExclamation, FaCog } from 'react-icons/fa';
import { FiArrowRight, FiMinus, FiX } from 'react-icons/fi';

import { Container, Form, Window } from './styles.js';

import icon from '../../assets/league-icon.png';
import RiotInput from '../../components/RiotInput/index.js';
import Facebook from '../../assets/facebook-logo.png'
import Google from '../../assets/google-logo.png'
import Apple from '../../assets/apple-logo.png'

export default function SignIn(props) {
  const [username, setUsername] = useState(false);
  const [pass, setPass] = useState(false);

  function handleLogin(e) {
    if (username && pass) {
      props.history.push(`/home/${username}`);
    } else {
      e.preventDefault();
    }
  }

  return (
    <Container>
      <Window>
        <Form onSubmit={handleLogin}>
          <header>
            <img src={icon} alt="icon" />
            <div className="icon-question">
              <FaQuestion size={10} color="#fafafa" />
            </div>
          </header>
          <h3>Fazer login</h3>
          <RiotInput
            id="username"
            placeholder="NOME DE USUÁRIO"
            name="username"
            stateSetter={setUsername}
            isValid={!!username}
          />
          <RiotInput
            id="password"
            type="password"
            placeholder="SENHA"
            name="pass"
            stateSetter={setPass}
            isValid={!!pass}
          />
          <div className="row">
            <button class="facebook">
              <img src={Facebook} alt="facebook logo"/>
            </button>
            <button class="google">
              <img src={Google} alt="google logo"/>
            </button>
            <button class="apple">
              <img src={Apple} alt="apple logo"/>
            </button>
          </div>
          <div className="check-box">
            <input type="checkbox" name="check" id="check" />
            <label htmlFor="check">
              <div className="box">
                <FaCheck size={9} color="#fff" />
              </div>
              <span>Manter login</span>
            </label>
          </div>
          <button type="submit" className={username && pass ? 'valid' : ''}>
            <FiArrowRight
              size={35}
              color={username && pass ? '#fafafa' : '#e8e8e8'}
            />
          </button>
          <footer>
            <span>NÃO CONSEGUE CRIAR SESSÃO?</span>
            <span>CRIAR CONTA</span>
            <span id="v">v28.0.1</span>
          </footer>
        </Form>
        <div className="side-img">
          <div className="alert">
            <div className="background-square"></div>
            <FaExclamation size={18} color="#000" />
          </div>
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

          <div className="config">
            <FaCog size={19} color="#fff" />
          </div>
        </div>
      </Window>
    </Container>
  );
}
