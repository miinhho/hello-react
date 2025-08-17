import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext({
  theme: 'system',
  setTheme: () => {}
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('system');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default function Theme() {
  const { theme, setTheme } = useContext(ThemeContext);
  
  return (
    <>
      <p>현재 테마: {theme}</p>
      <button onClick={() => setTheme('light')}>Light Theme</button>
      <button onClick={() => setTheme('dark')}>Dark Theme</button>
      <button onClick={() => setTheme('system')}>System Theme</button>
      <p>테마 변경 버튼을 클릭하여 테마를 변경하세요.</p>
    </>
  );
}