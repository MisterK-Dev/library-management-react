import React, { useState } from "react";
function Order ({selectBook, setSelectBook, tmpSelectedBook}) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    country: "",
    gender: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`order for the book ${tmpSelectedBook} has been successful!`);
setFormData({ username: "", email: "", phone: "", country: "", gender: "" });
setSelectBook(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
id="username"         
placeHolder="userName"
name="username"
          value={formData.username}
          onChange={handleChange}
          required
autoFocus
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
placeHolder="email"
          required
        />
      </div>

      <div>
        <label htmlFor="phoneno">Phone Number:</label>
        <input
          type="tel"
id="phoneno"
placeHolder="phoneNo"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="country">Country:</label>
        <select
          name="country"
placeHolder="country"
id="country"
          value={formData.country}
          onChange={handleChange}
          required
        >
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="United States">United States</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="Canada">Canada</option>
          <option value="Australia">Australia</option>
          <option value="Germany">Germany</option>
          <option value="France">France</option>
          <option value="Japan">Japan</option>
          <option value="China">China</option>
          <option value="Brazil">Brazil</option>
        </select>
      </div>

      <div>
        <label htmlFor="gender">Gender:</label>
        <select
          name="gender"
id="gender"
placeHolder="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Order;
