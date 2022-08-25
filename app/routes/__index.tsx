import type { HeadersFunction, LoaderArgs } from "@remix-run/node";
import { m } from "framer-motion";

import AboutMe from "~/components/about";
import MyExpertise from "~/components/expertise";
import HeroSection from "~/components/hero";
import MyJourney from "~/components/journey";
import MyServices from "~/components/services";
import MyProjects from "~/components/projects";
import BannerSection from "~/components/banner";
import GetInTouch from "~/components/contact";
import apiServer from "~/services/api.server";
import { Outlet } from "@remix-run/react";

export const headers: HeadersFunction = () => {
  return {
    "Cache-Control":
      "public, max-age=0, s-maxage=3600, stale-while-revalidate=3600",
  };
};

export async function loader({ request }: LoaderArgs) {
  const homePageData = await apiServer.GetHomePageData();
  return homePageData;
}

export default function Index() {
  return (
    <m.main
      initial="hidden"
      // animate="show"
      exit="hidden"
      whileInView="show"
      viewport={{ once: false }}
    >
      <HeroSection />
      <AboutMe />
      <MyExpertise />
      <MyJourney />
      <MyServices />
      <MyProjects />
      <BannerSection />
      <GetInTouch />
      <Outlet />
    </m.main>
  );
}
