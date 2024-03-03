"use client";

import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "@/components/ui/glowing-stars";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export type Service = {
  title: string;
  description: string;
};

const ServiceCard = ({ title, description }: Service) => {
  return (
    <CardContainer className="flex w-full items-center justify-center">
      <CardBody className="relative w-full">
        <GlowingStarsBackgroundCard>
          <CardItem translateZ="50">
            <GlowingStarsTitle>{title}</GlowingStarsTitle>
          </CardItem>

          <CardItem translateZ="60" className="flex justify-between items-end">
            <GlowingStarsDescription>{description}</GlowingStarsDescription>
          </CardItem>
        </GlowingStarsBackgroundCard>
      </CardBody>
    </CardContainer>
  );
};

export default ServiceCard;
