
import HeroComponent from "../../Components/HeroComponent/HeroComponent";
import BrandComponent from "../../Components/BrandComponent/BrandComponent";
import SalesTeamComponent from "../../Components/SalesTeamComponent/SalesTeamComponent";
import ServiceComponent from "../../Components/ServiceComponent/ServiceComponent";
// import SliderComponent from "../SliderComponent/SliderComponent";
import FooterComponent from "../../Components/FooterComponents/FooterComponent";
import AboutPageComponent from "../AboutpageComponent/AboutpageComponent";



const HomePageComponent = () => {
  return (
    <div>
      <HeroComponent />
      <ServiceComponent />
      <AboutPageComponent />
      <SalesTeamComponent />
      <BrandComponent />
      <FooterComponent />
    </div>
  );
};

export default HomePageComponent;
