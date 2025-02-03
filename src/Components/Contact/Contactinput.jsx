import React from "react";
import { RiContactsLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineTopic } from "react-icons/md";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
const Contactinput = () => {
  const navigate = useNavigate();
  const handlecontactinfo = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const organization = event.target.organization.value;
    const feedback = event.target.feedback.value;
    // Create a new object with the form values
    const contact = {
      name,
      email,
      phone,
      organization,
      feedback,
    };
    fetch(`https://ayt-furniture-server.vercel.app/add-contact-info`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          navigate("/");
        }
      });
  };

  return (
    <>
      <form onSubmit={handlecontactinfo}>
        <div className="w-[80%] mx-auto grid md:grid-cols-2 grid-cols-1 gap-10 justify-center items-center">
          <div className="flex flex-col gap-4">
            <div className="flex justify-center items-center border-2 gap-4">
              <RiContactsLine size={30} className="pl-2" />
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="w-[90%] h-12"
              />
            </div>
            <div className="flex justify-center items-center border-2 gap-4">
              <HiOutlineMail size={30} className="pl-2" />
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="w-[90%] h-12"
              />
            </div>
            <div className="flex justify-center items-center border-2 gap-4">
              <BsTelephone size={30} className="pl-2" />
              <input
                type="text"
                placeholder="Phone"
                name="phone"
                className="w-[90%] h-12"
              />
            </div>
            <div className="flex justify-center items-center border-2 gap-4">
              <MdOutlineTopic size={30} className="pl-2" />
              <input
                type="text"
                placeholder="Organization"
                name="organization"
                className="w-[90%] h-12"
              />
            </div>
          </div>
          <div>
            <div className="border-2">
              <BiMessageRoundedDetail size={30} className="pl-2" />
              <textarea
                name="feedback"
                id=""
                cols="25"
                rows="9"
                className="w-full"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="w-[80%] mx-auto flex flex-col justify-center items-center md:mt-[80px] mt-10">
          <button
            type="submit"
            className="border-2 md:w-[40%] w-[70%] py-2 text-xl font-medium bg-red-500 text-white hover:bg-white hover:text-red-500"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </>
  );
};

export default Contactinput;
