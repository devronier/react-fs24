import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [cidades, setCidades] = useState([]);
  const [estados, setEstados] = useState([]);

  async function getCidades(uf) {
    const resposta = await fetch(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`
    );

    const dados = await resposta.json();
     setCidades(dados);
  }

  async function getEstados() {
    const resposta = await fetch(
      "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
    );

    const dados = await resposta.json();

    setEstados(dados);
  }

  useEffect(() => {
    getEstados();
    getCidades("CE");
  }, []);

  const estilo = { border: "1px solid red" };

  return (
    <>
 
    <div className="card">
        <select onChange={(evento) => getCidades(evento.target.value)}>
          <option disabled>Selecione</option>
          {estados.map((estado, posicao) => (
            <option key={posicao} value={estado.sigla}>
              {estado.nome}
            </option>
          ))}
        </select>
        <table style={{ ...estilo, borderCollapse: "collapse" }}>
          <tr>
            <th style={estilo}>Nome da Cidade</th>
          </tr>
          {cidades.map((cidade, posicao) => (
            <tr key={posicao}>
              <td style={estilo}>{cidade.nome}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}

export default App;

