import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import clientData from "./clientData";
import { Paper } from "@mui/material";
import CobrancaIcon from "../../assets/cobranca.svg";
import ClientFilter from "../../assets/ClientFilter.svg";
import PropTypes from "prop-types";

import "./ClientTable.css";

const ClientTable = ({ onClientClick }) => {
  return (
    <TableContainer className="table-container-material" component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <div className="box-client-filter">
                <img src={ClientFilter} />
                <h2>Cliente</h2>
              </div>
            </TableCell>
            <TableCell>
              <h2>CPF</h2>
            </TableCell>
            <TableCell>
              <h2>Email</h2>
            </TableCell>
            <TableCell>
              <h2>Telefone</h2>
            </TableCell>
            <TableCell>
              <h2>Status</h2>
            </TableCell>
            <TableCell>
              <h2>Criar Cobrança</h2>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clientData.map((client) => (
            <TableRow key={client.id} onClick={onClientClick}>
              <TableCell className="container-tablecell">
                <h3>{client.name}</h3>
              </TableCell>
              <TableCell>
                <h3>{client.cpf}</h3>
              </TableCell>
              <TableCell>
                <h3>{client.email}</h3>
              </TableCell>
              <TableCell>
                <h3>{client.telefone}</h3>
              </TableCell>
              <TableCell>
                <h3
                  className={`box-table-status ${
                    client.status ? "status-emdia" : "status-inadimplente"
                  }`}
                >
                  {client.status ? "Em dia" : "Inadimplente"}
                </h3>
              </TableCell>
              <TableCell className="box-img-cobranca">
                <img src={CobrancaIcon} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

ClientTable.propTypes = {
  onClientClick: PropTypes.func.isRequired,
};

export default ClientTable;
