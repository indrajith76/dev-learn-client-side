import React from "react";
import "./Home.css";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import { Link } from "react-router-dom";
import CourseCard from "../../components/CourseCard/CourseCard";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Home = () => {
  const { courses, isDark } = useContext(AuthContext);
  const fetureCourse = courses.slice(0, 12);
  return (
    <div className={isDark ? "bg-white" : "bg-slate-900"}>
      <div
        className={`2xl:container mx-auto ${
          isDark ? "bg-white" : "bg-slate-900"
        }`}
      >
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={4000}
          className="h-[85vh]"
        >
          <div data-src="https://img.freepik.com/free-photo/sofware-developer-thinking-while-touching-beard-while-typing-laptop-sitting-desk-with-multiple-screens-parsing-code-focused-database-admin-working-with-team-coding-background_482257-33556.jpg?w=900&t=st=1666710363~exp=1666710963~hmac=72af4a4f3d1c7fcfc5485b765142b208d78d48c22acab2d1b3d7802bb070a0e0">
            <div className="bg-black absolute top-0 bottom-0 left-0 right-0 opacity-50"></div>
            <div className="absolute left-0 right-0 bottom-28 text-center">
              <h1 className="text-6xl md:text-8xl text-white">
                Build your skill
              </h1>
              <h1 className="text-4xl font-semibold text-white my-4">with</h1>
              <h1 className="text-6xl text-white ">Dev Learn</h1>
              <p className="text-slate-300 mt-3">
                Build your skill with us. We provide CSE related courses for
                students.<br></br>
                We have world class course. You can build a developer carrier
                with us.
              </p>
            </div>
          </div>
          <div data-src="https://img.freepik.com/free-photo/attractive-laughing-freelancer-woman-posing-with-cup-coffee-her-workplace-chinese-student-blue-shirt-works-with-document-campus-with-blonde-friend-glasses_197531-3740.jpg?w=740&t=st=1666711855~exp=1666712455~hmac=585f39a34ada0105917237d1aa9eff1a50f9826b50adc769b637002e4d482b6c">
            <div className="bg-black absolute top-0 bottom-0 left-0 right-0 opacity-50"></div>
            <div className="absolute left-0 right-0 bottom-28 text-center">
              <h1 className="text-6xl md:text-8xl text-white">
                Build your skill
              </h1>
              <h1 className="text-4xl font-semibold text-white my-4">with</h1>
              <h1 className="text-6xl text-white ">Dev Learn</h1>
              <p className="text-slate-300 mt-3">
                Build your skill with us. We provide CSE related courses for
                students.<br></br>
                We have world class course. You can build a developer carrier
                with us.
              </p>
            </div>
          </div>
          <div data-src="https://img.freepik.com/premium-photo/young-cheerful-programmer-with-headphones-looking-you-with-smile-during-work-new-software-office_274679-9896.jpg?w=740">
            <div className="bg-black absolute top-0 bottom-0 left-0 right-0 opacity-50"></div>
            <div className="absolute left-0 right-0 bottom-28 text-center">
              <h1 className="text-6xl md:text-8xl text-white">
                Build your skill
              </h1>
              <h1 className="text-4xl font-semibold text-white my-4">with</h1>
              <h1 className="text-6xl text-white ">Dev Learn</h1>
              <p className="text-slate-300 mt-3">
                Build your skill with us. We provide CSE related courses for
                students.<br></br>
                We have world class course. You can build a developer carrier
                with us.
              </p>
            </div>
          </div>
          <div data-src="https://img.freepik.com/free-photo/paralyzed-asian-employee-working-call-center-reception-disability-friendly-office-female-operator-wheelchair-user-with-impairment-giving-assistance-customer-service-helpline_482257-43001.jpg?t=st=1666687330~exp=1666687930~hmac=751be51298db2e592e27052fad8b95e297258c3251c6677a1e23d1f41ed17751">
            <div className="bg-black absolute top-0 bottom-0 left-0 right-0 opacity-50"></div>
            <div className="absolute left-0 right-0 bottom-28 text-center">
              <h1 className="text-6xl md:text-8xl text-white">
                Build your skill
              </h1>
              <h1 className="text-4xl font-semibold text-white my-4">with</h1>
              <h1 className="text-6xl text-white ">Dev Learn</h1>
              <p className="text-slate-300 mt-3">
                Build your skill with us. We provide CSE related courses for
                students.<br></br>
                We have world class course. You can build a developer carrier
                with us.
              </p>
            </div>
          </div>
        </AutoplaySlider>
        <h2
          className={`text-3xl md:text-5xl font-medium ${
            isDark ? "text-slate-800" : "text-slate-200"
          } my-5 md:my-16`}
        >
          Our Courses
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto px-5 lg:p-0">
          {fetureCourse.map((course) => (
            <CourseCard key={course.id} course={course}></CourseCard>
          ))}
        </div>
        <div className="flex justify-center py-20">
          <Link to="/courses">
            <button
              className={`${
                isDark ? "bg-slate-600" : "bg-sky-500"
              } w-full py-2 px-10 font-medium text-white rounded-lg`}
            >
              Visit More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
