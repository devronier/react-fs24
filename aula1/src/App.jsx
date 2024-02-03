import CardIcon from "./CardIcon";
import Header from "./Header";
import Section from "./Section";

function App() {
  const culturas = [
    {
      titulo: "Missão",
      descricao: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    },
    {
      titulo: "Valores",
      descricao: "Rorem ipsum dolor sit, amet consectetur adipisicing elit",
    },
    {
      titulo: "Visao",
      descricao: "Forem ipsum dolor sit, amet consectetur adipisicing elit",
    },
  ];

  const cursos = [
    {
      titulo: "Fullstack",
      descricao: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    },
    {
      titulo: "PHPinga",
      descricao: "Rorem ipsum dolor sit, amet consectetur adipisicing elit",
    },
    {
      titulo: "React",
      descricao: "Forem ipsum dolor sit, amet consectetur adipisicing elit",
    },
  ];

  return (
    <>
      <Header />
      <main>
        <Section titulo="Sobre">
          <div className="cards">
            {culturas.map((cultura) => (
              <CardIcon titulo={cultura.titulo} descricao={cultura.descricao} />
            ))}
          </div>
        </Section>
        <Section titulo="Cursos">
          <div className="cards">
            {cursos.map((curso) => (
              <CardIcon titulo={curso.titulo} descricao={curso.descricao} />
            ))}
          </div>
        </Section>
      </main>
      <footer>Eu sou o footer</footer>
    </>
  );
}

export default App;

