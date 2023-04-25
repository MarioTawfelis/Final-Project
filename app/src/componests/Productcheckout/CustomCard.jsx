import React from 'react';
import { Card as BootstrapCard} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function CustomCard(props) {
  const { title, content, imageUrl, buttonText, buttonLink } = props;

  return (
    <BootstrapCard>
      {imageUrl && <BootstrapCard.Img variant="top" src={imageUrl} />}
      <BootstrapCard.Body>
        <BootstrapCard.Title>{title}</BootstrapCard.Title>
        <BootstrapCard.Text>{content}</BootstrapCard.Text>
        {buttonText && buttonLink && (
          <BootstrapCard.Link href={buttonLink}>
            {buttonText}
          </BootstrapCard.Link>
        )}
      </BootstrapCard.Body>
    </BootstrapCard>
  );
}

export default CustomCard;

