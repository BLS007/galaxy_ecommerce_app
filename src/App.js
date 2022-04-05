import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import Smartphones from './Components/Electronics/Smartphones';
import SmartphoneDetails from './Components/ProductDetails/Electronics/SmartphoneDetails';
import Headphones from './Components/Electronics/Headphones';
import HeadphoneDetails from './Components/ProductDetails/Electronics/HeadphoneDetails';
import BluetoothSpeakers from './Components/Electronics/BluetoothSpeakers';
import BluetoothSpeakerDetails from './Components/ProductDetails/Electronics/BluetoothSpeakerDetails';
import TVs from './Components/Electronics/TVs';
import TVDetails from './Components/ProductDetails/Electronics/TVDetails';
import Basketball from './Components/SportingGoods/Basketball';
import BasketballDetails from './Components/ProductDetails/SportingGoods/BasketballDetails';
import Golf from './Components/SportingGoods/Golf';
import GolfDetails from './Components/ProductDetails/SportingGoods/GolfDetails';
import Football from './Components/SportingGoods/Football';
import FootballDetails from './Components/ProductDetails/SportingGoods/FootballDetails';
import Soccer from './Components/SportingGoods/Soccer';
import SoccerDetails from './Components/ProductDetails/SportingGoods/SoccerDetails';
import Legos from './Components/Toys/Legos';
import LegoDetails from './Components/ProductDetails/Toys/LegoDetails';
import BoardGames from './Components/Toys/BoardGames';
import BoardGamesDetails from './Components/ProductDetails/Toys/BoardGameDetails';
import ActionFigures from './Components/Toys/ActionFigures';
import ActionFigureDetails from './Components/ProductDetails/Toys/ActionFigureDetails';
import CollectibleCardGames from './Components/Toys/CollectibleCardGames';
import CollectibleCardGameDetails from './Components/ProductDetails/Toys/CollectibleCardGameDetails';
import WomensClothing from './Components/Clothing/WomensClothing';
import WomensClothingDetails from './Components/ProductDetails/Clothing/WomensClothingDetails';
import WomensShoes from './Components/Clothing/WomensShoes';
import WomensShoeDetails from './Components/ProductDetails/Clothing/WomensShoeDetails';
import MensClothing from './Components/Clothing/MensClothing';
import MensClothingDetails from './Components/ProductDetails/Clothing/MensClothingDetails';
import MensShoes from './Components/Clothing/MensShoes';
import MensShoeDetails from './Components/ProductDetails/Clothing/MensShoeDetails';
import Dog from './Components/PetSupplies/Dog';
import DogDetails from './Components/ProductDetails/PetSupplies/DogDetails';
import Cat from './Components/PetSupplies/Cat';
import CatDetails from './Components/ProductDetails/PetSupplies/CatDetails';
import Fish from './Components/PetSupplies/Fish';
import FishDetails from './Components/ProductDetails/PetSupplies/FishDetails';
import Laundry from './Components/HealthHousehold/Laundry';
import LaundryDetails from './Components/ProductDetails/HealthHousehold/LaundryDetails';
import HouseholdCleaning from './Components/HealthHousehold/HouseholdCleaning';
import HouseholdCleaningDetails from './Components/ProductDetails/HealthHousehold/HouseholdCleaningDetails';
import TissuesToiletPaper from './Components/HealthHousehold/TissuesToiletPaper';
import TissuesToiletPaperDetails from './Components/ProductDetails/HealthHousehold/TissuesToiletPaperDetails';
import HealthCare from './Components/HealthHousehold/HealthCare';
import HealthCareDetails from './Components/ProductDetails/HealthHousehold/HealthCareDetails';
import SportsNutrition from './Components/HealthHousehold/SportsNutrition';
import SportsNutritionDetails from './Components/ProductDetails/HealthHousehold/SportsNutritionDetails';
import FoodService from './Components/FoodService';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/cart" element={ <Cart/> } />
        <Route path="/checkout" element={ <Checkout/> } />
        <Route path="/smartphones" element={ <Smartphones/> } />
        <Route path="/smartphones/:id" element={ <SmartphoneDetails/> } />
        <Route path="/headphones" element={ <Headphones/> } />
        <Route path="/headphones/:id" element={ <HeadphoneDetails/> } />
        <Route path="/bluetoothspeakers" element={ <BluetoothSpeakers/> } />
        <Route path="/bluetoothspeakers/:id" element={ <BluetoothSpeakerDetails/> } />
        <Route path="/tvs" element={ <TVs/> } />
        <Route path="/tvs/:id" element={ <TVDetails/> } />
        <Route path="/basketball" element={ <Basketball/> } />
        <Route path="/basketball/:id" element={ <BasketballDetails/> } />
        <Route path="/golf" element={ <Golf/> } />
        <Route path="/golf/:id" element={ <GolfDetails/> } />
        <Route path="/football" element={ <Football/> } />
        <Route path="/football/:id" element={ <FootballDetails/> } />
        <Route path="/soccer" element={ <Soccer/> } />
        <Route path="/soccer/:id" element={ <SoccerDetails/> } />
        <Route path="/legos" element={ <Legos/> } />
        <Route path="/legos/:id" element={ <LegoDetails/> } />
        <Route path="/boardgames" element={ <BoardGames/> } />
        <Route path="/boardgames/:id" element={ <BoardGamesDetails/> } />
        <Route path="/actionfigures" element={ <ActionFigures/> } />
        <Route path="/actionfigures/:id" element={ <ActionFigureDetails/> } />
        <Route path="/collectiblecardgames" element={ <CollectibleCardGames/> } />
        <Route path="/collectiblecardgames/:id" element={ <CollectibleCardGameDetails/> } />
        <Route path="/womensclothing" element={ <WomensClothing/> } />
        <Route path="/womensclothing/:id" element={ <WomensClothingDetails/> } />
        <Route path="/womensshoes" element={ <WomensShoes/> } />
        <Route path="/womensshoes/:id" element={ <WomensShoeDetails/> } />
        <Route path="/mensclothing" element={ <MensClothing/> } />
        <Route path="/mensclothing/:id" element={ <MensClothingDetails/> } />
        <Route path="/mensshoes" element={ <MensShoes/> } />
        <Route path="/mensshoes/:id" element={ <MensShoeDetails/> } />
        <Route path="/dog" element={ <Dog/> } />
        <Route path="/dog/:id" element={ <DogDetails/> } />
        <Route path="/cat" element={ <Cat/> } />
        <Route path="/cat/:id" element={ <CatDetails/> } />
        <Route path="/fish" element={ <Fish/> } />
        <Route path="/fish/:id" element={ <FishDetails/> } />
        <Route path="/laundry" element={ <Laundry/> } />
        <Route path="/laundry/:id" element={ <LaundryDetails/> } />
        <Route path="/householdcleaning" element={ <HouseholdCleaning/> } />
        <Route path="/householdcleaning/:id" element={ <HouseholdCleaningDetails/> } />
        <Route path="/tissuesandtoiletpaper" element={ <TissuesToiletPaper/> } />
        <Route path="/tissuesandtoiletpaper/:id" element={ <TissuesToiletPaperDetails/> } />
        <Route path="/healthcare" element={ <HealthCare/> } />
        <Route path="/healthcare/:id" element={ <HealthCareDetails/> } />
        <Route path="/sportsnutrition" element={ <SportsNutrition/> } />
        <Route path="/sportsnutrition/:id" element={ <SportsNutritionDetails/> } />
        <Route path="/foodservice" element={ <FoodService/> } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
