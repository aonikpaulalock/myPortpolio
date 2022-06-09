import React from 'react';
import contact from "../../Asset/Contact/contact.png"
import emailjs from "emailjs-com"
import { toast } from 'react-toastify';
const Contact = () => {
  const handleSendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm("service_10c9v08", "template_polt98h", e.target, "HJfOjeb-zdU-nbl5y")
      .then(res => {
        e.target.reset()
      })
      .catch(err => console.log(err))
  }
  return (
    <div className="sm:px-10 my-6">
      <h1 class="md:text-4xl font-bold text-secondary text-3xl tracking-wider pb-8">CONTACT US</h1>
      <div class="flex justify-around items-center flex-col md:flex-row rounded-xl">
        <div className="md:flex-1 w-full">
          <img src={contact} class="lg:max-w-lg" alt="" />
        </div>
        <div className="md:flex-1 w-full p-10 shadow rounded-xl">
          <h1 className="text-bold text-2xl pb-4 text-secondary">Contact Info</h1>
          <form onSubmit={handleSendEmail}>
            <input type="text" placeholder="Enter Your Name" name="name" class="input input-bordered w-full max-w-lg mb-4" />
            <br />
            <input type="email" placeholder="Enter Your Email" name="user_email" class="input input-bordered w-full max-w-lg mb-4" />
            <br />
            <input type="text" placeholder="Enter Your Number" name="number" class="input input-bordered w-full max-w-lg mb-4" />
            <br />
            <textarea type="text" placeholder="Enter Message" name="message" class="input input-bordered w-full max-w-lg mb-4" rows={6} />
            <br />
            <button class="btn btn-secondary rounded-full px-10 py-0 text-white font-bold">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;