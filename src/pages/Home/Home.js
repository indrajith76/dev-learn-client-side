import React from "react";
import "./Home.css";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Home = () => {
  return (
    <div className="2xl:container mx-auto">
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={4000}
        style={{ "--slider-height-percentage": "38%" }}
      >
        <div data-src="https://img.freepik.com/free-photo/sofware-developer-thinking-while-touching-beard-while-typing-laptop-sitting-desk-with-multiple-screens-parsing-code-focused-database-admin-working-with-team-coding-background_482257-33556.jpg?w=900&t=st=1666710363~exp=1666710963~hmac=72af4a4f3d1c7fcfc5485b765142b208d78d48c22acab2d1b3d7802bb070a0e0">
          <div className="bg-black absolute top-0 bottom-0 left-0 right-0 opacity-50"></div>
        </div>
        <div data-src="https://img.freepik.com/free-photo/attractive-laughing-freelancer-woman-posing-with-cup-coffee-her-workplace-chinese-student-blue-shirt-works-with-document-campus-with-blonde-friend-glasses_197531-3740.jpg?w=740&t=st=1666711855~exp=1666712455~hmac=585f39a34ada0105917237d1aa9eff1a50f9826b50adc769b637002e4d482b6c">
          <div className="bg-black absolute top-0 bottom-0 left-0 right-0 opacity-50"></div>
        </div>
        <div data-src="https://img.freepik.com/premium-photo/young-cheerful-programmer-with-headphones-looking-you-with-smile-during-work-new-software-office_274679-9896.jpg?w=740">
          <div className="bg-black absolute top-0 bottom-0 left-0 right-0 opacity-50"></div>
        </div>
        <div data-src="https://img.freepik.com/free-photo/paralyzed-asian-employee-working-call-center-reception-disability-friendly-office-female-operator-wheelchair-user-with-impairment-giving-assistance-customer-service-helpline_482257-43001.jpg?t=st=1666687330~exp=1666687930~hmac=751be51298db2e592e27052fad8b95e297258c3251c6677a1e23d1f41ed17751">
          <div className="bg-black absolute top-0 bottom-0 left-0 right-0 opacity-50"></div>
        </div>
      </AutoplaySlider>
    </div>
  );
};

export default Home;
