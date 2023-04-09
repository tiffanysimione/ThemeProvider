import { StyledHeader, Nav, Logo, Image } from './styles/Header.styled'
import { Container } from './styles/Container.styled'
import { Flex } from './styles/Flex.styled'
import { Button } from './styles/Button.styled'

export default function Header() {
  const handleButtonClick = () => {
    window.location.href = "https://app.pinata.cloud/signin?_gl=1*1bootza*rs_ga*MTliMmRkODEtOTdjYy00ZTZiLWEzNzctNmEyMDRlNDE1ZTE0*rs_ga_5RMPXG14TE*MTY4MTA1MDY0Ni4xMi4xLjE2ODEwNTEzODkuNjAuMC4w";
  };

  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src='https://github.com/tiffanysimione/ThemeProvider/blob/main/public/images/Screenshot%202023-04-08%20at%2011.13.03%20AM%20Small%20Background%20Removed.png?raw=true' alt='' />

    
          <ul>
            <li><a href="ab.com">Product</a></li>
            <li><a href="ab.com">Resources</a></li>
            <li><a href="https://www.pinata.cloud/pricing">Pricing</a></li>
            <li><a href="https://www.pinata.cloud/about">About</a></li>
          </ul>

          <Button onClick={handleButtonClick}>Start Building</Button>
        </Nav>

        <Flex>
          <div>
            <h1>Welcome to the Pinata Academy </h1>

            <h3>
              Connect with peers, maximize your Pinata knowledge, and learn.
            </h3>

            <p>
              From quick, practical courses to comprehensive certifications, learn everything you need to know about Web3.
            </p>

            <Button bg='#ff0099' color='#fff'>
              Sign Up For Free Courses
            </Button>
          </div>

          <Image src='https://github.com/tiffanysimione/ThemeProvider/blob/main/public/images/Screenshot%202023-04-08%20at%2011.13.03%20AM%20Small%20Background%20Removed.png?raw=true' alt='' />

        </Flex>
      </Container>
    </StyledHeader>
  )
}