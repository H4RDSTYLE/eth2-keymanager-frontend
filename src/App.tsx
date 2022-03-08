import logo from "./images/dappnode_logo.png";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./App.css";
import { Container } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ImportScreen from "./ImportScreen";
import ListScreen from "./ListScreen";


const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#4872b5",
    },
    background: {
      default: "#0a0a0a",
      paper: "#121212",
    },
  },
});

function toolbar(): JSX.Element {
  return (
    <Toolbar>
      <table>
        <tr>
          <th><img  src={logo} style={{height: "100%", float: "left", margin: "5px"}} alt="fireSpot"/></th>
          <th><Typography
        variant="h1"
        noWrap
        component="div"
        sx={{ flexGrow: 1, fontWeight: "bold" }}
      >
        Dappnode's ETH2 Key Manager
      </Typography></th>
        </tr>
      </table>
      
      
    </Toolbar>
  );
}

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static" color="primary">
        {toolbar()}
      </AppBar>
      <Container component="main" maxWidth="lg">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ListScreen />} />
            <Route path="import" element={<ImportScreen />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
