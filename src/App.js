import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./Context/authContext";
import GlobalStyles, {
  StyledToastContainer,
} from "./styles/GlobalStyles.styles";
import Router from "./Router";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <GlobalStyles />
        <Router />
      </BrowserRouter>
      <StyledToastContainer />
    </AuthContextProvider>
  );
}

export default App;
