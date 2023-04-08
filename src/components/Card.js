import { StyledCard } from './styles/Card.styled'

export default function Card({ item: { id, title, body, image } }) {
  return (
    <StyledCard layout={id % 2 === 0 && 'row-reverse'}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>

      <div>
        <img src= 'https://github.com/tiffanysimione/PersonalProject/blob/main/react-app/public/images/Screenshot%202023-04-08%20at%2011.13.03%20AM%20Small%20Background%20Removed.png?raw=true' alt='' />
      </div>
    </StyledCard>
  )
}