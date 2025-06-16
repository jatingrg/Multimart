import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Form,
  Button,
  Col,
  Row
} from 'react-bootstrap';

function Shipping() {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    landmark: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    checked: false,
  });

  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Form validation
  const validateForm = () => {
    const errors = {};
    let valid = true;

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      valid = false;
    }

    if (!formData.phoneNumber.trim() || formData.phoneNumber.length < 10) {
      errors.phoneNumber = 'Phone number must be at least 10 digits';
      valid = false;
    }

    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
      valid = false;
    }

    if (!formData.landmark.trim()) {
      errors.landmark = 'Landmark is required';
      valid = false;
    }

    if (!formData.address2.trim()) {
      errors.address2 = 'Address 2 is required';
      valid = false;
    }

    if (!formData.city.trim()) {
      errors.city = 'City is required';
      valid = false;
    }

    if (!formData.state.trim()) {
      errors.state = 'State is required';
      valid = false;
    }

    if (!formData.zip.trim() || formData.zip.length < 5) {
      errors.zip = 'Zip code must be at least 5 digits';
      valid = false;
    }

    if (!formData.checked) {
      errors.checked = 'You must agree to the terms';
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert('Form submitted successfully!');
      console.log('Form Data:', formData);
      navigate('/orderplaced');
    } else {
      alert('Please fill out all required fields correctly.');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            isInvalid={!!formErrors.name}
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPhoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            isInvalid={!!formErrors.phoneNumber}
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.phoneNumber}
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Email Address"
          name="email"
          value={formData.email}
          onChange={handleChange}
          isInvalid={!!formErrors.email}
        />
        <Form.Control.Feedback type="invalid">
          {formErrors.email}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridLandmark">
        <Form.Label>Landmark</Form.Label>
        <Form.Control
          type="text"
          placeholder="1234 Main St"
          name="landmark"
          value={formData.landmark}
          onChange={handleChange}
          isInvalid={!!formErrors.landmark}
        />
        <Form.Control.Feedback type="invalid">
          {formErrors.landmark}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control
          type="text"
          placeholder="Apartment, studio, or floor"
          name="address2"
          value={formData.address2}
          onChange={handleChange}
          isInvalid={!!formErrors.address2}
        />
        <Form.Control.Feedback type="invalid">
          {formErrors.address2}
        </Form.Control.Feedback>
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
            isInvalid={!!formErrors.city}
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.city}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select
            name="state"
            value={formData.state}
            onChange={handleChange}
            isInvalid={!!formErrors.state}
          >
            <option value="">Choose...</option>
            <option value="Punjab">Punjab</option>
            <option value="Haryana">Haryana</option>
            <option value="Delhi">Delhi</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            {formErrors.state}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control
            type="text"
            placeholder="Zip"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            isInvalid={!!formErrors.zip}
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.zip}
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridCheckbox">
        <Form.Check
          type="checkbox"
          label="I agree to the terms & conditions"
          name="checked"
          checked={formData.checked}
          onChange={handleChange}
          isInvalid={!!formErrors.checked}
        />
        <Form.Control.Feedback type="invalid">
          {formErrors.checked}
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>

    </Form>
  );
}

export default Shipping;
