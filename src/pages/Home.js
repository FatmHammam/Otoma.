import Brands from "../components/Brands";
import Downloads from "../components/Downloads";
import FindMore from "../components/FindMore";
import Footer from "../components/Footer";
import Header from "../components/Header";
import OurTeam from "../components/OurTeam";
import Services from "../components/Services";
import WhyOtoma from "../components/WhyOtoma";

function Home() {
    console.log("Home")
    return (
        <div>
            <Header />
            <FindMore />
            <WhyOtoma />
            <Services />
            <OurTeam />
            <Downloads />
            <Brands />
            <Footer />
        </div>
    );
}

export default Home;
