import styled from 'styled-components'

export const StyledCard = styled.div`
background-image: linear-gradient(to right, #8000DB 0%, #1D88FE 100%);
display: flex;
color: #FDFEFF;
align-items: center;
border-radius: 15px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
margin: 40px 0;
padding: 60px;
flex-direction: ${({ layout }) => layout || 'row'};
img {
  width: 80%;
}
& > div {
  flex: 1;
}
@media (max-width: ${({ theme }) => theme.mobile}) and (min-width: 768px) {
  flex-direction: row;
}
@media (max-width: ${({ theme }) => theme.mobile}) {
  flex-direction: column;
}
`;