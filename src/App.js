import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'
import { Container } from './components/styles/Container.styled'
import GlobalStyles from './components/styles/Global'
import content from './content'

const theme = {
  colors: {
    header: '#dbe3ff',
    nav:'#ffffff',
    body: '#ffffff',
    StyledCard:'#dbe3ff',
    footer: '#003333',
  },
  mobile: '500px',
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  )
}

export default App