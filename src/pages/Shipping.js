import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { NavLink, useNavigate } from 'react-router-dom';

function Shipping() {
  // Initial form state
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

  // Validation error state
  const [formErrors, setFormErrors] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    landmark: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    checked: '',
  });

  const [isFormValid, setIsFormValid] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Validate form fields
  const validateForm = () => {
    let errors = {};
    let valid = true;

    // Name validation
    if (!formData.name) {
      errors.name = 'Name is required';
      valid = false;
    }

    // Phone number validation
    if (!formData.phoneNumber || formData.phoneNumber.length < 10) {
      errors.phoneNumber = 'Phone number must be at least 10 digits';
      valid = false;
    }

    // Email validation
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
      valid = false;
    }

    // Zip code validation
    if (!formData.zip || formData.zip.length < 5) {
      errors.zip = 'Zip code must be at least 5 digits';
      valid = false;
    }

    // Landmark validation (optional but can be required if needed)
    if (!formData.landmark) {
      errors.landmark = 'Landmark is required';
      valid = false;
    }

    // Address2 validation (optional but can be required if needed)
    if (!formData.address2) {
      errors.address2 = 'Address 2 is required';
      valid = false;
    }

    // City validation
    if (!formData.city) {
      errors.city = 'City is required';
      valid = false;
    }

    // State validation
    if (!formData.state) {
      errors.state = 'State is required';
      valid = false;
    }

    if (!formData.checked) {
      errors.checked = 'You must agree to the terms';
      valid = false;
    }

    setFormErrors(errors);
    setIsFormValid(valid);

    return valid;
  };
const naviagte = useNavigate();
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form is valid, submitting...');

   naviagte('/orderplaced');
      alert('Form submitted successfully!');
    } else {
      alert('Please fill out all required fields.');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {/* Name & Phone Number */}
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            isInvalid={formErrors.name}
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
            isInvalid={formErrors.phoneNumber}
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.phoneNumber}
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      {/* Email */}
      <Form.Group className="mb-3" controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Email Address"
          name="email"
          value={formData.email}
          onChange={handleChange}
          isInvalid={formErrors.email}
        />
        <Form.Control.Feedback type="invalid">
          {formErrors.email}
        </Form.Control.Feedback>
      </Form.Group>

      {/* Landmark */}
      <Form.Group className="mb-3" controlId="formGridLandmark">
        <Form.Label>Landmark</Form.Label>
        <Form.Control
          type="text"
          placeholder="1234 Main St"
          name="landmark"
          value={formData.landmark}
          onChange={handleChange}
          isInvalid={formErrors.landmark}
        />
        <Form.Control.Feedback type="invalid">
          {formErrors.landmark}
        </Form.Control.Feedback>
      </Form.Group>

      {/* Address 2 */}
      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control
          type="text"
          placeholder="Apartment, studio, or floor"
          name="address2"
          value={formData.address2}
          onChange={handleChange}
          isInvalid={formErrors.address2}
        />
        <Form.Control.Feedback type="invalid">
          {formErrors.address2}
        </Form.Control.Feedback>
      </Form.Group>

      {/* City, State, Zip */}
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
            isInvalid={formErrors.city}
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
            isInvalid={formErrors.state}
          >
            <option value="">Choose...</option>
            <option value="state1">State 1</option>
            <option value="state2">State 2</option>
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
            isInvalid={formErrors.zip}
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.zip}
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      {/* Checkbox */}
      <Form.Group className="mb-3" controlId="formGridCheckbox">
        <Form.Check
          type="checkbox"
          label="Check me out"
          name="checked"
          checked={formData.checked}
          onChange={handleChange}
          isInvalid={formErrors.checked}
        />
        <Form.Control.Feedback type="invalid">
          {formErrors.checked}
        </Form.Control.Feedback>
      </Form.Group>

<Button
        variant="primary"
        type="submit"
      >
        Submit
      </Button>

     
    </Form>
  );
}

export default Shipping;
