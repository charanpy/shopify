import { useState } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState(false);
  console.log(theme);

  const toggleTheme = (theme) => setTheme(theme);

  return { theme, toggleTheme };
};

export default useTheme;
