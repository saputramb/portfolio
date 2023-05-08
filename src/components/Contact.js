import { FormControl, FormErrorMessage, Input, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/send message.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import axios from 'axios';
import { useFormik } from 'formik';
import * as yup from "yup";

export const Contact = () => {
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const handleSubmit = async () => {
    // e.preventDefault();
    var buttonSend = document.querySelector(".contact form button");
    try {
      setButtonText("Sending...");
      buttonSend.style.background = '#64ffda';
      await axios.post('https://astroboy.my.id/api/send-mail', {
        firstName: formik.values.firstName,
        lastName: formik.values.lastName,
        email: formik.values.email,
        phone: formik.values.phone,
        message: formik.values.message
      });
      setButtonText("Send");
      buttonSend.style.background = '#fff';
      // handleReset();
      formik.resetForm();
      setStatus({ success: true, message: 'Message sent successfully.' });
      setTimeout(() => {
        setStatus({});
      }, 8 * 1000);
    } catch (error) {
      setButtonText("Sending...");
      buttonSend.style.background = '#64ffda';
      setTimeout(() => {
        setStatus({ success: false, message: 'Something went wrong, please try again later.' });
        console.log(status)
        setButtonText("Send");
        buttonSend.style.background = '#fff';
        setTimeout(() => {
          setStatus({});
        }, 8 * 1000);
      }, 2 * 1000);
    }
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    },
    validationSchema: yup.object().shape({
      firstName: yup.string().required("Please enter first name"),
      lastName: yup.string().required("Please enter last name"),
      email: yup.string().required("Please enter email").email(),
      message: yup.string().required("Please enter message")
    }),
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: handleSubmit
  });

  const handleForm = (event) => {
    const { target } = event;
    formik.setFieldValue(target.name, target.value);
  };

  // const handleReset = () => {
  //   Array.from(document.querySelectorAll("input")).forEach(
  //     input => (input.value = "")
  //   );
  //   setFormDetails(formInitialDetails);
  // };

  return (
    <section className="contact" id="connect">
      <div className="star star1" />
      <div className="star star2" />
      <div className="star star3" />
      <div className="star star4" />
      <div className="star star5" />
      <div className="star star6" />
      <div className="star star7" />
      <div className="star star8" />
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
            <div className="text-contact">
              <p>
                Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
              </p>
            </div>
          </Col>
          <Col size={12} md={6}>
            {/* <TrackVisibility>
              {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}> */}
            <h2>Get In Touch</h2>
            <form onSubmit={formik.handleSubmit}>
              <Row>
                <Col size={12} sm={6} className="px-1">
                  <FormControl isInvalid={formik.errors.firstName}>
                    <Input value={formik.values.firstName} style={{ border: formik.errors.firstName ? formik.values.firstName != '' ? '1px solid rgba(255, 255, 255, 0.5)' : '1px solid red' : '1px solid rgba(255, 255, 255, 0.5)' }} type="text" placeholder="First Name" onChange={handleForm} name="firstName" />
                    <FormErrorMessage style={{ display: formik.errors.firstName ? formik.values.firstName != '' ? 'none' : 'block' : 'none' }} className="form-error-message">{formik.errors.firstName}</FormErrorMessage>
                  </FormControl>
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <FormControl isInvalid={formik.errors.lastName}>
                    <Input value={formik.values.lastName} style={{ border: formik.errors.lastName ? formik.values.lastName != '' ? '1px solid rgba(255, 255, 255, 0.5)' : '1px solid red' : '1px solid rgba(255, 255, 255, 0.5)' }} type="text" placeholder="Last Name" onChange={handleForm} name="lastName" />
                    <FormErrorMessage style={{ display: formik.errors.lastName ? formik.values.lastName != '' ? 'none' : 'block' : 'none' }} className="form-error-message">{formik.errors.lastName}</FormErrorMessage>
                  </FormControl>
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <FormControl isInvalid={formik.errors.email}>
                    <Input value={formik.values.email} style={{ border: formik.errors.email ? formik.values.email != '' ? '1px solid rgba(255, 255, 255, 0.5)' : '1px solid red' : '1px solid rgba(255, 255, 255, 0.5)' }} type="email" placeholder="Email Address" onChange={handleForm} name="email" />
                    <FormErrorMessage style={{ display: formik.errors.email ? formik.values.email != '' ? 'none' : 'block' : 'none' }} className="form-error-message">{formik.errors.email}</FormErrorMessage>
                  </FormControl>
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <Input value={formik.values.phone} type="tel" placeholder="Phone No." onChange={handleForm} name="phone" />
                </Col>
                <Col size={12} className="px-1">
                  <FormControl isInvalid={formik.errors.message}>
                    <Textarea value={formik.values.message} style={{ border: formik.errors.message ? formik.values.message != '' ? '1px solid rgba(255, 255, 255, 0.5)' : '1px solid red' : '1px solid rgba(255, 255, 255, 0.5)' }} rows="6" placeholder="Message" onChange={handleForm} name="message"></Textarea>
                    <FormErrorMessage style={{ display: formik.errors.message ? formik.values.message != '' ? 'none' : 'block' : 'none' }} className="form-error-message">{formik.errors.message}</FormErrorMessage>
                  </FormControl>
                  {
                    status.message &&
                    <Col>
                      <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                    </Col>
                  }
                  <button type="submit"><span>{buttonText}</span></button>
                </Col>
              </Row>
            </form>
            {/* </div>}
            </TrackVisibility> */}
          </Col>
        </Row>
      </Container>
    </section>
  )
}