import "./App.css";
import { About } from "./Component/about/About";
import { Layout } from "./Component/Layout/Layout";
import { Navbar } from "./Component/navbar/Navbar";
import { Service } from "./Component/service/Service";

function App() {
  return (
    <div>
      <Navbar />
      <Layout />
      <About />
      <Service />   
    </div>
  );
};

export default App;