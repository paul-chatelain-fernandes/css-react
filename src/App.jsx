import "./App.css";
import Card from "./components/Card";
import styled from "styled-components";

const AppFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const App = () => {
  return (
    <AppFrame>
      <Card />
    </AppFrame>
  );
};

export default App;
