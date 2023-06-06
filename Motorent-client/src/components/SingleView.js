import Carousel from 'react-bootstrap/Carousel';

function SingleView() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}