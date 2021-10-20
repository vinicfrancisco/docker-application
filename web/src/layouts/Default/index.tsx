import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Menu, Item } from './styles';

const DefaultLayout: React.FC = ({ children }) => {
  const { pathname } = useLocation();

  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    setActive(pathname.split('/')[1]);
  }, [pathname]);

  useEffect(() => {
    console.log(active);
  }, [active]);

  return (
    <Container>
      <header>
        <h2>A2 - Container com Docker</h2>
        <h5>Inscrições em Concursos</h5>
      </header>

      <main>
        <aside>
          <Menu>
            <li>
              <Item active={active === 'trabalho_a2'} to="/trabalho_a2">
                Home
              </Item>
            </li>

            <li>
              <Item active={active === 'cargos'} to="/cargos">
                cargos
              </Item>
            </li>

            <li>
              <Item active={active === 'cargos-concursos'} to="/cargos-concursos">
                cargos_concursos
              </Item>
            </li>

            <li>
              <Item active={active === 'concursos'} to="/concursos">
                concursos
              </Item>
            </li>

            <li>
              <Item active={active === 'departamentos'} to="/departamentos">
                departamentos
              </Item>
            </li>

            <li>
              <Item active={active === 'departamentos-cargos'} to="/departamentos-cargos">
                departamentos_cargos
              </Item>
            </li>

            <li>
              <Item active={active === 'etapas'} to="/etapas">
                etapas
              </Item>
            </li>

            <li>
              <Item active={active === 'inscricao'} to="/inscricao">
                inscricao
              </Item>
            </li>

            <li>
              <Item active={active === 'inscricao-etapas'} to="/inscricao-etapas">
                inscricao_etapas
              </Item>
            </li>
          </Menu>
        </aside>

        {children}
      </main>
    </Container>
  );
};

export default DefaultLayout;
