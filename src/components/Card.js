import { useState } from 'react';
import { StyledCard } from './styles/Card.styled';

export default function Card({ item: { id, title, body, image } }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="Container">
      <StyledCard layout={id % 2 === 0 && 'row-reverse'} onClick={handleClick}>
        <div>
          <h2>{title}</h2>
          {isOpen && <p>{body}</p>}
        </div>
        <div>
          {isOpen ? (
            <img src='https://github.com/tiffanysimione/PersonalProject/blob/main/react-app/public/images/Screenshot%202023-04-08%20at%2011.13.03%20AM%20Small%20Background%20Removed.png?raw=true' alt='' />
          ) : null}
        </div>
      </StyledCard>
    </div>
  );
}