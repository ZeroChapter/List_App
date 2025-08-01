import "./App.css";
import { NotesScrean } from "./components/organisms/NotesScrean";
import { NoteCreator } from "./components/organisms/NoteCreator";
import { Background, Flex, PopUp } from "./styles/styles";
import { SettingsProvider } from "./model/store/SettingsContext";

function App() {
  return (
    <>
      <Flex dir="row" $align="center">
        <h1>Делишки</h1>
      </Flex>

      <SettingsProvider>
        <Background></Background>
        <Flex dir="column" $align="center" $justify="center">
          <NotesScrean />
        </Flex>
      </SettingsProvider>
    </>
  );
}

export default App;
