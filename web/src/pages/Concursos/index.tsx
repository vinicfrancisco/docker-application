import React, { useEffect, useState } from 'react';
import Table from '../../components/Table';
import api from '../../services/api';
import { Container } from './styles';

interface Concurso {
  cd_concurso: number;
}

const Concursos: React.FC = () => {
  const [data, setData] = useState<Concurso[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await api.get<Concurso[]>('/concursos');

        setData(response.data);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  return (
    <Container>
      <h2>Concursos</h2>

      {!loading && (
        <Table>
          <thead>
            <tr>
              <th>Código</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr key={String(item.cd_concurso)}>
                <td>{item.cd_concurso}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default Concursos;
