function HeroCode() {
  return (
    <div className="res" aria-label="Resumo em formato de resposta JSON">

      <div className="res-head">
        <span>
          <b>GET</b> /api/v1/devs/matheus
        </span>

        <span className="s">
          200 OK · 12 ms
        </span>
      </div>

      <pre>
        <span className="p">{'{'}</span>
        {'\n'}
        {'  '}<span className="k">"nome"</span>: <span className="v">"Matheus"</span>,
        {'\n'}
        {'  '}<span className="k">"foco"</span>: <span className="v">"backend"</span>,
        {'\n'}
        {'  '}<span className="k">"stack"</span>: [<span className="v">"Java"</span>, <span className="v">"Spring Boot"</span>,
        {'\n'}
        {'            '}<span className="v">"PostgreSQL"</span>, <span className="v">"Docker"</span>],
        {'\n'}
        {'  '}<span className="k">"aprendendo"</span>: <span className="v">"React + TypeScript"</span>,
        {'\n'}
        {'  '}<span className="k">"procurando"</span>: [<span className="v">"estágio"</span>, <span className="v">"júnior"</span>],
        {'\n'}
        {'  '}<span className="k">"disponivel"</span>: <span className="n">true</span>
        {'\n'}
        <span className="p">{'}'}</span>
      </pre>

    </div>
  );
}

export default HeroCode;