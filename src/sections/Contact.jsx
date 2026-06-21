import { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [state, handleSubmit] = useForm("xdarnpzj");
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (state.succeeded) {
      setFormData({ name: "", email: "", message: "" });
      setAlertType("success");
      setAlertMessage("Your message has been sent!");
      setShowAlert(true);
      const timer = setTimeout(() => setShowAlert(false), 5000);
      return () => clearTimeout(timer);
    }
    if (state.errors && state.errors.length > 0) {
      setAlertType("danger");
      setAlertMessage("Something went wrong!");
      setShowAlert(true);
      const timer = setTimeout(() => setShowAlert(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded, state.errors]);

  return (
    <section id="contact" className="relative flex items-center justify-center c-space section-spacing overflow-hidden">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <div className="flex flex-col items-center justify-center w-full max-w-md p-4 sm:p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-center w-full gap-5 mb-8 sm:mb-10 text-center">
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-400">
            Whether you're looking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help.
          </p>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="Your Name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <ValidationError field="name" errors={state.errors} />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="field-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="your_mail@email.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <ValidationError field="email" errors={state.errors} />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="field-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              type="text"
              rows="4"
              className="field-input field-input-focus"
              placeholder="Tell Me What You're Thinking..."
              autoComplete="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <ValidationError field="message" errors={state.errors} />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation disabled:opacity-50"
          >
            {state.submitting ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
