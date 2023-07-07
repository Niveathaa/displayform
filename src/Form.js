import React, { useState } from 'react';
import './Form.css';



const Form = () => {
  const [name, setName] = useState('');
  const [admissionNumber, setAdmissionNumber] = useState('');
  const [quota, setQuota] = useState('');
  const [dob, setDob] = useState('');
  const [sex, setSex] = useState('');
  const [nationalityReligion, setNationalityReligion] = useState('');
  const [community, setCommunity] = useState('');
  const [caste, setCaste] = useState('');
  const [motherTongue, setMotherTongue] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [fatherOccupation, setFatherOccupation] = useState('');
  const [motherName, setMotherName] = useState('');
  const [motherOccupation, setMotherOccupation] = useState('');
  const [address, setAddress] = useState('');
  const [parentContact, setParentContact] = useState('');
  const [studentContact, setStudentContact] = useState('');
  const [email, setEmail] = useState('');
  const [photo, setPhoto] = useState(null);
  const [photoUrl, setPhotoUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(photo);
    // submission logic here
  }
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);

    // Create temporary URL for the photo
    const photoUrl = URL.createObjectURL(file);
    setPhotoUrl(photoUrl);
  };
  return (
    
    <form className='form' onSubmit={handleSubmit}>

<div className='nav'>
        <h3>STUDENT CONTACT DETAILS:2023-2024 BATCH<br></br>
        UG-COURSE(MBBS)</h3>
      </div>

<label>
        
        <input className='input-18'
          type="file"
          onChange={handlePhotoChange}
         
        />
         </label>
         <br />
      {/* Display the photo if available */}
      {photoUrl && (
        <div className='photo-container'>
        <img src={photoUrl} alt="Student" className='passport-size-photo'/>
        </div>
      )}
      <br />
      <br />
      <label>
      Name of the Candidate                       :             
        <input className='input-1'
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        </label>
        <br></br>


        <label>
      Admission Number                            :
        <input className='input-2'
          type="text"
          value={admissionNumber}
          onChange={(e) => setAdmissionNumber(e.target.value)}
        />
        </label>
        <br></br>
        <label>
      Quota                                      :
        <input className='input-3'
          type="text"
          value={quota}
          onChange={(e) => setQuota(e.target.value)}
        />
        </label>
      <br />
      <label>
      Date of Birth                               :
        <input className='input-4'
          type="text"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
      </label>
      <br></br>
      <label>
      Sex                                         :
        <input className='input-5'
          type="text"
          value={sex}
          onChange={(e) => setSex(e.target.value)}
        />
        </label>
      <br />
      <label>
      Nationality/Religion                         :
        <input className='input-6'
          type="text"
          value={nationalityReligion}
          onChange={(e) => setNationalityReligion(e.target.value)}
        />
        </label>
        <br></br>
      <label>
      Community                                    :
        <input className='input-7'
          type="text"
          value={community}
          onChange={(e) => setCommunity(e.target.value)}
        />
        </label>
      <br />
      <label>
      Caste                                        :
        <input className='input-8'
          type="text"
          value={caste}
          onChange={(e) => setCaste(e.target.value)}
        />
      </label>
      <br />
      <label>
        Mother Tongue                                 :
        <input className='input-9'
          type="text"
          value={motherTongue}
          onChange={(e) => setMotherTongue(e.target.value)}
        />
      </label>
      <br></br>
      <label>
        Father's Name                       :
        <input className='input-0'
          type="text"
          value={fatherName}
          onChange={(e) => setFatherName(e.target.value)}
        />
      </label>
      <br></br>
      <label>
        Father's occupation                             :
        <input className='input-11'
          type="text"
          value={fatherOccupation}
          onChange={(e) => setFatherOccupation(e.target.value)}
        />
        </label>
        <br></br>
        <label>
        Mother's Name                                    :
        <input className='input-12'
          type="text"
          value={motherName}
          onChange={(e) => setMotherName(e.target.value)}
        />
        </label>
        <br></br>
        <label>
        Mother's occupation                              :
        <input className='input-13'
          type="text"
          value={motherOccupation}
          onChange={(e) => setMotherOccupation(e.target.value)}
        />
        </label>
        <br></br>
        <label>
        Address                                          :
        <input className='input-14'
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        </label>
        <br></br>
        <label>
        Parent's contact number                           :
        <input className='input-15'
          type="text"
          value={parentContact}
          onChange={(e) => setParentContact(e.target.value)}
        />
        <input className='input-15'
          type="text"
          value={parentContact}
          onChange={(e) => setParentContact(e.target.value)}
        />
        </label>
        <br></br>
        <label>
        Student contact Number                             :
        <input className='input-16'
          type="text"
          value={studentContact}
          onChange={(e) => setStudentContact(e.target.value)}
        />
        </label>
        <br></br>
        <label>
        Email id                                           :
        <input className='input-17'
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </label>
        <br></br>
        
       
    </form>
 )
}

export default Form