import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Descriptions } from "antd";
import Lixo from "../../Assets/Lixo.svg";
import Edit from "../../Assets/edit.svg";
import ClientFilter from "../../assets/ClientFilter.svg";
import clientData from "./clientData";
import "./styles.css";

const items = [
  {
    key: "1",
    label: "E-mail",
    children: "Zhou@gmail.com",
    span: 1,
  },
  {
    key: "2",
    label: "Telefone",
    children: "1810000000",
    span: 1,
  },
  {
    key: "3",
    label: "CPF",
    children: "123.456.789-00",
    span: 1,
  },
  {
    key: "4",
    label: "Endereço",
    children: "Rua ABC",
    span: -2,
  },
  {
    key: "5",
    label: "Bairro",
    children: "Bairro XYZ",
    span: 1,
  },
  {
    key: "6",
    label: "Complemento",
    children: "Complemento XYZ",
    span: 1,
  },
  {
    key: "7",
    label: "CEP",
    children: "12345-678",
    span: 1,
  },
  {
    key: "8",
    label: "Cidade",
    children: "Cidade XYZ",
    span: 1,
  },
  {
    key: "9",
    label: "UF",
    children: "UF XYZ",
    span: 1,
  },
];

const DetalheClients = () => (
  <div className="App-Informacao-Container">
    <div className="info-conteiner">
      <div className="clients-icon-detalhe">
        <img src="/src/Assets/clientes.svg" alt="Clients Icon" />
        <h1 className="title">Clientes</h1>
      </div>

      <div className="infoClient">
        <div className="titulo">
          <Descriptions title="Dados do otario" />
          <button type="button">
            <img src={Edit} />
            Editar Cliente
          </button>
        </div>
        <Descriptions layout="vertical" items={items} />
      </div>
      <div className="container-cobranca">
        <TableContainer className="info-cobranca">
          <div className="header-cobranca">
            <h2>Cobranças do cliente</h2>
            <button type="button">+ Nova cobrança</button>
          </div>
          <div className="client">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <div className="filter-cobranca">
                      <img src={ClientFilter} />
                      <h2>ID Cob.</h2>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="filter-cobranca">
                      <img src={ClientFilter} />
                      <h2>Data de venc.</h2>
                    </div>
                  </TableCell>
                  <TableCell>
                    <h2>Valor</h2>
                  </TableCell>
                  <TableCell>
                    <h2>Status</h2>
                  </TableCell>
                  <TableCell>
                    <h2>Descrição</h2>
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {clientData.map((client) => (
                  <TableRow key={client.id}>
                    <TableCell className="tabela-cobranca">
                      <h3>{client.ID}</h3>
                    </TableCell>
                    <TableCell>
                      <h3>{client.data}</h3>
                    </TableCell>
                    <TableCell>
                      <h3>{client.valor}</h3>
                    </TableCell>
                    <TableCell>
                      <h3
                        className={`status ${
                          client.status ? "status-pago" : "status-divida"
                        }`}
                      >
                        {client.status ? "Paga" : "Vencida"}
                      </h3>
                    </TableCell>
                    <TableCell>
                      <h3>{client.descricao}</h3>
                    </TableCell>
                    <TableCell>
                      <div className="img-cobranca">
                        <div className="EditIm">
                          <img src={Edit} />
                          <p>Editar</p>
                        </div>
                        <div className="Exclu">
                          <img src={Lixo} />
                          <p>Excluir</p>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TableContainer>
      </div>
    </div>
  </div>
);

export default DetalheClients;
