import React, { useContext, useEffect, useRef, useState } from "react";
import { allServices, clientDetails } from "../constants";
import { BiCaretRight } from "react-icons/bi";
import { SpinnerContext } from "./SpinnerContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import FadeUp from "./FadeUp";
import ReCAPTCHA from "react-google-recaptcha";
import { validateToken } from "./utils/helper";
import axios from "axios";

const GetInTouch = () => {
  return (
    <div id="contact" className="py-[5rem] relative">
      <div className="blurred-red-circle h-[25rem] w-[25rem] bottom-[2rem] right-3 -z-10"></div>
      <div className="blue-bg-shape bottom-[-2rem] left-[-2rem] -z-10 rotate-[-45deg]"></div>
      <div className="wrapper grid grid-cols-1 lg:grid-cols-2 justify-items-center lg:justify-items-stretch items-center gap-7">
        <div className="flex flex-col gap-5">
          <h1 className="heading text-center lg:text-start">
            Ready to Lead with Innovation? <br /> Let’s Start Your Project
          </h1>
          <p className="description text-center lg:text-start">
            Reach out to discover how our tech solutions can propel your
            business forward.
          </p>
        </div>
        <InquiryForm />
      </div>
    </div>
  );
};

export default GetInTouch;

export const InquiryForm = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(allServices[0].title);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const dropdownRef = useRef(null);
  const recaptchaRef = useRef(null);
  const { setSpinner } = useContext(SpinnerContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleFormSubmit = async (values) => {
    if (!isCaptchaVerified) {
      toast.error("Please complete the reCAPTCHA verification");
      return;
    } else {
      const token = recaptchaRef.current.getValue();
      try {
        const res = await validateToken(token);
        const result = await res.json();
        if (result.data.success) {
          setIsCaptchaVerified(true);
          toast.success("Verification successful!");
        } else {
          toast.error("Verification failed. Please try again.");
          return;
        }
      } catch (error) {
        toast.error("Verification failed. Please try again.");
        return;
      }
    }

    setSpinner(true);

    var emailBody = "Name: " + values.name + "\n\n";
    emailBody += "Email: " + values.email + "\n\n";
    emailBody += "Phone: " + values.phone + "\n\n";
    emailBody += "Service Needed: " + selectedService + "\n\n";
    emailBody += "Message:\n" + values.message;

    var payload = {
      to: clientDetails.email,
      subject: values.subject,
      body: emailBody,
      name: "Yugacognix AI",
    };

    try {
      const response = await axios.post(
        "https://send-mail-redirect-boostmysites.vercel.app/send-email",
        payload
      );

      if (response.data.success) {
        toast.success("Email sent successfully");
        reset();
        recaptchaRef.current.reset();
        setIsCaptchaVerified(false);
        navigate("/thank-you");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setSpinner(false);
    }
  };
  return (
    <FadeUp>
      <div className="flex flex-col items-start gap-3 group">
        <p className="gradient-text uppercase">Let's connect</p>
        <div className="bg-gradient-to-b from-primary to-primary/70 rounded-2xl w-fit p-7">
          <h2 className="text-3xl text-white font-medium">
            Connect With Our Team to Get Started!
          </h2>
          <form
            onSubmit={handleSubmit(handleFormSubmit)}
            className="grid grid-cols-1 gap-3 mt-3"
          >
            <div className="grid lg:grid-cols-2 gap-3">
              <div className="">
                <label className="text-white">Name</label>
                <input
                  type="text"
                  className="w-full outline-none p-3 rounded-lg  "
                  autoComplete="off"
                  placeholder="Enter your name"
                  {...register("name", {
                    required: "Full name is required",
                    validate: (val) => {
                      if (val.trim() !== "") {
                        return true;
                      } else {
                        return "Full name is required";
                      }
                    },
                  })}
                />
                <p className="text-blue-900">{errors.name?.message}</p>
              </div>
              <div className="">
                <label className="text-white">Email</label>
                <input
                  type="email"
                  className="w-full outline-none p-3 rounded-lg  "
                  autoComplete="off"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                      message: "Entered email is invalid",
                    },
                  })}
                />
                <p className="text-blue-900">{errors.email?.message}</p>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-3">
              <div className="">
                <label className="text-white">Subject</label>
                <input
                  type="text"
                  className="w-full outline-none p-3 rounded-lg  "
                  placeholder="Enter subject"
                  {...register("subject", {
                    required: "Subject is required",
                    validate: (val) => {
                      if (val.trim() !== "") {
                        return true;
                      } else {
                        return "Subject is required";
                      }
                    },
                  })}
                />
                <p className="text-blue-900">{errors.subject?.message}</p>
              </div>
              <div className="">
                <label className="text-white">Phone Number</label>
                <input
                  type="tel"
                  className="w-full outline-none p-3 rounded-lg  "
                  autoComplete="off"
                  placeholder="Enter your phone number"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^\+?[0-9]{10,15}$/,
                      message: "Entered phone number is invalid",
                    },
                  })}
                />
                <p className="text-blue-900">{errors.phone?.message}</p>
              </div>
            </div>
            <div className="flex flex-col relative" ref={dropdownRef}>
              <label className="text-white">
                Service You Are Interested In
              </label>
              <div
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="p-3 bg-background rounded-lg cursor-default flex justify-between items-center"
              >
                {selectedService}
                <BiCaretRight
                  className={`${
                    dropdownOpen && "rotate-90"
                  } transition-all duration-200 text-2xl text-primary`}
                />
              </div>
              {dropdownOpen && (
                <div
                  name=""
                  id=""
                  className="z-10 outline-none rounded-lg overflow-hidden top-[5rem] absolute bg-gray-50 w-full"
                >
                  {allServices.map((item) => (
                    <div
                      key={item.id}
                      className="hover:bg-primary/20 p-3 cursor-pointer"
                      value={item.title}
                      onClick={() => {
                        setSelectedService(item.title);
                        setDropdownOpen(false);
                      }}
                    >
                      <span className="">{item.title}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div>
              <label className="text-white">Message</label>
              <textarea
                type="text"
                rows="4"
                placeholder="Enter your message here"
                className="w-full outline-none p-3 rounded-lg  "
                autoComplete="off"
                {...register("message", {
                  required: "Message is required",
                  validate: (val) => {
                    if (val.trim() !== "") {
                      return true;
                    } else {
                      return "Message is required";
                    }
                  },
                })}
              />
              <p className="text-blue-900">{errors.message?.message}</p>
            </div>
            <div className="mt-4">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6Lf7g8YqAAAAAB1WsfCwhyYVM2vqV1BO0bp4HMdi"
                onChange={(value) => setIsCaptchaVerified(!!value)}
                theme="light"
                className="transform scale-90 origin-left"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-4 bg-background border border-white text-primary px-5 py-3 rounded-full hover:bg-primary hover:text-white hover:-translate-y-1 duration-300 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </FadeUp>
  );
};
