"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Heading } from "@/components/heading";
import { Paragraph } from "@/components/paragraph";
import { Card } from "@/components/card";
import { LoginCard } from "@/components/loginCard";
import { ArrowRightIcon } from "@/components/icons/arrow-right";
import { HeadingArrowIcon } from "@/components/icons/heading-arrow";
import { Feature } from "@/components/feature";

export default function Home() {
  const handleClick = () => {
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark");
    }
  };

  return (
    <div className="flex flex-col gap-4">
        <div className="absolute top-10 left-10">
        <Button onClick={handleClick} variant="outline">Dark Mode</Button>
        </div>
        <Section type="primary">
            <Container size="xl" className="flex flex-col gap-6">
                <div className="grid grid-cols-3 gap-8">
                    <div className="col-span-2 max-w-[640px] flex flex-col">
                        <Heading level={1}>The AI-first Global Cloud Platform</Heading>
                        <Paragraph size="2xl">Global, automated cloud infrastructure from the broadest array of AMD and NVIDIA GPUs to virtual CPUs, bare metal, Kubernetes, storage, and networking solutions.</Paragraph>
                    </div>
                    <LoginCard 
                        shadow 
                        heading="Deploy in seconds">
                    </LoginCard>
                </div>
                <div className="grid grid-cols-3 gap-6">
                    <Card
                      captionClass="!text-3xl"
                      heading="Introducing New Vultr VX1™ Compute Plans Price-to-Performance"
                      caption="Announcement"
                      description="IT leaders are under increasing pressure. Cloud costs continue to rise, while budgets stagnate or shrink. New AI initiatives are under the microscope, requiring new resources and focus, while geographic derisking plans."
                      type="primary"
                    >
                      <Button variant="link" size="lg">
                        Learn More
                        <ArrowRightIcon />
                      </Button>
                    </Card>
                    <div className="grid grid-cols-2 grid-rows-2 col-span-2 gap-6">
                        <Card
                          shadow
                          captionClass="!text-base"
                          headingClass="!text-2xl"
                          size="sm"
                          heading="High-Performance Cloud GPU Solutions"
                          caption="Vultr VX1™ Cloud Compute"
                        >
                          <Button variant="link" size="lg">
                            Learn More
                            <ArrowRightIcon />
                          </Button>
                        </Card>
                        <Card
                          shadow
                          captionClass="!text-base"
                          headingClass="!text-2xl"
                          size="sm"
                          heading="High-Performance Cloud GPU Solutions"
                          caption="Vultr VX1™ Cloud Compute"
                        >
                          <Button variant="link" size="lg">
                            Learn More
                            <ArrowRightIcon />
                          </Button>
                        </Card>
                        <Card
                          shadow
                          captionClass="!text-base"
                          headingClass="!text-2xl"
                          size="sm"
                          heading="High-Performance Cloud GPU Solutions"
                          caption="Vultr VX1™ Cloud Compute"
                        >
                          <Button variant="link" size="lg">
                            Learn More
                            <ArrowRightIcon />
                          </Button>
                        </Card>
                        <Card
                          shadow
                          captionClass="!text-base"
                          headingClass="!text-2xl"
                          size="sm"
                          heading="High-Performance Cloud GPU Solutions"
                          caption="Vultr VX1™ Cloud Compute"
                        >
                          <Button variant="link" size="lg">
                            Learn More
                            <ArrowRightIcon />
                          </Button>
                        </Card>
                    </div>
                </div>
            </Container>
        </Section>
        <Section type="default">
            <Container size="xl" className="flex flex-col gap-6">
                <Heading level={2}>Next-generation AI infrastructure</Heading>
                <div className="grid grid-cols-2 gap-6">
                    <Feature
                        heading="Cloud Compute"
                        headingIcon={<HeadingArrowIcon />}
                        description="Deploy and scale containerized apps with a fully managed service. Vultr Kubernetes Engine ushers in a better way to optimize container orchestration.">
                    </Feature>
                    <Feature
                        heading="Cloud Compute"
                        headingIcon={<HeadingArrowIcon />}
                        description="Deploy and scale containerized apps with a fully managed service. Vultr Kubernetes Engine ushers in a better way to optimize container orchestration.">
                    </Feature>
                    <Feature
                        heading="Cloud Compute"
                        headingIcon={<HeadingArrowIcon />}
                        description="Deploy and scale containerized apps with a fully managed service. Vultr Kubernetes Engine ushers in a better way to optimize container orchestration.">
                    </Feature>
                    <Feature
                        heading="Cloud Compute"
                        headingIcon={<HeadingArrowIcon />}
                        description="Deploy and scale containerized apps with a fully managed service. Vultr Kubernetes Engine ushers in a better way to optimize container orchestration.">
                    </Feature>
                    <Feature
                        heading="Cloud Compute"
                        headingIcon={<HeadingArrowIcon />}
                        description="Deploy and scale containerized apps with a fully managed service. Vultr Kubernetes Engine ushers in a better way to optimize container orchestration.">
                    </Feature>
                    <Feature
                        heading="Cloud Compute"
                        headingIcon={<HeadingArrowIcon />}
                        description="Deploy and scale containerized apps with a fully managed service. Vultr Kubernetes Engine ushers in a better way to optimize container orchestration.">
                    </Feature>
                </div>
            </Container>
        </Section>
    </div>
  );
}