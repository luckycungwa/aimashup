import React from 'react';

const AcademicTranscript = ({ academicTranscript, index, deleteAcademicrecord }) => (
  <div key={index}>
    <h1>Academic Results</h1>
    <p>Academic Transcript: {academicTranscript}</p>
    <a
      href={academicTranscript}
      target="_blank"
      style={{
        display: 'block',
        width: '80%',
        textAlign: 'center',
        height: '25%',
        marginLeft: '10px',
        marginRight: '10px',
        border: '1px solid #ddd',
      }}
    >
      <i>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-file-pdf"
          viewBox="0 0 16 16"
        >
          {/* Add the path data for the PDF icon here */}
        </svg>
      </i>
      <br />
      Click here to view Transcript
    </a>
    <button type="button" className="btn btn-danger" onClick={() => deleteAcademicrecord(index)}>
      remove
    </button>
  </div>
);

const Certificate = ({ certificateName, certificate, index, deleteCertificate }) => (
  <li key={index}>
    <h1>Certificates</h1>
    <p>certificate Name: {certificateName}</p>
    <p>file name: {certificate}</p>
    <a
      href={certificate}
      target="_blank"
      style={{
        display: 'block',
        width: '80%',
        textAlign: 'center',
        height: '25%',
        marginLeft: '10px',
        marginRight: '10px',
        border: '1px solid #ddd',
      }}
    >
      <i>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-file-pdf"
          viewBox="0 0 16 16"
        >
          {/* Add the path data for the PDF icon here */}
        </svg>
      </i>
      <br />
      Click here to view certificate
    </a>
    <button
      style={{ marginLeft: '50%', marginTop: '5px' }}
      onClick={() => deleteCertificate(index)}
      className="btn btn-outline-primary"
    >
      remove
    </button>
  </li>
);

const AlumniProfile = ({
  isProfile,
  alumni,
  academicTranscripts,
  deleteAcademicrecord,
  certificates,
  certificateNames,
  deleteCertificate,
}) => (
  <div className="profile">
    <div className="wrapper position-relative" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
      <hr />
      <h1 className="text-center">Alumni Profile</h1>
      <hr />
      <div className="user-info">
        <div className="image">
          <a href="assets/Master.jpg">
            <img
              src="assets/Master.jpg"
              alt="alumni-pic"
              width="20%"
              height="auto"
              style={{ borderRadius: '20%', float: 'right' }}
            />
          </a>
          <br />
        </div>
        <div className="user-bio">
          <p>Bio :<br /> {alumni.Bio}</p>
        </div>
        <div className="user-cred">
          <p>Name: {alumni.Name}</p>
          <p>Location: {alumni.Location}</p>
          <p>Qualification: {alumni.Qualification}</p>
          <p>Skills: {alumni.Skills}</p>
          <p>Experience: {alumni.Experience}</p>
          <p>Employment Status: {alumni.Employment_Status}</p>
          <p>Interest: {alumni.Interest}</p>
        </div>
        <div className="card-text">
          {academicTranscripts.map((transcript, index) => (
            <AcademicTranscript
              key={index}
              academicTranscript={transcript}
              index={index}
              deleteAcademicrecord={deleteAcademicrecord}
            />
          ))}
        </div>
        <div className="certificates-list">
          <h1>Certificates</h1>
          <ul style={{ listStyle: 'none' }}>
            {certificates.map((certificate, index) => (
              <Certificate
                key={index}
                certificateName={certificateNames[index]}
                certificate={certificate}
                index={index}
                deleteCertificate={deleteCertificate}
              />
            ))}
          </ul>
        </div>
      </div>
      <div className="edit-profile">
        <hr />
        <button style={{ marginLeft: '45%' }} className="btn btn-outline-info">
          Edit Profile
        </button>
      </div>
    </div>
  </div>
);

export default AlumniProfile;
