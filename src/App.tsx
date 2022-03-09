import logo from "./images/dappnodeWhiteLogo.png";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
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
      <img  src={logo} style={{float: "left", margin: "5px", maxWidth: "150px"}} alt="fireSpot"/>
    </Toolbar>
  );
}

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static" color="primary">
        {toolbar()}
      </AppBar>
      <Container component="main">
        <BrowserRouter >
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
