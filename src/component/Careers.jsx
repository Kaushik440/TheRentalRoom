import React, { useState } from "react";

const CareerPage = () => {
  const [success, setSuccess] = useState(false);

  const jobs = [
    { title: "Frontend Developer (React)", location: "Remote / Lucknow", type: "Full-Time", description: "We are looking for a passionate React developer..." },
    { title: "Backend Developer (PHP & MySQL)", location: "Remote / Noida", type: "Full-Time", description: "Seeking a skilled PHP developer..." },
    { title: "UI/UX Designer", location: "Remote", type: "Part-Time", description: "Creative designer needed..." }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const response = await fetch("https://formsubmit.co/7ecda3fa024d6d3180d99820ab00ff54", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      setSuccess(true);
      e.target.reset();
    } else {
      alert("Failed to submit. Please try again.");
    }
  };

  return (
    <div style={{ maxWidth: "900px", margin: "auto", padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>Join Our Team</h2>
      <p style={{ textAlign: "center", marginBottom: "30px" }}>
        Help us build the future of rental housing! We’re hiring for the following roles.
      </p>

      {jobs.map((job, idx) => (
        <div key={idx} style={{ border: "1px solid #ccc", padding: "20px", marginBottom: "20px", borderRadius: "8px" }}>
          <h3>{job.title}</h3>
          <p><strong>Location:</strong> {job.location}</p>
          <p><strong>Type:</strong> {job.type}</p>
          <p>{job.description}</p>
        </div>
      ))}

      <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "8px", marginTop: "40px", backgroundColor: "#f1f1f1" }}>
        <h3>Apply Now</h3>
        {success && (
          <div style={{ backgroundColor: "#d4edda", padding: "10px", marginBottom: "15px", borderRadius: "5px", color: "#155724" }}>
            ✅ Your application has been submitted successfully!
          </div>
        )}
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div style={{ marginBottom: "15px" }}>
            <label>Name:</label><br />
            <input type="text" name="name" required style={{ width: "100%", padding: "8px" }} />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label>Email:</label><br />
            <input type="email" name="email" required style={{ width: "100%", padding: "8px" }} />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label>Position:</label><br />
            <select name="position" required style={{ width: "100%", padding: "8px" }}>
              <option value="">-- Select Position --</option>
              {jobs.map((job, idx) => (
                <option key={idx} value={job.title}>{job.title}</option>
              ))}
            </select>
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label>Upload Resume (PDF only):</label><br />
            <input type="file" name="resume" accept=".pdf" required style={{ width: "100%", padding: "8px" }} />
          </div>
          <input type="hidden" name="_captcha" value="false" />
          <button type="submit" style={{ backgroundColor: "#007bff", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer" }}>
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default CareerPage;
