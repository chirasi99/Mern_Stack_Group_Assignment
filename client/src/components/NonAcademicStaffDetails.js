import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function NonAcademicStaffDetails() {
    const [nonAcademicStaff, setNonAcademicStaff] = useState({});

  const { id } = useParams();
  
  useEffect(() => {
    return () => {
      axios.get(`/nonAcademicStaff/${id}`).then((res) => {
        if (res.data.success) {
          setNonAcademicStaff(res.data.nonAcademicStaff);
          
        }
      });
    };
  }, [id]);

  return (
    <div style={{ marginTop: "20px" }}>
      <h4>{nonAcademicStaff.Full_Name}</h4>
      <hr></hr>
      <dl className="row">
        <dt className="col-sm-3">Position</dt>
        <dd className="col-sm-9">{nonAcademicStaff.Position}</dd>
        <dt className="col-sm-3">Email</dt>
        <dd className="col-sm-9">{nonAcademicStaff.Email}</dd>
      </dl>
    </div>
  );
}

export default NonAcademicStaffDetails;
