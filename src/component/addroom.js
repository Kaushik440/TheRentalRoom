import React, { useState } from 'react';
 // Import your CSS file for styling

const AddRoomPage = () => {
  const [formData, setFormData] = useState({
    type: '',
    furnishing: '',
    carpet_area: '',
    total_floor: '',
    floor_number: '',
    project_name: '',
    owner_name: '',
    price: '',
    location: '',
    contact_number: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    console.log(formData);
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
          <option value="1bhk_flate">1 BHK Flate</option>
          <option value="2bhk_flate">2 BHK Flate</option>
          <option value="villa">Villa</option>
        </select>

        <label htmlFor="furnishing">Furnishing Type:</label>
        <select id="furnishing" name="furnishing" value={formData.furnishing} onChange={handleChange}>
          <option value="">-- Select Furnishing Type --</option>
          <option value="furnished">Furnished</option>
          <option value="semi-furnished">Semi-Furnished</option>
          <option value="unfurnished">Unfurnished</option>
        </select>

        <label htmlFor="carpet_area">Carpet Area:</label>
        <input type="number" id="carpet_area" name="carpet_area" value={formData.carpet_area} onChange={handleChange} />

        <label htmlFor="total_floor">Total Floor:</label>
        <input type="number" id="total_floor" name="total_floor" value={formData.total_floor} onChange={handleChange} />

        <label htmlFor="floor_number">Floor Number:</label>
        <input type="number" id="floor_number" name="floor_number" value={formData.floor_number} onChange={handleChange} />

        <label htmlFor="project_name">Project Name:</label>
        <input type="text" id="project_name" name="project_name" value={formData.project_name} onChange={handleChange} />

        <label htmlFor="owner_name">Owner Name:</label>
        <input type="text" id="owner_name" name="owner_name" value={formData.owner_name} onChange={handleChange} />

        <label htmlFor="price">Price:</label>
        <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} />

        <label htmlFor="location">Location:</label>
        <select id="location" name="location" value={formData.location} onChange={handleChange}>
          <option value="">-- Select Location --</option>
          <option value="gorakhpur">Gorakhpur</option>
          <option value="deoria">Deoria</option>
          <option value="lucknow">Lucknow</option>
          <option value="basti">Basti</option>
          <option value="kusinagar">Kushinagar</option>
        </select>

        <label htmlFor="contact_number">Contact Number:</label>
        <input type="tel" id="contact_number" name="contact_number" value={formData.contact_number} onChange={handleChange} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />

        <label htmlFor="photo">Add Photo:</label>
        <div className="image-box">
          <p>Add Image</p>
          <input type="file" accept="image/*" />
        </div>
        <div className="image-preview"></div>

        <button type="submit">Submit</button>
        <div id="error-message" className="error-message"></div>
      </form>
    </div>
  );
};

export default AddRoomPage;
