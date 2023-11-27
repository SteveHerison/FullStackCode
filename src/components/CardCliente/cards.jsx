import "./styles.css";

export default function ClientBoxes() {
  return (
    <section className="client-boxes">
      <div className="client-box direita">
        <div className="card-top">
          <strong>Cobranças Pagas</strong>
          <span className="green-top">10</span>
        </div>
        <div className="under-top">
          <strong>Cliente</strong>
          <strong>ID da Cob.</strong>
          <strong>Valor</strong>
        </div>
        <div className="client-container">
          <span>Sara Silva</span>
          <span>223456787</span>
          <span>R$ 1000,00</span>
        </div>
        <div className="client-container">
          <span>Carlos Prado</span>
          <span>223456781</span>
          <span>R$ 400,00</span>
        </div>
        <div className="client-container">
          <span>Lara Brito</span>
          <span>223456781</span>
          <span>R$ 900,00</span>
        </div>
        <div className="client-container">
          <span>Soraia Neves</span>
          <span>223456787</span>
          <span>R$ 700,00</span>
        </div>
        <div className="see">
          <a className="see-all">Ver todos</a>
        </div>
      </div>
      <div className="client-box meio">
        <div className="card-top">
          <strong>Cobranças Previstas</strong>
          <span className="yellow-top">05</span>
        </div>
        <div className="under-top">
          <strong>Cliente</strong>
          <strong>ID da Cob.</strong>
          <strong>Valor</strong>
        </div>
        <div className="client-container">
          <span>Sara Silva</span>
          <span>323456789</span>
          <span>R$ 2000,00</span>
        </div>
        <div className="client-container">
          <span>Carlos Prado</span>
          <span>523456785</span>
          <span>R$ 400,00</span>
        </div>
        <div className="client-container">
          <span>Lara Brito</span>
          <span>423456784</span>
          <span>R$ 900,00</span>
        </div>
        <div className="client-container">
          <span>Soraia Neves</span>
          <span>523456783</span>
          <span>R$ 700,00</span>
        </div>
        <div className="see">
          <a className="see-all">Ver todos</a>
        </div>
      </div>
      <div className="client-box esquerda">
        <div className="card-top">
          <strong>Cobranças Vencidas</strong>
          <span className="red-top">08</span>
        </div>
        <div className="under-top">
          <strong>Cliente</strong>
          <strong>ID da Cob.</strong>
          <strong>Valor</strong>
        </div>
        <div className="client-container">
          <span>Sara Silva</span>
          <span>723456783</span>
          <span>R$ 3500,00</span>
        </div>
        <div className="client-container">
          <span>Carlos Prado</span>
          <span>223456782</span>
          <span>R$ 400,00</span>
        </div>
        <div className="client-container">
          <span>Lara Brito</span>
          <span>323456787</span>
          <span>R$ 900,00</span>
        </div>
        <div className="client-container">
          <span>Soraia Neves</span>
          <span>423456788</span>
          <span>R$ 700,00</span>
        </div>
        <div className="see">
          <a className="see-all">Ver todos</a>
        </div>
      </div>
    </section>
  );
}
