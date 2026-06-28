import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../../ui/Button";
import { PhoneInput } from "./PhoneInput";

const schema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email"),
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .matches(/^\d+$/, "Please enter a valid phone number"),
  message: yup
    .string()
    .required("Message is required")
    .min(20, "Message must be at least 20 characters"),
  isAgreed: yup.boolean().oneOf([true], "You must agree to the terms"),
});

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      phoneCountry: "+994",
      message: "",
      isAgreed: false,
    },
  });

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    // Here you would typically send the data to your API
  };

  const handlePhoneChange = (value, dialCode) => {
    setValue("phoneNumber", value);
    setValue("phoneCountry", dialCode);
  };

  return (
    <div className="support-right">
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            placeholder="Enter First Name"
            className={errors.firstName ? "input-error" : ""}
            {...register("firstName")}
          />
          {errors.firstName && (
            <span className="error-text">{errors.firstName.message}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            placeholder="Enter Last Name"
            className={errors.lastName ? "input-error" : ""}
            {...register("lastName")}
          />
          {errors.lastName && (
            <span className="error-text">{errors.lastName.message}</span>
          )}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your Email"
            className={errors.email ? "input-error" : ""}
            {...register("email")}
          />
          {errors.email && (
            <span className="error-text">{errors.email.message}</span>
          )}
        </div>

        <Controller
          name="phoneNumber"
          control={control}
          render={({ field }) => (
            <PhoneInput
              value={field.value}
              onChange={handlePhoneChange}
              error={errors.phoneNumber?.message}
            />
          )}
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          placeholder="Enter your Message"
          rows={4}
          className={errors.message ? "input-error" : ""}
          {...register("message")}
        />
        {errors.message && (
          <span className="error-text">{errors.message.message}</span>
        )}
      </div>

      <div className="form-footer">
        <div className="checkbox-wrapper">
          <label className="checkbox-label">
            <input type="checkbox" {...register("isAgreed")} />
            <span>
              I agree with{" "}
              <a href="/terms" className="form-link">
                Terms of Use
              </a>{" "}
              and{" "}
              <a href="/privacy" className="form-link">
                Privacy Policy
              </a>
            </span>
          </label>
          {errors.isAgreed && (
            <span className="error-text">{errors.isAgreed.message}</span>
          )}
        </div>

        <Button variant="primary" size="lg" onClick={handleSubmit(onSubmit)}>
          Send Message
        </Button>
      </div>
    </div>
  );
};
