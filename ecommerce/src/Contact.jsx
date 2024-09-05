// // import React, { useState } from 'react';
// // import { db } from './firebase/firebase2';
// // import { collection, addDoc } from "firebase/firestore"; // Import necessary functions
// // import './Contact.css';

// // function Contact() {
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [message, setMessage] = useState("");
// //   const [loader, setLoader] = useState(false);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoader(true);

// //     try {
// //       // Use addDoc to add a new document to the "contact" collection
// //       await addDoc(collection(db, "contact"), {
// //         name: name,
// //         email: email,
// //         message: message,
// //       });
// //       alert("Message sent successfully");
// //       setLoader(false);
// //       setName(""); // Clear the form after submission
// //       setEmail("");
// //       setMessage("");
// //     } catch (error) {
// //       alert(error.message);
// //       setLoader(false);
// //     }
// //   };

// //   return (
// //     <section className='contact'>
// //       <form onSubmit={handleSubmit}>
// //         <h2>Contact Us</h2>
// //         <div className='input-box'>
// //           <label htmlFor="name">Username</label>
// //           <input
// //             type="text"
// //             id="name"
// //             className='field'
// //             placeholder='Enter your name'
// //             value={name}
// //             onChange={(e) => setName(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <div className='input-box'>
// //           <label htmlFor="email">Email Address</label>
// //           <input
// //             type="email"
// //             id="email"
// //             className='field'
// //             placeholder='Enter your email'
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <div className='input-box'>
// //           <label htmlFor="message">Your Message</label><br />
// //           <textarea
// //             id="message"
// //             className='field-mess'
// //             placeholder='Enter your message...'
// //             value={message}
// //             onChange={(e) => setMessage(e.target.value)}
// //             required
// //           ></textarea>
// //         </div>
// //         <button type='submit' style={{ background: loader ? '#ccc' : 'rgb(2, 2, 110)' }}>Send Message</button>
// //       </form>
// //     </section>
// //   );
// // }

// // export default Contact;



// import React, { useState } from 'react';
// import { db } from './firebase/firebase2'; // Make sure this path is correct
// import { collection, addDoc } from "firebase/firestore"; 
// import './Contact.css';

// function Contact() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [loader, setLoader] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoader(true);

//     try {
//       // Add a new document to the "contact" collection
//       await addDoc(collection(db, "contact"), {
//         name: name,
//         email: email,
//         message: message,
//       });
//       alert("Message sent successfully");
//       setLoader(false);
//       setName("");
//       setEmail("");
//       setMessage("");
//     } catch (error) {
//       alert(error.message);
//       setLoader(false);
//     }
//   };

//   return (
//     <section className='contact'>
//       <form onSubmit={handleSubmit}>
//         <h2>Contact Us</h2>
//         <div className='input-box'>
//           <label htmlFor="name">Username</label>
//           <input
//             type="text"
//             id="name"
//             className='field'
//             placeholder='Enter your name'
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div className='input-box'>
//           <label htmlFor="email">Email Address</label>
//           <input
//             type="email"
//             id="email"
//             className='field'
//             placeholder='Enter your email'
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className='input-box'>
//           <label htmlFor="message">Your Message</label><br />
//           <textarea
//             id="message"
//             className='field-mess'
//             placeholder='Enter your message...'
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             required
//           ></textarea>
//         </div>
//         <button type='submit' style={{ background: loader ? '#ccc' : 'rgb(2, 2, 110)' }}>Send Message</button>
//       </form>
//     </section>
//   );
// }

// export default Contact;








//asslin code
import React, { useState } from 'react';
import { db } from './firebase/firebase2';
import { collection, addDoc } from "firebase/firestore"; 
import './Contact.css';

function Contact() {
  console.log('Contact component rendered'); // Add this to check if component renders

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);

    try {
      await addDoc(collection(db, "contact"), {
        name: name,
        email: email,
        message: message,
      });
      alert("Message sent successfully");
      setLoader(false);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      alert(error.message);
      setLoader(false);
    }
  };

  return (
    <section className='contact'>
      <form onSubmit={handleSubmit}>
        <h2>Contact Us</h2>
        <div className='input-box'>
          <label htmlFor="name">Username</label>
          <input
            type="text"
            id="name"
            className='field'
            placeholder='Enter your name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className='input-box'>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            className='field'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='input-box'>
          <label htmlFor="message">Your Message</label><br />
          <textarea
            id="message"
            className='field-mes s'
            placeholder='Enter your message...'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type='submit' style={{ background: loader ? '#ccc' : 'rgb(2, 2, 110)' }}>Send Message</button>
      </form>
    </section>

  
  );

}

export default Contact;














// import React, { useState } from 'react';
// import { db } from './firebase/firebase2';
// import { collection, addDoc } from "firebase/firestore"; 
// import './Contact.css';

// function Contact() {
//   console.log('Contact component rendered');

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [loader, setLoader] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoader(true);

//     try {
//       await addDoc(collection(db, "contact"), {
//         name: name,
//         email: email,
//         message: message,
//       });
//       console.log("Document written to Firestore");
//       alert("Message sent successfully");
//       setLoader(false);
//       setName("");
//       setEmail("");
//       setMessage("");
//     } catch (error) {
//       console.error("Error writing to Firestore: ", error);
//       alert("Error sending message: " + error.message);
//       setLoader(false);
//     }
//   };

//   return (
//     <section className='contact'>
//       <form onSubmit={handleSubmit}>
//         <h2>Contact Us</h2>
//         <div className='input-box'>
//           <label htmlFor="name">Username</label>
//           <input
//             type="text"
//             id="name"
//             className='field'
//             placeholder='Enter your name'
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div className='input-box'>
//           <label htmlFor="email">Email Address</label>
//           <input
//             type="email"
//             id="email"
//             className='field'
//             placeholder='Enter your email'
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className='input-box'>
//           <label htmlFor="message">Your Message</label><br />
//           <textarea
//             id="message"
//             className='field-mess'
//             placeholder='Enter your message...'
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             required
//           ></textarea>
//         </div>
//         <button type='submit' style={{ background: loader ? '#ccc' : 'rgb(2, 2, 110)' }}>Send Message</button>
//       </form>
//     </section>
//   );
// }

// export default Contact;
