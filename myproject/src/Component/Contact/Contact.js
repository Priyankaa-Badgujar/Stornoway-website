import React, {useState} from "react";
import './Contact.css';

const Contact = () => {

 

  return (
    <div className="ct-form">
      <section id="contact">
        <div className="container my-5 py-5">
          <div className="row mb-5">
            <div className="col-12">
              <h3 className="fs-5 text-center mb-0">Contact Us</h3>
              <h1 className="display-6 text-center mb-4">
                Have Some <b>Question?</b>
              </h1>
              

              <hr className="w-25 mx-auto" /><br></br>
              <hr className="w-25 mx-auto" /><br></br>
                       <hr className="w-25 mx-auto" />
            </div>
          </div>
          <div className="row">
            
            <div className="col-md-6">
              <br/><br/><br/><br/><br/>
             <form>
             <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="John Smith"
                    name="firstname"
                  />
                </div>
                 <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Your Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastname"
                    placeholder="John Smith"
                    name="lastname"
                   
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    name="email"
                    
                    />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">
                    Your Message
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="5"
                    name="message"
                  
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-outline-primary rounded-pill px-4">Send Message <i className="fa fa-paper-plane ms-2"></i></button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
