import React, { useEffect, useState } from 'react';
import Table from '../../components/Table';
import api from '../../services/api';
import { Container } from './styles';

interface Cargo {
  cd_cargo: number;
  ds_cargo: string;
}

const Cargos: React.FC = () => {
  const [data, setData] = useState<Cargo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await api.get<Cargo[]>('/cargos');

        setData(response.data);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  return (
    <Container>
      <h2>Cargos</h2>

      {!loading && (
        <Table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Cargo</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr key={String(item.cd_cargo)}>
                <td>{item.cd_cargo}</td>
                <td>{item.ds_cargo}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default Cargos;
