import { Button, Card } from "react-bootstrap";

const ProductCard = ( id, name, price, description, image) => {
  return (
    <Card style={{ width: "18rem" }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>Card Title {name}</Card.Title>
        <Card.Text>
          {description}
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          {price}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
