import type { LoaderArgs } from "@remix-run/node";

import AboutMe from "~/components/about";
import MyExpertise from "~/components/expertise";
import HeroSection from "~/components/hero";
import MyJourney from "~/components/journey";
import MyServices from "~/components/services";
import MyProjects from "~/components/projects";
import BannerSection from "~/components/banner";

const demo = {
  id: "cl5v26xoc2r8l0bpld6e9kyrg",
  title: "Where In The World?",
  slug: "where-in-the-world",
  description: {
    raw: {
      children: [
        {
          type: "paragraph",
          children: [
            {
              text: "A classic challenge from ",
            },
            {
              bold: true,
              text: "Frontend Mentor",
            },
            {
              text: ".",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "It consumes rest-apis from the ",
            },
            {
              href: "https://restcountries.com",
              type: "link",
              children: [
                {
                  text: "REST Countries",
                },
              ],
              openInNewTab: true,
            },
            {
              text: " public free api and represents it using beautiful ui made with TailwindCSS.",
            },
          ],
        },
      ],
    },
  },
  source: "https://github.com/devrayat000/rest-countries",
  demo: "https://every-country.netlify.app/",
  tags: [
    {
      id: "cl5v26xov2r8m0bpl9vlb2oqe",
      name: "TailwindCSS",
    },
    {
      id: "cl5v26xov2r8o0bplx3q90cj0",
      name: "Remix",
    },
    {
      id: "cl5v26xow2r8q0bplzok52j3n",
      name: "Headless-UI",
    },
  ],
  images: [
    {
      id: "cl5v26xow2r8s0bplzgtawhkr",
      image: {
        url: "http://res.cloudinary.com/buet/image/upload/v1653832883/Portfolio/cl3rde5zi0003xow4aulb59wv.jpg",
        tags: [],
        type: "upload",
        bytes: 47689,
        width: 900,
        format: "jpg",
        height: 660,
        derived: [
          {
            url: "http://res.cloudinary.com/buet/image/upload/q_auto/f_auto/v1653832883/Portfolio/cl3rde5zi0003xow4aulb59wv.jpg",
            secure_url:
              "https://res.cloudinary.com/buet/image/upload/q_auto/f_auto/v1653832883/Portfolio/cl3rde5zi0003xow4aulb59wv.jpg",
            raw_transformation: "q_auto/f_auto",
          },
          {
            url: "http://res.cloudinary.com/buet/image/upload/c_fill,g_auto,h_80,r_max,w_80/f_auto,q_auto/v1653832883/Portfolio/cl3rde5zi0003xow4aulb59wv.jpg",
            secure_url:
              "https://res.cloudinary.com/buet/image/upload/c_fill,g_auto,h_80,r_max,w_80/f_auto,q_auto/v1653832883/Portfolio/cl3rde5zi0003xow4aulb59wv.jpg",
            raw_transformation: "c_fill,g_auto,h_80,r_max,w_80/f_auto,q_auto",
          },
        ],
        version: 1653832883,
        duration: null,
        metadata: [],
        public_id: "Portfolio/cl3rde5zi0003xow4aulb59wv",
        created_at: "2022-05-29T14:01:23Z",
        created_by: {
          id: "592945453776566",
          type: "accesskey",
        },
        secure_url:
          "https://res.cloudinary.com/buet/image/upload/v1653832883/Portfolio/cl3rde5zi0003xow4aulb59wv.jpg",
        access_mode: "public",
        uploaded_by: {
          id: "592945453776566",
          type: "accesskey",
        },
        resource_type: "image",
      },
      label: "Where In The World - Preview",
    },
    {
      id: "cl5v26xox2r8u0bplz3m2qlt2",
      image: {
        url: "http://res.cloudinary.com/buet/image/upload/v1653833001/Portfolio/cl3rdgphu0006xow4em0d0nvf.jpg",
        tags: [],
        type: "upload",
        bytes: 97930,
        width: 1440,
        format: "jpg",
        height: 1024,
        derived: [
          {
            url: "http://res.cloudinary.com/buet/image/upload/q_auto/f_auto/v1653833001/Portfolio/cl3rdgphu0006xow4em0d0nvf.jpg",
            secure_url:
              "https://res.cloudinary.com/buet/image/upload/q_auto/f_auto/v1653833001/Portfolio/cl3rdgphu0006xow4em0d0nvf.jpg",
            raw_transformation: "q_auto/f_auto",
          },
          {
            url: "http://res.cloudinary.com/buet/image/upload/c_fill,g_auto,h_80,r_max,w_80/f_auto,q_auto/v1653833001/Portfolio/cl3rdgphu0006xow4em0d0nvf.jpg",
            secure_url:
              "https://res.cloudinary.com/buet/image/upload/c_fill,g_auto,h_80,r_max,w_80/f_auto,q_auto/v1653833001/Portfolio/cl3rdgphu0006xow4em0d0nvf.jpg",
            raw_transformation: "c_fill,g_auto,h_80,r_max,w_80/f_auto,q_auto",
          },
        ],
        version: 1653833001,
        duration: null,
        metadata: [],
        public_id: "Portfolio/cl3rdgphu0006xow4em0d0nvf",
        created_at: "2022-05-29T14:03:21Z",
        created_by: {
          id: "592945453776566",
          type: "accesskey",
        },
        secure_url:
          "https://res.cloudinary.com/buet/image/upload/v1653833001/Portfolio/cl3rdgphu0006xow4em0d0nvf.jpg",
        access_mode: "public",
        uploaded_by: {
          id: "592945453776566",
          type: "accesskey",
        },
        resource_type: "image",
      },
      label: "Where In The World - Desktop Light Mode Home Demo",
    },
    {
      id: "cl5v26xox2r8w0bplivx4us9w",
      image: {
        url: "http://res.cloudinary.com/buet/image/upload/v1653832945/Portfolio/cl3rdfhyr0004xow4f7nqa5fh.jpg",
        tags: [],
        type: "upload",
        bytes: 26981,
        width: 1440,
        format: "jpg",
        height: 1024,
        derived: [
          {
            url: "http://res.cloudinary.com/buet/image/upload/q_auto/f_auto/v1653832945/Portfolio/cl3rdfhyr0004xow4f7nqa5fh.jpg",
            secure_url:
              "https://res.cloudinary.com/buet/image/upload/q_auto/f_auto/v1653832945/Portfolio/cl3rdfhyr0004xow4f7nqa5fh.jpg",
            raw_transformation: "q_auto/f_auto",
          },
          {
            url: "http://res.cloudinary.com/buet/image/upload/c_fill,g_auto,h_80,r_max,w_80/f_auto,q_auto/v1653832945/Portfolio/cl3rdfhyr0004xow4f7nqa5fh.jpg",
            secure_url:
              "https://res.cloudinary.com/buet/image/upload/c_fill,g_auto,h_80,r_max,w_80/f_auto,q_auto/v1653832945/Portfolio/cl3rdfhyr0004xow4f7nqa5fh.jpg",
            raw_transformation: "c_fill,g_auto,h_80,r_max,w_80/f_auto,q_auto",
          },
        ],
        version: 1653832945,
        duration: null,
        metadata: [],
        public_id: "Portfolio/cl3rdfhyr0004xow4f7nqa5fh",
        created_at: "2022-05-29T14:02:25Z",
        created_by: {
          id: "592945453776566",
          type: "accesskey",
        },
        secure_url:
          "https://res.cloudinary.com/buet/image/upload/v1653832945/Portfolio/cl3rdfhyr0004xow4f7nqa5fh.jpg",
        access_mode: "public",
        uploaded_by: {
          id: "592945453776566",
          type: "accesskey",
        },
        resource_type: "image",
      },
      label: "Where In The World - Desktop Dark Mode Details Demo",
    },
  ],
};

export async function loader({ request }: LoaderArgs) {
  return {
    projects: new Array(6).fill(demo),
  };
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
    </>
  );
}
