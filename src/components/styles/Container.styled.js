import styled from 'styled-components'

export const Container = styled.div`
  width: 1000px;
  max-width: 60%;
  padding: 0 20px;
  margin: 0 auto;
  

  @media (max-width: 768px) {
    max-width: 80%;
    }
    
    @media (max-width: 480px) {
    max-width: 100%;
    padding: 0 10px;
    }
    `




