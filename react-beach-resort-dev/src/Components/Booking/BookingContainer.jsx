import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import emailjs from 'emailjs-com';

const PaymentForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [isPaymentDone, setIsPaymentDone] = useState(false);
  const [isEmailNotSent, setIsEmailNotSent] = useState(false);

  const EMAILJS_SERVICE_ID = 'service_d04jnrj'; // Replace with your EmailJS service ID
  const EMAILJS_TEMPLATE_ID = 'template_ob3xyi9'; // Replace with your EmailJS template ID
  const EMAILJS_USER_ID = 'zK-3-I0zi72g70aXm'; // Replace with your EmailJS user ID

  const handlePaymentDone = () => {
    const templateParams = {
      to_email: email,
      from_name: 'ANGKR RESORT TEAM',
      subject: 'Payment Details',
      message: `Thank you for the payment.\n\nDetails:\nName: ${name}\nEmail: ${email}\nPhone: ${number}\n YOUR ROOM SUCCESFULLY BOOKED \n HAPPY VACATION `,
    };

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_USER_ID)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setIsPaymentDone(true);
        setIsEmailNotSent(false); // Reset email not sent state on successful email send
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setIsEmailNotSent(true); // Set email not sent state on error
      });
  };

  const handleClosePopup = () => {
    setIsPaymentDone(false);
    setIsEmailNotSent(false); // Reset email not sent state
    setName("");
    setEmail("");
    setNumber("");
  };

  return (
    <div className="payment-form">
      <div className="inputs">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <div className="qr-code">
        <QRCode value={`Name: ${name}\nEmail: ${email}\nPhone: ${number}`} />
      </div>
      <div>
        <button className='btn-primary' onClick={handlePaymentDone}>Payment Done</button>
      </div>
      <div className={`popup ${isPaymentDone ? 'active' : ''}`}>
        <span className="close-btn" onClick={handleClosePopup}>&times;</span>
        Check your email for payment details.
      </div>
      <div className={`popup ${isEmailNotSent ? 'active' : ''}`}>
        <span className="close-btn" onClick={handleClosePopup}>&times;</span>
        Email could not be sent. Please try again later.
      </div>
    </div>
  );
};

export default PaymentForm;


// import React, { useState } from 'react';

// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     checkInDate: '',
//     checkOutDate: '',
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Validate form fields
//     const validationErrors = {};
//     // Add validation logic here, e.g., check for empty fields, valid email, date range, etc.
//     setErrors(validationErrors);

//     // If no validation errors, proceed with form submission
//     if (Object.keys(validationErrors).length === 0) {
//       console.log('Form submitted:', formData);
//     }
//   };

//   return (
//     <div className="registration-form">
//       {/* <h2>Hotel Booking Registration</h2> */}
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Full Name:</label>
//           <input
//             type="text"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleChange}
//           />
//           {errors.fullName && <span className="error">{errors.fullName}</span>}
//         </div>
//         {/* Repeat similar structure for other form fields */}
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default RegistrationForm;

