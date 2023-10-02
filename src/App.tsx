import { ThemeProvider } from 'styled-components'
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import Cores from './Cores/styles'
import Global, { Box } from './styles'

function App() {
  return (
    <ThemeProvider theme={Cores}>
      <Global />
      <Header />
      <Hero />
      <Box>
        <ListaVagas />
      </Box>
    </ThemeProvider>
  )
}

export default App
