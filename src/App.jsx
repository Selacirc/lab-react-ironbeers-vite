import "./App.css";
import Navbar from "./components/Navbar";
import AllBeersPage from "./pages/AllBeersPage";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import RandomBeersPage from "./pages/RandomBeerPage";
import AddBeerPage from "./pages/AddBeerPage";
import BeerDetailsPage from "./pages/BeerDetailsPage";



function App() {
  return (
    <div className="App">

      <Navbar />

      <Routes>

        <Route path="/" element={ <HomePage /> } />
        <Route path="/beers" element={ <AllBeersPage /> } />
        <Route path="/random-beer" element={ <RandomBeersPage/> } />
        <Route path="/new-beer" element={ <AddBeerPage /> } />
        <Route path="/beers/:beerId" element={ <BeerDetailsPage /> } />


      </Routes>

    </div>
  );
}

export default App;


// Route /, which renders the HomePage component
// Route /beers, which renders the AllBeersPage component.
// Route /random-beer, which renders the RandomBeerPage component.
// Route /new-beer, which renders the AddBeerPage component.
// Route /beers/:beerId, which renders the BeerDetailsPage component.