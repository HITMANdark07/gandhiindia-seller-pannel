import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import Header from "../components/Header";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getProducts } from "../api/inventory";
import EditIcon from '@mui/icons-material/Edit';
import { API } from "../config";
import Avatar from "@mui/material/Avatar";
import { withRouter } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const AllProducts = ({history}) => {
  const [products, setProducts] = React.useState([]);
  const getProduct = () => {
    getProducts().then((response) => {
      setProducts(response);
    });
  };
  React.useEffect(() => {
    const rep = getProduct();
    return () => rep;
  }, []);
  return (
    <Header>
      <TableContainer component={Paper} style={{width:'90%', margin:'0 auto'}}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Product Thumbnail</StyledTableCell>
              <StyledTableCell>Product Name</StyledTableCell>
              <StyledTableCell>status</StyledTableCell>
              <StyledTableCell>sold</StyledTableCell>
              <StyledTableCell>price</StyledTableCell>
              <StyledTableCell>Edit</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((pro) => (
              <StyledTableRow key={pro._id}>
                <StyledTableCell>
                  <Avatar
                    alt={pro.name}
                    src={`${API}/image/photo/${pro.photo[0]}`}
                  />
                </StyledTableCell>
                <StyledTableCell>{pro.name}</StyledTableCell>
                <StyledTableCell>
                  {pro.sold === 0 ? (
                    <p
                      style={{
                        color: "white",
                        backgroundColor: "red",
                        fontWeight:"600",
                        padding: "5px",
                        borderRadius: "5px",
                      }}
                    >
                      Not Verified
                    </p>
                  ) : (
                    <p
                    style={{
                      color: "white",
                      fontWeight:"600",
                      backgroundColor: "green",
                      padding: "5px",
                      borderRadius: "5px",
                    }}
                  >
                      LIVE
                  </p>
                  )}
                </StyledTableCell>
                <StyledTableCell>{pro.status}</StyledTableCell>
                
                <StyledTableCell>{pro.price}</StyledTableCell>
                <StyledTableCell>
                    <EditIcon style={{cursor:'pointer'}} onClick={() => {
                        history.push(`/update-product/${pro._id}`)
                    }} />
                </StyledTableCell>
              </StyledTableRow>
            ))}
            <StyledTableRow>
                <StyledTableCell colSpan={6}>
                    Number of Products: {products.length}
                </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Header>
  );
};

export default withRouter(AllProducts);
