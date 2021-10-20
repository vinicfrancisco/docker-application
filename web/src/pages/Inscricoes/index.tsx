import React, { useEffect, useState } from 'react';
import Table from '../../components/Table';
import api from '../../services/api';
import { Container } from './styles';

interface Inscricao {
  cd_inscricao: number;
  cd_concurso: number;
  cd_cargo: number;
  ds_nomecompleto: string;
  ds_email: string;
  nr_cpf: number;
}

const Inscricoes: React.FC = () => {
  const [data, setData] = useState<Inscricao[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await api.get<Inscricao[]>('/inscricoes');

        setData(response.data);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  return (
    <Container>
      <h2>Inscrições</h2>

      {!loading && (
        <Table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Código do Concurso</th>
              <th>Código do Cargo</th>
              <th>Nome Completo</th>
              <th>Email</th>
              <th>CPF</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr key={String(item.cd_inscricao)}>
                <td>{item.cd_inscricao}</td>
                <td>{item.cd_concurso}</td>
                <td>{item.cd_cargo}</td>
                <td>{item.ds_nomecompleto}</td>
                <td>{item.ds_email}</td>
                <td>{item.nr_cpf}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default Inscricoes;
