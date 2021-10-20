import React, { useEffect, useState } from 'react';
import Table from '../../components/Table';
import api from '../../services/api';
import { Container } from './styles';

interface CargoConcurso {
  cd_concurso: number;
  cd_cargo: number;
}

const CargosConcursos: React.FC = () => {
  const [data, setData] = useState<CargoConcurso[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await api.get<CargoConcurso[]>('/cargos-concursos');

        setData(response.data);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  return (
    <Container>
      <h2>Cargos-Concursos</h2>

      {!loading && (
        <Table>
          <thead>
            <tr>
              <th>Código do Cargo</th>
              <th>Código do Concurso</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr key={String(item.cd_cargo)}>
                <td>{item.cd_cargo}</td>
                <td>{item.cd_concurso}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default CargosConcursos;
