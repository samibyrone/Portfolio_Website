import "./App.css";
import { About } from "./Component/about/About";
import { Layout } from "./Component/Layout/Layout";
import { Navbar } from "./Component/navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Layout />
      <About />
    </div>
  );
};

export default App;