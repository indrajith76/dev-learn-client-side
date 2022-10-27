import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const About = () => {
  const { isDark } = useContext(AuthContext);
  return (
    <div className={`${isDark ? "" : "bg-slate-900"}`}>
      <div>
        <h1 className="text-orange-500 text-center text-4xl py-5 pt-10">About Us</h1>
        <div className="md:w-4/5 lg:w-[600px] mx-auto py-10 pb-20">
          <p className="text-center text-lg text-slate-600">
            Build your skill with us. We provide CSE related courses for
            students.We have world class course. You can build a developer
            carrier with us. We provide internationaol courses for cse students.
            <br></br> Student can buld their skil and with us. We provide online
            courses for students. Student can grap oppotunity form us building
            their skill.<br></br>
            In our job program student can get opputunity with us. And us also provide long time support session for solving students problems.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
