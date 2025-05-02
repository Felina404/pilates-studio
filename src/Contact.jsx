import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm} from "react-hook-form"
function Contact() {

    const [formSubmitted, setFormSubmitted] = useState(false);
    const { register, handleSubmit, reset, formState : {errors}} = useForm();

    const onSubmit = (data) => {
        console.log(data);
       // e.preventDefault();
        setFormSubmitted(true);
        reset();
    }

    return (
        <div id="contact" className="w-full relative flex flex-col items-center justify-center p-4 bg-primary-background">
       
       <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-text text-lg m-4 italic">We will be happy to answer any questions you may have.</p>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name" className="sr-only">Name</label>
                <input {...register("name", {required: "Name is required"})}
                type="text" placeholder="Name*" id="name"
                className={`p-2 rounded border ${
                    errors.name ? "border-red-500 bg-red-100" : "border-primary-contrast"
                  }`}/>
                {errors.name && <p className="errorMessage">{errors.name.message}</p>}

                <label htmlFor="email" className="sr-only">email</label>
                <input {...register("email", {required: "Email is required",  pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }})}
                type="email" placeholder="Email*" id="email"
                className={`p-2 rounded border ${
                    errors.email ? "border-red-500 bg-red-100" : "border-primary-contrast"
                  }`}/>
                {errors.email && <p className="errorMessage">{errors.email.message}</p>}

                <label htmlFor="message" className="sr-only">message</label>
                <textarea {...register("message", {required: "Message is required"})}
                placeholder="Message*" id="message"
                className={`p-2 rounded border ${
                    errors.message ? "border-red-500 bg-red-100" : "border-primary-contrast"
                  }`}>
                </textarea>
                {errors.message && <p className="errorMessage">{errors.message.message}</p>}
            
                <fieldset className="">
                    <legend className="sr-only">Consent*</legend>
                    <div className="flex items-center gap-2">
                    <input {...register("conssent", {required: "You must agree to the terms"})}
                    type="checkbox" id="conssent" className="w-4 h-4" />
                    {errors.conssent && <p className="errorMessage">{errors.conssent.message}</p>}
                    <label htmlFor="conssent" className="text-sm text-text">I agree to having this website store my submitted information so that they can respond.</label> 
                </div>
                    </fieldset>
                

                <button type="submit" className="bg-primary text-primary-contrast p-2 
                rounded hover:bg-accent transition duration-300">Send</button>                
            </form>
            {formSubmitted && (
                <p className="mt-4 text-text font-semibold">Thank you for your message. We will reach back soon!</p>
            )}
        </div>

        <div className="flex justify-around items-center w-full max-w-4xl gap-4 m-4">    
            <div className="flex flex-col items-start justify-center gap-4">
                <div className="text-text flex gap-4 justify-center items-center">
                    <FontAwesomeIcon icon="fa-solid fa-location-dot" /> 
                    <p> Via Croce Rossa 82</p>
                </div>
            <div className="text-text flex gap-4 justify-center items-center">
                    <FontAwesomeIcon icon="fa-solid fa-phone" />
                    <p> +39 333 1234567</p>
            </div>
                <div className="text-text flex gap-4 justify-center items-center">
                    <FontAwesomeIcon icon="fa-solid fa-envelope" />
                    <p>myPilates.gmail.com</p>
                </div>        
            </div>
            <div className="w-full h-60 w-70 mt-6">
                <iframe
                    title="Map to our studio"
                    className="w-full h-full border-none"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.864007397614!2d9.268563076580488!3d45.412081836914204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786cf82ca2b37f7%3A0x638fc5e2b880a938!2sVia%20Croce%20Rossa%2C%2082%2C%2020097%20San%20Donato%20Milanese%20MI%2C%20Italy!5e0!3m2!1sen!2sgr!4v1745965083046!5m2!1sen!2sgr"
                    allowFullScreen="true"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
        
        
        
      </div>
      
    );
}

export default Contact;

     