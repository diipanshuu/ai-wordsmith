import React from "react";

const Footer = () => {
  return (
    <footer className="bg-wh-900 text-wh-50 py-10 px-10">
      <div className="justify-between mx-auto gap-16 sm:flex">
        {/* FIRST COLUMN */}
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold">AiWordsmith</h4>
          <p className="my-5">
            Empower your creativity with AIWordsmith ✨. Our innovative blog app harnesses the power of ChatGPT to craft engaging and insightful content tailored to your input 🚀. Let AIWordsmith transform your ideas into beautifully written blogs, making content creation effortless and inspiring 📝.
          </p>
          <p>© AiWordsmith 2023. All rights reserved.</p>
        </div>
        {/* SECOND COLUMN */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">
          <a href="https://github.com/diipanshuu">GitHub</a>
          </p>
          <p className="my-5">
          <a href="https://www.linkedin.com/in/diipanshuu">LinkedIn</a>
          </p>
          <p>Portfolio</p>
        </div>
        {/* THIRD COLUMN */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Baner-Pashan Link Road, Pune-411021, Mh, India</p>
          <p>7666344992</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
