import "./App.css";
import Footer from "./component/FooterDiv/Footer";
import Job from "./component/jobDiv/Job";
import NavBar from "./component/NavBar/NavBar";
import Search from "./component/SearchDiv/Searh";
import Value from "./component/ValueDiv/Value";
import F from "./component/FooterDiv/F";

function App() {
  return (
    <div className="m-auto bg-white py-8  ml-8 mr-8">
      <NavBar />
      <Search />
      <Job />
      <Value />
      <Footer />
      <F/>
    </div>
  );
}

export default App;
