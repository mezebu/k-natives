import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ContactUs from "./components/ContactUs";
import AboutPage from "./components/AboutPage";
import CoursePage from "./components/CoursePage";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import "normalize.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/contact" exact component={ContactUs} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/course" exact component={CoursePage} />
      </Switch>
    </div>
  );
}

export default App;
