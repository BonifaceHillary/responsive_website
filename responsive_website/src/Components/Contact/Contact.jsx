
import React from 'react'
import './Contact.css'
import message from '../../assets/message.png'
import gmail from '../../assets/gmail.webp'
import phone from '../../assets/phone.png'
import location from '../../assets/location.png'
import whitearrow from '../../assets/whitearrow.png'

const Contact = () => {




  const [result, setResult] = React.useState("");

  

  const onSubmit = async (event) => {

    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);

    formData.append("access_key", "fe30b446-5913-4c1f-a761-f9b914050627");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData

    //    headers: {
    //   "Accept": "application/json",
    // },

    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  }








  // oncleared

  // const onSubmit = async (event) => {
  //   event.preventDefault();
  //   setResult("sending...");

  //   const formData = new FormData(event.target);

  //   formData.append("access_key", "fe30b446-5913-4c1f-a761-f9b914050627");

  //   const response = await fetch("https://api.web3forms.com/submit", {
  //     method: "POST",
  //     body: formData
  //   });

  //   const data = await response.json();

  //   if (data.success) {
  //     setResult("Form Submitted Successfully");
  //     event.target.reset();
  //   } else {
  //     console.log("Error", data);
  //     setResult(data.message);
  //   }

  // };






  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>send us a message <img src={message} alt="" /></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet cumque nobis laborum magnam dignissimos quisquam, est nulla ut ipsam quos possimus corrupti doloribus minus animi culpa amet quas praesentium eius.</p>

        <ul>
          <li><img src={gmail} alt="" /> contact@hillary.dev</li>

          <li><img src={phone} alt="" /> +2987654098</li>

          <li><img src={location} alt="" /> 84 cross, river <br />862, calabr</li>
        </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name='name' placeholder='Enter Your Name' required />





          {/* <label>Email Address</label> */}
{/* <input type="email" name='email' placeholder='Enter Your Email Address' required /> */}





          <label>Phone Number</label>
          <input type="tel" name='phone' placeholder='Enter Your Phone Number' required />

          <label>write your message</label>
          <textarea name="message" rows="6" placeholder='enter your message' required></textarea>

          <button type='submit' className='btn dark-btn' >submit now <img src={whitearrow} alt="" /></button>

        </form>

        <span>{result}</span>
      </div>
      
    </div>
  )
}

export default Contact
