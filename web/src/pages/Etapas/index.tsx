import React, { useEffect, useState } from 'react';
import Table from '../../components/Table';
import api from '../../services/api';
import { Container } from './styles';

interface Etapa {
  cd_etapa: number;
  cd_concurso: number;
}

const Etapas: React.FC = () => {
  const [data, setData] = useState<Etapa[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await api.get<Etapa[]>('/etapas');

        setData(response.data);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  return (
    <Container>
      <h2>Etapas</h2>

      {!loading && (
        <Table>
          <thead>
            <tr>
              <th>Código da etapa</th>
              <th>Código do concurso</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr key={String(item.cd_etapa)}>
                <td>{item.cd_etapa}</td>
                <td>{item.cd_concurso}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default Etapas;
