import React, { useState, useEffect } from 'react';
import AdminNav from './AdminNav';

const AllReportsPage = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/admin/reports/all');
        if (!response.ok) {
          throw new Error('Failed to fetch reports');
        }
        const data = await response.json();
        setReports(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchReports();
  }, []);

  const handleDelete = async (reportId) => {
    try {
      const response = await fetch(`http://localhost:8080/api/admin/${reportId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete report');
      }
      // Remove the deleted report from the state
      setReports(reports.filter(report => report.rid !== reportId));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
       <AdminNav/>
      <h2>All Reports</h2>
      <table>
        <thead>
          <tr>
            <th>Appointment ID</th>
            <th>User First Name</th>
            <th>Doctor</th>
            <th>Report Content</th>
            <th>Created At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {reports.map(report => (
            <tr key={report.rid}>
              <td>{report.appointment.id}</td>
              <td>{report.appointment.user.fname}</td>
              <td>{report.appointment.doctor}</td>
              <td>{report.reportContent}</td>
              <td>{report.createdAt}</td>
              <td>
                <button onClick={() => handleDelete(report.rid)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <footer/>
    </div>
  );
};

export default AllReportsPage;
