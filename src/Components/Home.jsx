import React from "react";
import Nav from "./Nav";
import Text from "./Text";
import Count from "./Count/Count";
import Card from "./Card/Card";
import pic1 from "../assets/c7.png";
import pic2 from "../assets/c8.png";
import pic3 from "../assets/c9.png";
import pic4 from "../assets/c4.jpg";
import pic5 from "../assets/p1.jpg";
import pic6 from "../assets/p2.jpg";
import pic7 from "../assets/p3.jpg";
import Que from "./Que";
import TeacherCard from "./Card/TeacherCard";
import Footer from "./Footer";
import ProfileCard from "./Profile/ProfileCard";

function Home() {
  return (
    <>
      <Nav />
      <br />
      <br />
      <Text />
      <br />
      <br />
      <br />
      <Count />
      <br />
      <br />
      <h1 className="text-center text-xl font-semibold">Choose Our Top Courses</h1>
      <br />
      <br />
      <div className="flex flex-wrap justify-center gap-6">
        <Card img={pic1} title={"Know About React"} link={"https://react.dev/"} about={"React is a JavaScript-based UI development library"}/>
        <Card img={pic2} title={"Know About Javascript"} link={'https://developer.mozilla.org/en-US/docs/Web/JavaScript'} about={"JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions."}/>
        <Card img={pic3} title={"Know About Appwrite"} link={"https://appwrite.io/"} about={"Appwrite is an open-source platform for building applications at any scale, using your preferred programming languages and tools."}/>
      </div>
      <br />
      <br />
      <Que />
      <h1 className="text-center text-xl font-semibold">Our Expert Instructors</h1>
      <br />
      <br /> <br />
      <br />
      <div className="flex flex-wrap justify-center gap-6">
        <TeacherCard img={pic5} name ={"Dhruv"} teach = {"Computer"}/>
        <TeacherCard img={pic6} name ={"Nila"} teach = {"Math"}/>
        <TeacherCard img={pic7} name ={"Avan"} teach = {"Data Science"}/>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}

export default Home;
