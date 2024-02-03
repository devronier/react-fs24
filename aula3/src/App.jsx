import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [cidades, setCidades] = useState([]);
  const [estados, setEstados] = useState([]);
  const [paginas, setPaginas] = useState(1);
  const [inicio, setInicio] = useState(0);
  const [fim, setFim] = useState(10);
  const [paginaAtual, setPaginaAtual] = useState(1);

  const perPage = 10

  async function getCidades(uf) {
    const resposta = await fetch(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`
    );

    const dados = await resposta.json();
    setPaginas(Math.ceil(dados.length / perPage))
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

  useEffect(()=> {
    setInicio((paginaAtual - 1) * perPage)
    setFim(paginaAtual * perPage)

  }, [paginaAtual])

  return (
    <>
    <h1>Paginas: {paginas}</h1>
    <h1>Inicio: {inicio}</h1>
    <h1>Fim: {fim}</h1>
    <h1>Pagina Atual: {paginaAtual}</h1>

    <button disabled={paginaAtual == 1} onClick={() => setPaginaAtual(paginaAtual - 1)}>Anterior</button>
    <button disabled={paginaAtual == paginas} onClick={() => setPaginaAtual(paginaAtual + 1)}>Proxima</button>
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
          {cidades.slice(inicio, fim).map((cidade, posicao) => (
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

