// App.js
import {Routes, Route, BrowserRouter} from "react-router-dom"
import Logo from './Components/Logo';
import LandingPage from './Components/LandingPage';
import AdminLogin from "./Components/AdminLogin";
import LoginPage from "./Components/LoginPage";
import SignupPage from "./Components/SignupPage";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import HomePage from "./Components/HomePage";
import News from "./Components/News";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Marriage from "./Components/Marriage";
import Birthday from "./Components/Birthday";
import Farewell from "./Components/Farewell";
import BabyShower from "./Components/BabyShower";
import MarriageForm from "./Components/MarriageForm";
import BirthdayForm from "./Components/BirthdayForm";
import FarewellForm from "./Components/FarewellForm";
import BabyShowerForm from "./Components/BabyShowerForm";
import SuccessPage from "./Components/SuccessPage";
import AdminNavBar from "./Components/AdminNavBar";
import AdminAdd from "./Components/AdminAdd";
import AdminUpdate from "./Components/AdminUpdate";
import AdminDelete from "./Components/AdminDelete";
import AdminView from "./Components/AdminView";
import ViewBookings from "./Components/ViewBookings";










// import {BrowserRouter,Routes,Route} from "react-router-dom"
const App = () => {
  return (   
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Logo/>}></Route>
      <Route path="/LandingPage" element={<LandingPage/>}></Route>
      <Route path="/AdminLogin" element={<AdminLogin/>}></Route>
      <Route path="/LoginPage" element={<LoginPage/>}></Route>
      <Route path="/SignupPage" element={<SignupPage/>}></Route>
      <Route path="/LoginPage" element={<LoginPage/>}></Route>
      <Route path="/NavBar" element={<NavBar/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/HomePage" element={<HomePage/>}></Route>
      <Route path="/News" element={<News/>}></Route>
      <Route path="/Services" element={<Services/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
      <Route path="/Marriage" element={<Marriage/>}></Route>
      <Route path="/Birthday" element={<Birthday/>}></Route>
      <Route path="/Farewell" element={<Farewell/>}></Route>
      <Route path="/BabyShower" element={<BabyShower/>}></Route>
      <Route path="/MarriageForm" element={<MarriageForm/>}></Route>
      <Route path="/BirthdayForm" element={<BirthdayForm/>}></Route>
      <Route path="/FarewellForm" element={<FarewellForm/>}></Route>
      <Route path="/BabyShowerForm" element={<BabyShowerForm/>}></Route>
      <Route path="/SuccessPage" element={<SuccessPage/>}></Route>
      <Route path="/AdminNavBar" element={<AdminNavBar/>}></Route>
      <Route path="/AdminAdd" element={<AdminAdd/>}></Route>
      <Route path="/AdminUpdate" element={<AdminUpdate/>}></Route>
      <Route path="/AdminDelete" element={<AdminDelete/>}></Route>
      <Route path="/AdminView" element={<AdminView/>}></Route>
      <Route path="/ViewBookings" element={<ViewBookings/>}></Route>
      <Route path="/Slideshow" element={<LandingPage/>}></Route>











    </Routes>
    </BrowserRouter>
  );
};

export default App;
 