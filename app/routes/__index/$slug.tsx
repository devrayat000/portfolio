import { Image, Modal } from "@mantine/core";
import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData, useNavigate } from "@remix-run/react";

import apiServer from "~/services/api.server";
import type { GetProjectBySlugQuery } from "~/graphql/generated";
import { Carousel } from "@mantine/carousel";

type LoaderData = Exclude<GetProjectBySlugQuery["project"], null>;

export async function loader({ params }: LoaderArgs) {
  const slug = params.slug;
  if (!slug) {
    throw new Error("Not Found!");
  }

  const data = await apiServer.GetProjectBySlug({ slug });
  return data.project;
}

export default function ProgectDetailsPage() {
  const project = useLoaderData<LoaderData>();
  const navigate = useNavigate();

  return (
    <Modal
      opened={true}
      onClose={() => navigate(-1)}
      centered
      overlayBlur={2}
      size={720}
      title={project.title}
    >
      <Carousel mx="auto" withIndicators loop>
        {project.images.map((image) => (
          <Carousel.Slide key={image.id}>
            <Image src={image.image.url} alt={image.label} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Modal>
  );
}
