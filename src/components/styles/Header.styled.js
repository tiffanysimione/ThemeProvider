import styled from 'styled-components';

export const StyledHeader = styled.header`
background-image: url(https://github.com/tiffanysimione/ThemeProvider/blob/main/public/images/Screenshot%202023-04-09%20at%202.15.14%20PM.jpeg?raw=true);

  padding: 40px 0;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(247, 212, 247, 1) 100%
    );
    opacity: 0;
    animation: waterfall 4s forwards;
  }

  @keyframes waterfall {
    0% {
      opacity: 0;
      transform: translateY(-100%);
    }
    50% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(100%);
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  background-color: ${({ theme }) => theme.colors.nav};
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;

  ul {
    display: flex;
    justify-content: space-between;
    width: 70%;
    list-style: none;
    padding: 0;
  }

  ul li a {
    text-decoration: none;
    color: black;
    font-weight: bold;
  }

  ul li a:hover {
    color: #ba55d3;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    top: 70px;


    ul {
      width: 100%;
      justify-content: center;
      margin-top: 20px;
    }

    ul li {
      margin: 0 10px;
    }

    ul li:first-child {
      margin-left: 0;
    }

    ul li:last-child {
      margin-right: 0;
    }
  }
`;


export const Logo = styled.img`
  width: 50px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 40px;
    width: 30px;
  }
`;

export const Image = styled.img`
  width: 375px;
  margin-left: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0 30px;
    width: 100%;
    max-width: 300px;
  }
`;

