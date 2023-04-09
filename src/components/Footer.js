import { Container } from './styles/Container.styled'
import { Flex } from './styles/Flex.styled'
import { StyledFooter } from './styles/Footer.styled'

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <img src='./images/logo_white.svg' alt='' />

        <Flex>
          <ul>
            <h3>
              The Web3 Media Platform
            </h3>
            <li>+1-000-000-0000</li>
            <li>example@Pinata.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

        </Flex>

        <p>&copy; 2022 Pinata. All rights reserved</p>
      </Container>
    </StyledFooter>
  )
}