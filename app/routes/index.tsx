import type { LoaderArgs } from "@remix-run/node";

import AboutMe from "~/components/about";
import MyExpertise from "~/components/expertise";
import HeroSection from "~/components/hero";
import MyJourney from "~/components/journey";
import MyServices from "~/components/services";
import MyProjects from "~/components/projects";
import BannerSection from "~/components/banner";
import GetInTouch from "~/components/contact";
import apiServer from "~/services/api.server";

export async function loader({ request }: LoaderArgs) {
  const homePageData = await apiServer.GetHomePageData();
  return homePageData;
}

export default function Index() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <MyExpertise />
      <MyJourney />
      <MyServices />
      <MyProjects />
      <BannerSection />
      <GetInTouch />
    </>
  );
}
