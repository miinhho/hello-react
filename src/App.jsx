import Counter from "./components/Counter";
import Theme, { ThemeProvider } from "./components/Theme";

function App() {
  return (
    <>
      <Counter />
      <ThemeProvider>
        <Theme />
      </ThemeProvider>
    </>
  );
}

export default App;
