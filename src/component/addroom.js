import React, { useState } from 'react';
import './addroom.css';

const AddRoomPage = () => {
  const [formData, setFormData] = useState({
    type: '',
    furnishing: '',
    carpet_area: '',
    total_floor: '',
    floor_number: '',
    owner_name: '',
    price: '',
    city: '',
    address:'',
    contact_number: '',
    email: '',
    image1: null,
    image2: null,
    image3: null
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      [`image${index}`]: file
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataWithImages = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataWithImages.append(key, value);
      });

      const response = await fetch('http://localhost/React-php/add_room.php', {
          method: 'POST',
          body: formDataWithImages
      });
      const data = await response.text();
      setSuccessMessage(data);
      setFormData({
        type: '',
        furnishing: '',
        carpet_area: '',
        total_floor: '',
        floor_number: '',
        owner_name: '',
        price: '',
        city: '',
        address:'',
        contact_number: '',
        email: '',
        image1: null,
        image2: null,
        image3: null
      });
    } catch (error) {
        console.error('Error adding room:', error);
        setErrorMessage('Failed to add room. Please try again.');
    }
  };

  return (
    <div className="container">
      <h2 className='addH'>Add Room for Rent</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="type">Type:</label>
        <select id="type" name="type" value={formData.type} onChange={handleChange}>
          <option value="">-- Select Type --</option>
          <option value="1bhk">1 BHK</option>
          <option value="2bhk">2 BHK</option>
          <option value="1bhk_flat">1 BHK Flat</option>
          <option value="2bhk_flat">2 BHK Flat</option>
          <option value="villa">Villa</option>
        </select>

        <label htmlFor="furnishing">Furnishing Type:</label>
        <select id="furnishing" name="furnishing" value={formData.furnishing} onChange={handleChange}>
          <option value="">-- Select Furnishing Type --</option>
          <option value="furnished">Furnished</option>
          <option value="semi-furnished">Semi-Furnished</option>
          <option value="unfurnished">Unfurnished</option>
        </select>

        <label htmlFor="carpet_area">Carpet Area (sqft):</label>
        <input type="number" id="carpet_area" name="carpet_area" value={formData.carpet_area} onChange={handleChange} />

        <label htmlFor="total_floor">Total Floors:</label>
        <input type="number" id="total_floor" name="total_floor" value={formData.total_floor} onChange={handleChange} />

        <label htmlFor="floor_number">Floor Number:</label>
        <input type="number" id="floor_number" name="floor_number" value={formData.floor_number} onChange={handleChange} />

        <label htmlFor="owner_name">Owner Name:</label>
        <input type="text" id="owner_name" name="owner_name" value={formData.owner_name} onChange={handleChange} />

        <label htmlFor="price">Price (INR/month):</label>
        <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} />

        <label htmlFor="city">City:</label>
        <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} />

        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} />

        <label htmlFor="contact_number">Contact Number:</label>
        <input type="tel" id="contact_number" name="contact_number" value={formData.contact_number} onChange={handleChange} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />

        {/* Image upload fields */}
        <div className="image-box">
          <label htmlFor="image1">Add Image 1:</label>
          <input type="file" id="image1 " name="image1" accept="image/*" onChange={(e) => handleImageChange(e, 1)} />
        </div>
        <div className="image-box">
          <label htmlFor="image2">Add Image 2:</label>
          <input type="file" id="image2 " name="image2" accept="image/*" onChange={(e) => handleImageChange(e, 2)} />
        </div>
        <div className="image-box">
          <label htmlFor="image3">Add Image 3:</label>
          <input type="file" id="image3 "  name="image3" accept="image/*" onChange={(e) => handleImageChange(e, 3)} />
        </div>

        {/* Image previews */}
        <div className="image-preview">
          {formData.image1 && <img src={URL.createObjectURL(formData.image1)} alt="Preview 1" />}
          {formData.image2 && <img src={URL.createObjectURL(formData.image2)} alt="Preview 2" />}
          {formData.image3 && <img src={URL.createObjectURL(formData.image3)} alt="Preview 3" />}
        </div>

        <button type="submit">Submit</button>
      </form>
      <div id="error-message" className="error-message">{errorMessage}</div>
      <div id="success-message" className="success-message">{successMessage}</div>
    </div>
  );
};

export default AddRoomPage;
