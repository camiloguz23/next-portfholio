import { MainLayout } from "@/layout";
import { About, Presentation, Timeline } from "@/components";
import Skill from "@/components/skill/Skill";

export default function Home() {
  return (
    <>
      <MainLayout>
        <Presentation />
        <About />
        <Skill />
        <Timeline />
      </MainLayout>
    </>
  );
}
