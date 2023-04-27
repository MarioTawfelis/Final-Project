import React from "react";
import '../assets/styles/contact.css';


function Contact() {
  return (
    <div class="container">
      <h1>Contact Us</h1>
      <p>Please fill out the form below to contact us:</p>
      <form action="action_page.php">
        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
        />


        <label htmlFor="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name.."
        />


        <label htmlFor="country">Country</label>
        <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>


        <label htmlFor="subject">Subject</label>
        <textarea
          id="subject"
          name="subject"
          placeholder="Write something.."
          style={{ height: "200px" }}
        ></textarea>
        <input type="submit" value="Submit" />
         </form>
         
         </div>
        );
        
        }


export default Contact;
