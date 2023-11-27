import DiaIcon from "../../assets/clientes.svg";
import PapperredIcon from "../../assets/pappered.svg";
import PapperIcon from "../../assets/pappergreen.svg";
import CobranIcon from "../../assets/papperedyellow.svg";
import InadIcon from "../../assets/clientDivida.svg";
import ClientBoxes from "../../components/CardCliente/cards";
import "../../components/CardCliente/styles.css";
import Header from "../../components/Header";
import Navbar from "../../components/NavBar/index";
import "./style.css";

function Home() {
  return (
    <div className="app">
      <Navbar />
      <div className="container-app">
        <Header />

        <section className="Principal">
          <div className="blocos-container">
            <div className="bloco bloco-esquerda">
              <img src={PapperIcon} />
              <div className="bloco-indiv">
                <h2>Cobrança Pagas</h2>
                <p>R$ 30.000</p>
              </div>
            </div>
            <div className="bloco bloco-meio">
              <img src={PapperredIcon} />
              <div className="bloco-indiv">
                <h2>Cobranças vencidas</h2>
                <p>R$ 7.000</p>
              </div>
            </div>
            <div className="bloco bloco-direita">
              <img src={CobranIcon} />
              <div className="bloco-indiv">
                <h2>Cobranças Previstas</h2>
                <p>R$ 10.000</p>
              </div>
            </div>
          </div>

          <ClientBoxes />

          <section className="add">
            <div className="client-box-final">
              <div className="card-t">
                <div className="iconCardG">
                  <img src={InadIcon} />
                  <strong>Clientes Inadimplentes</strong>
                </div>
                <span className="red-top">08</span>
              </div>
              <div className="unde-top">
                <strong>Cliente</strong>
                <strong>ID da Cob.</strong>
                <strong>Valor</strong>
              </div>
              <div className="client-Container">
                <span>Sara Silva</span>
                <span>723456783</span>
                <span>R$ 3500,00</span>
              </div>
              <div className="client-Container">
                <span>Carlos Prado</span>
                <span>223456782</span>
                <span>R$ 400,00</span>
              </div>
              <div className="client-Container">
                <span>Lara Brito</span>
                <span>323456787</span>
                <span>R$ 900,00</span>
              </div>
              <div className="client-Container">
                <span>Soraia Neves</span>
                <span>423456788</span>
                <span>R$ 700,00</span>
              </div>
              <div className="se">
                <a className="se-all">Ver todos</a>
              </div>
            </div>

            <div className="client-box-final">
              <div className="card-t">
                <div className="iconCardG">
                  <img src={DiaIcon} />
                  <strong>Clientes em dia</strong>
                </div>
                <span className="gree-top">08</span>
              </div>
              <div className="unde-top">
                <strong>Cliente</strong>
                <strong>ID da Cob.</strong>
                <strong>Valor</strong>
              </div>
              <div className="client-Container">
                <span>Sara Silva</span>
                <span>723456783</span>
                <span>R$ 3500,00</span>
              </div>
              <div className="client-Container">
                <span>Carlos Prado</span>
                <span>223456782</span>
                <span>R$ 400,00</span>
              </div>
              <div className="client-Container">
                <span>Lara Brito</span>
                <span>323456787</span>
                <span>R$ 900,00</span>
              </div>
              <div className="client-Container">
                <span>Soraia Neves</span>
                <span>423456788</span>
                <span>R$ 700,00</span>
              </div>
              <div className="se">
                <a className="se-all">Ver todos</a>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}

export default Home;
