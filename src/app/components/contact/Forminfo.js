import React from 'react'

const Forminfo = () => {
  return (
    <section id="form_info">
      <div className="container">
        <div className="row">
          <div
            className="col-md-6  py-5"
            data-aos="fade-right"
            data-aos-duration="750"
            data-aos-delay="1500"
          >
            <>
              <h2>Contact information</h2>
              <p>
                Do you have any questions or would you like to know what MiSi
                NeuroPsy can do for you?&nbsp;Feel free to contact us, you can
                email or call us.&nbsp;You can also fill in the contact form
                below.
              </p>
              <p>
                <strong>Head office / postal address</strong>
                <br />
                Weena 742 A<br />
                3014 DA Rotterdam
              </p>
              <p>
                <strong>Treat location</strong>
                <br />
                Weena 732, 11th floor.
                <br />
                3014 DA Rotterdam
              </p>
              <p>
                <em>
                  Within walking distance of Rotterdam Central Station (5min)
                  and Stadhuisplein Metro Station (5min).
                </em>
              </p>
              <p>
                <strong>Opening hours</strong>
                <br />
                Every day 08:00-20:00, except Sunday.
                <br />
                <br />
                <strong>Telephone</strong>
                <br />
                +316 2818 3284 (For healthcare-related questions, available
                24/7)
                <br />
                +3110 318 00 88
              </p>
              <p>
                <strong>E-mail</strong>
                <br />
                info@misineuropsy.nl (general)
                <br />
                care@misineuropsy.nl (registration/care questions)
              </p>
            </>
          </div>
          <div
            className="col-md-6 py-5"
            data-aos="fade-left"
            data-aos-duration="750"
            data-aos-delay="1500"
          >
            <form action="#">
              <h1 className="text-center">CONTACT</h1>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control rounded-0"
                  name="name"
                  id="name"
                  placeholder="Name"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control rounded-0"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control rounded-0"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control rounded-0"
                  name="message"
                  id="message"
                  rows="3"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="d-flex justify-content-center">
                <button className="btn btn-dark rounded-0 px-4">
                  submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Forminfo