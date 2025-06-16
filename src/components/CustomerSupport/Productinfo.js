import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function Productinfo() {
  return (
    <Form>
      <div className="container">
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Product Group</Form.Label>
          <Form.Select defaultValue="Multimart">
            <option>sofa</option>
            <option>wireless earphones</option>
            <option>Phone</option>
            <option>chair</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" placeholder="Product Name" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
}

export default Productinfo;
