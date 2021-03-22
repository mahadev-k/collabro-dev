import { Initializer } from "./components/main/Initializer";
import { StylesProvider } from "./styles/Styles";


function App() {
  return (
    <>
      <StylesProvider>
        <Initializer/>
      </StylesProvider>
    </>
  );
}

export default App;
