import React from "react";
import profileImage from "../assets/images/profile.jpeg";

const AboutMe = () => {
  return (
    <section className="about-section bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 text-white py-16 flex items-center justify-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 justify-center">
        <div className="content max-w-2xl">
          <h2 className="text-[#4ECCA3] text-2xl font-bold mb-6">WHO I AM?</h2>
          <p className="text-lg leading-relaxed">
            Hello! I’m Isaac Robert, a passionate Software Engineer specializing in building scalable and highly reliable products, with expertise in both backend architecture and frontend engineering. Skilled in designing high-performance systems, optimizing user interfaces, and ensuring seamless integration across platforms. Experienced in cloud infrastructure, microservices, and modern frameworks to create fast, secure, and user-friendly applications. Passionate about solving complex challenges and delivering software that grows with business and user needs.
          </p>
        </div>
        <div className="image-container">
          <img
            src={profileImage}
            alt="Profile"
            className="w-72 h-72 rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
