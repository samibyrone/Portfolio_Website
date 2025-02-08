import "./App.css";
import { About } from "./Component/about/About";
import { Contacts } from "./Component/contact/Contacts";
import { Footer } from "./Component/footer/Footer";
import { Layout } from "./Component/Layout/Layout";
import { Navbar } from "./Component/navbar/Navbar";
import { Projects } from "./Component/project/Projects";
import { Service } from "./Component/service/Service";

function App() {
  return (
    <div>
      <Navbar />
      <Layout />
      <About />
      <Service />   
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;