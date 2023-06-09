import './App.scss';
import Projetos from './assets/Componentes/Projetos'
import SobreMim from './assets/Componentes/SobreMim'
import Contato from './assets/Componentes/Contato'
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr)=> (curr === "light")?"dark": "light");
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <div className="App">
      <header className="App-header">
        <SobreMim />
        <Projetos />
        <Contato />
      </header>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
