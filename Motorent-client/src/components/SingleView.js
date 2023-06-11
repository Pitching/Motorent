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
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Text which will serve as the description</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          
        </Carousel.Item>
      </Carousel>
    </div>
  );
}