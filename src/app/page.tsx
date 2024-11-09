import Apps from "@/components/Apps";
import Banner from "@/components/Banner";
import Customize from "@/components/Customize";
import Data from "@/components/Data";
import Footer from "@/components/Footer";
import FreeTrail from "@/components/FreeTrail";
import LastFooter from "@/components/LastFooter";
import MoreCutom from "@/components/MoreCutom";
import OurSonosors from "@/components/OurSonosors";
import Price from "@/components/Price";
import Testumonial from "@/components/Testumonial";
import Work from "@/components/Work";
import YourWork from "@/components/YourWork";

export default function Home() {
  return (
    <main>
      <Banner />
      <Work />
      <Customize />
      <MoreCutom />
      <Price />
      <YourWork />
      <Data />
      <OurSonosors />
      <Apps />
      <Testumonial />
      <FreeTrail />
      <Footer />
      <LastFooter />
    </main>
  );
}
