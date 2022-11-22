import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./pages/header/Header";
import About from "./pages/about/About";
import NotFound from "./NotFound";
import Programmes from "./pages/programmes/Programmes";
import Contact from "./pages/contact/Contact";
import EnrollmentFS from "./pages/enrollment/EnrollmentFS";
import EnrollmentFE from "./pages/enrollment/EnrollmentFE";
import EnrollmentBE from "./pages/enrollment/EnrollmentBE";
import EnrollmentJS from "./pages/enrollment/EnrollmentJS";
import EnrollmentRJS from "./pages/enrollment/EnrollmentRJS";
import EnrollmentDA from "./pages/enrollment/EnrollmentDA";
import CourseNotFound from "./pages/courses-notfound/CourseNotFound";
import Hire from "./pages/hire/Hire";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Header />} />
          <Route path="why-choose-us" element={<About />} />
          <Route path="programmes" element={<Programmes />} />
          <Route path="contact" element={<Contact />} />
          <Route
            path="/programmes/javascript-full-stack-web-development"
            element={<EnrollmentFS />}
          />
          <Route
            path="/programmes/front-end-web-development"
            element={<EnrollmentFE />}
          />
          <Route
            path="/programmes/back-end-web-development"
            element={<EnrollmentBE />}
          />{" "}
          <Route path="/programmes/js-masterclass" element={<EnrollmentJS />} />
          <Route
            path="/programmes/reactjs-masterclass"
            element={<EnrollmentRJS />}
          />
          <Route path="/programmes/data-analysis" element={<EnrollmentDA />} />
          <Route
            path="/programmes/enroll-course"
            element={<CourseNotFound />}
          />
          <Route path="hire-us" element={<Hire />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
