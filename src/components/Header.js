import { StyledHeader, Nav, Logo, Image } from './styles/Header.styled'
import { Container } from './styles/Container.styled'
import { Flex } from './styles/Flex.styled'
import { Button } from './styles/Button.styled'

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src='./images/logo.svg' alt='' />
          <Button>Get Started</Button>
        </Nav>

        <Flex>
          <div>
            <h1>Welcome to the Pinata Academy </h1>

            <h3>
            Connect with peers, maximize your Pinata knowledge, and learn.
              </h3>
            <p>
            From quick, practical courses to comprehensive certifications, learn everything you need to know about Web3. </p>

            <Button bg='#ff0099' color='#fff'>
              Sign Up For Free Courses
            </Button>
          </div>

          <Image src='https://github.com/tiffanysimione/PersonalProject/blob/main/react-app/public/images/Screenshot%202023-04-08%20at%2011.13.03%20AM%20Small%20Background%20Removed.png?raw=true' alt='' />
        </Flex>
      </Container>
    </StyledHeader>
  )
}