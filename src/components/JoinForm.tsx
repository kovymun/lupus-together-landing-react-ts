import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Element } from "react-scroll";
import toast from "react-hot-toast";
import "../styles/join.css";

// Structure of all form fields used in the "Join the Community" form.
interface JoinCommInputs {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message?: string;
  consent: boolean;
}

const JoinForm = () => {
  // Initialize form with react-hook-form
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<JoinCommInputs>();
  // State to hold API response
  const [apiResponse, setApiResponse] = useState<unknown>(null);

  useEffect(() => {
    if (apiResponse) {
      console.log("Backend response:", apiResponse);
    }
  }, [apiResponse]);

  // Validation Regex patterns
  const emailRegexPattern = new RegExp(
    /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
  );
  const mobileRegexPattern = new RegExp(/^[0-9]{10}$/);

  // Show success toast message (TBC)
  // const notifySuccess = () =>
  //   toast.success("Success!", {
  //     duration: 4000,
  //   });

  // Show error toast message
  const notifyError = () =>
    toast.error("Something went wrong! Please try again.", {
      duration: 4000,
    });

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const reqJoinComm = async (data: JoinCommInputs) => {
    try {
      // Simulate async delay
      await new Promise<void>((resolve) => setTimeout(resolve, 3000));

      //Log the user input to the console
      // console.log("Community Member:", formData);

      // JSON conversion simulation
      // const json = JSON.stringify(formData);
      // console.log("JSON Payload to be sent to backend:", json);

      // Prepare payload for backend (Python naming convention format)
      const payload = {
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        phone: data.phone ?? "",
        message: data.message ?? "",
        consent: data.consent,
      };

      const res = await fetch(`${API_BASE_URL}/api/community/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json();

      setApiResponse(json);

      // Reset form
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      notifyError();
    }
  };

  return (
    <Element name="join">
      <section id="join" className="join-section">
        <div className="section-wrapper">
          {" "}
          <div className="section-header">
            {" "}
            <h2 className="section-title">Let's Walk This Journey Together</h2>
            <p>
              Join a community that understands your journey - share your story,
              connect with others, and be inspired.
            </p>
          </div>
          <div className="container">
            {" "}
            <form className="join-form" onSubmit={handleSubmit(reqJoinComm)}>
              {/* First Name */}
              <div className="input-container">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="first-name"
                  {...register("firstName", {
                    required: {
                      value: true,
                      message: "Please enter first name",
                    },
                    maxLength: {
                      value: 15,
                      message: "First name cannot exceed 15 characters",
                    },
                  })}
                />
                {errors.firstName && (
                  <p className="form-error-text">{errors.firstName.message}</p>
                )}
              </div>

              {/* Last Name */}
              <div className="input-container">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="last-name"
                  {...register("lastName", {
                    required: {
                      value: true,
                      message: "Please enter last name",
                    },
                    maxLength: {
                      value: 15,
                      message: "Last name cannot exceed 15 characters",
                    },
                  })}
                />
                {errors.lastName && (
                  <p className="form-error-text">{errors.lastName.message}</p>
                )}
              </div>

              {/* Contact Phone Number */}
              <div className="input-container">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Please enter an email address",
                    },
                    pattern: {
                      value: emailRegexPattern,
                      message: "Please provide a valid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="form-error-text">{errors.email.message}</p>
                )}
              </div>

              {/* Contact Email Number */}
              <div className="input-container">
                {" "}
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "Contact number is required",
                    },
                    pattern: {
                      value: mobileRegexPattern,
                      message: "Please enter a valid mobile number",
                    },
                    minLength: {
                      value: 10,
                      message: "Mobile number should be at least 10 digits",
                    },
                  })}
                />
                {errors.phone && (
                  <p className="form-error-text">{errors.phone.message}</p>
                )}
              </div>

              {/* Additional Message */}
              <div className="input-container">
                {" "}
                <label htmlFor="message">Tell us more</label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message", {
                    validate: (value: string | undefined): true | string =>
                      !value ||
                      value.length <= 50 ||
                      "Message too long (max 50 characters)",
                  })}
                />
                {errors.message && (
                  <p className="text-xs text-red-500 mt-2">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Consent */}
              <div
                className="consent-container"
                style={{ marginBottom: "1.2rem" }}
              >
                {" "}
                <div className="consent" style={{ marginBottom: "1rem" }}>
                  <input
                    type="checkbox"
                    id="consent"
                    {...register("consent", {
                      required: "You must agree before continuing",
                    })}
                  />
                  <label htmlFor="consent">
                    I agree to be contacted by Lupus Together.
                  </label>
                </div>
                {errors.consent && (
                  <p className="form-error-text">{errors.consent.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="site-btn join-form-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting......" : "Join our Community"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default JoinForm;
