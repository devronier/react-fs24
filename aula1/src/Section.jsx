function Section({ titulo, children }) {
  return (
    <section>
      <h2>{titulo}</h2>

      <div className="conteudo">{children}</div>
    </section>
  );
}

export default Section;
