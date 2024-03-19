import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ReportContentPage.css'; // Import the CSS file
import AdminNav from './AdminNav';

const ReportContentPage = () => {
  const { appointmentId } = useParams();
  const navigate = useNavigate();
  const [reportContent, setReportContent] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleReportContentChange = (event) => {
    setReportContent(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      if (submitted) return;
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
      setSubmitted(true);
      navigate('/allreportcode');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
 <AdminNav/>
      <h2 className="report-content-heading">Report Content for Appointment ID: {appointmentId}</h2>
      {!submitted ? (
        <textarea
          className="report-content-textarea"
          value={reportContent}
          onChange={handleReportContentChange}
        />
      ) : null}
      {!submitted ? (
        <button className="submit-button" onClick={handleSubmit}>Submit Report</button>
      ) : (
        <p>Report submitted successfully!</p>
      )}
      <footer/>
    </div>
  );
};

export default ReportContentPage;
