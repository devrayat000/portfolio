import AboutMe from "~/components/about";
import MyExpertise from "~/components/expertise";
import HeroSection from "~/components/hero";
import MyJourney from "~/components/journey";

export default function Index() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <MyExpertise />
      <MyJourney />
    </>
  );
}
