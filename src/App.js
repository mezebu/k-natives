import HomePage from "./components/HomePage";
import SuccessStories from "./components/SuccessStories";
import Course from "./components/Course";
import ContactUs from "./components/ContactUs";
import AboutPage from "./components/AboutPage";
import CoursePage from "./components/CoursePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CopyRights from "./components/CopyRights";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import "normalize.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div id="home">
        <HomePage />
      </div>
      <div id="about">
        <AboutPage />
      </div>
      <div id="course">
        <Course />
      </div>
      <div id="stories">
        <SuccessStories />
      </div>
      <div id="course">
        <CoursePage />
      </div>
      <div id="contact">
        <ContactUs />
      </div>
      <Footer />
      <CopyRights />
    </div>
  );
}

export default App;
