import Carousel from 'react-bootstrap/Carousel';

function SingleView() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img 
            className="d-block w-100"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}