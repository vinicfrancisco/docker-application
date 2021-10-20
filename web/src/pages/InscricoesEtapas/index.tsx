import React, { useEffect, useState } from 'react';
import Table from '../../components/Table';
import api from '../../services/api';
import { Container } from './styles';

interface InscricaoEtapa {
  cd_etapa: number;
  cd_inscricao: number;
  nr_nota: number;
}

const InscricoesEtapas: React.FC = () => {
  const [data, setData] = useState<InscricaoEtapa[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await api.get<InscricaoEtapa[]>('/inscricoes-etapas');

        setData(response.data);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  return (
    <Container>
      <h2>Inscrições-Etapas</h2>

      {!loading && (
        <Table>
          <thead>
            <tr>
              <th>Código da Etapa</th>
              <th>Código da Inscrição</th>
              <th>Nota</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr key={String(item.cd_etapa)}>
                <td>{item.cd_etapa}</td>
                <td>{item.cd_inscricao}</td>
                <td>{item.nr_nota}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default InscricoesEtapas;
