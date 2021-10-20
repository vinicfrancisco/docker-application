import React, { useEffect, useState } from 'react';
import Table from '../../components/Table';
import api from '../../services/api';
import { Container } from './styles';

interface Departamento {
  cd_departamento: number;
  ds_departamento: string;
}

const Departamentos: React.FC = () => {
  const [data, setData] = useState<Departamento[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await api.get<Departamento[]>('/departamentos');

        setData(response.data);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  return (
    <Container>
      <h2>Departamentos</h2>

      {!loading && (
        <Table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Nome</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr key={String(item.cd_departamento)}>
                <td>{item.cd_departamento}</td>
                <td>{item.ds_departamento}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default Departamentos;
