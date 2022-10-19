import "./style.css";
import Form from "./Form";
import Container from "./Container";
import Header from "./Header";
import SelectSection from "./SelectSection";
import Fieldset from "./Fieldset";
import Buttons from "./Buttons";
import InputSection from "./InputSection";
import OutputSection from "./OutputSection";

function App() {
  return (
    <Container>
      <Header title="Kalkulator walut" />
      <Form>
        <Fieldset
          legend="Wybór walut:"
          body={<SelectSection title="Waluta do wymiany:" />}
          additional={<SelectSection title="Waluta docelowa:" />}
        />

        <Fieldset
          legend="Kwoty:"
          body={<InputSection title="Kwota do wymiany:" />}
          additional={
            <OutputSection title="Kwota po przeliczeniu" body={<Buttons />} />
          }
        />
      </Form>
    </Container>
  );
}

export default App;
