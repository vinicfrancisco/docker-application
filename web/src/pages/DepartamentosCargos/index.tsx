import React, { useEffect, useState } from 'react';
import Table from '../../components/Table';
import api from '../../services/api';
import { Container } from './styles';

interface DepartamentoCargo {
  cd_departamento: number;
  cd_cargo: number;
}

const DepartamentosCargos: React.FC = () => {
  const [data, setData] = useState<DepartamentoCargo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await api.get<DepartamentoCargo[]>('/departamentos-cargos');

        setData(response.data);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  return (
    <Container>
      <h2>Departamentos-Cargos</h2>

      {!loading && (
        <Table>
          <thead>
            <tr>
              <th>Código do Cargo</th>
              <th>Código do Departamento</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr key={String(item.cd_cargo)}>
                <td>{item.cd_cargo}</td>
                <td>{item.cd_departamento}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default DepartamentosCargos;
