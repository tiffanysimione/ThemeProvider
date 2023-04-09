import { useState } from 'react';
import { StyledCard } from './styles/Card.styled';

export default function Card({ item: { id, title, body, image } }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <StyledCard layout={id % 2 === 0 && 'row-reverse'} onClick={handleClick}>
      <div>
        <h2>{title}</h2>
        {isOpen && <p>{body}</p>}
      </div>
      <div>
        {isOpen ? (
          <img src='' alt='' />
        ) : null}
      </div>
    </StyledCard>
  );
}