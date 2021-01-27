import React, {useState} from 'react';
import GlobalStyle from './GlobalStyle'
import {ThemeProvider} from 'styled-components'
import ThemeStore from './utils/ThemeStore'

import light from './styles/light'
import dark from './styles/dark'

import Main from './pages/Main/Main'


function App() {
  const [theme, setTheme] = ThemeStore('theme', light)
  const [, setChecked]= useState(false)
  
  
  
  function handleTheme(){
    setTheme(theme.title === 'light' ? dark : light)
    setChecked(theme.title === 'dark' ? true : false)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Main toggleTheme= {handleTheme} />
    </ThemeProvider>
  );
}

export default App;
