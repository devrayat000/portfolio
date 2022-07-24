import AboutMe from "~/components/about";
import MyExpertise from "~/components/expertise";
import HeroSection from "~/components/hero";
import MyJourney from "~/components/journey";
import MyServices from "~/components/services";

export default function Index() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <MyExpertise />
      <MyJourney />
      <MyServices />
    </>
  );
}
