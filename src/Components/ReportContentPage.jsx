import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ReportContentPage = () => {
  const { appointmentId } = useParams();
  const [reportContent, setReportContent] = useState('');
  const [submitted, setSubmitted] = useState(false); // State to track submission

  const handleReportContentChange = (event) => {
    setReportContent(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      if (submitted) return; // Prevent multiple submissions
      const response = await fetch(`http://localhost:8080/api/admin/reports/${appointmentId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ reportContent }),
      });
      if (!response.ok) {
        throw new Error('Failed to submit report content');
      }
      setSubmitted(true); // Set submitted to true upon successful submission
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Report Content for Appointment ID: {appointmentId}</h2>
      {!submitted ? (
        <textarea value={reportContent} onChange={handleReportContentChange} />
      ) : null} {/* Conditionally render textarea based on submission state */}
      {!submitted ? ( // Conditionally render submit button based on submission state
        <button onClick={handleSubmit}>Submit Report</button>
      ) : (
        <p>Report submitted successfully!</p>
      )}
    </div>
  );
};

export default ReportContentPage;
