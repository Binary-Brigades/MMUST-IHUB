import React from "react";
import Lapii from "../assets/lapi.svg";
import { TiArrowForward } from "react-icons/ti";
import { GoArrowRight } from "react-icons/go";
import Divider from "./Divider";
import ProjectItem from "./ProjectItem";
import MMUStjosa from "../assets/mmustjosa.png";
import OPPS from "../assets/oppspic.png";
import amredi from "../assets/amredi.png";
import tomeiget from "../assets/tomeiget.png";
import vidmind from "../assets/vidmindpic.png";
import feewiz from "../assets/feewiz.png";
import innerglow from "../assets/innerglowpic.png";
import sandbox from "../assets/sandbox.jpg"
import fullsandbox from "../assets/img3 (1).jpg"
function Products() {
  return (
    <div className="mb-[30px]" id="products">
      <Divider text="Projects" />
      <section className="w-full py-4 md:py-24 lg:py-32">
        <div className="container px-4 grid items-center justify-center gap-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-2">
            {/* <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Projects
            </h2> */}
            <p className="mx-auto max-w-3xl text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Take a look at some of the amazing projects we've been working on.
            </p>
          </div>
        </div>
        <div className="container px-4 py-12 md:py-16 lg:py-20 xl:py-24">
          <div className="grid grid-cols-1 items-start justify-center gap-6 sm:grid-cols-2 lg:gap-8 lg:grid-cols-3">
            <ProjectItem
              image={MMUStjosa}
              title={"MMUST JOSA"}
              description={
                "MMUST JOSA is an online news platform for MMUST journalism club, where the club members can post and upload news trending and users can view"
              }
              link={"https://mmustjosadigital.com/"}
            />
            <ProjectItem
              image={vidmind}
              title={"VIDMIND"}
              description={
                "VIDMIND Ai is a youtube video summarilizer, analizer and help users extract key information on long youtube videos in few minutes."
              }
              link={"https://vidmind.vercel.app/"}
            />
            <ProjectItem
              image={tomeiget}
              title={"2MEIGET"}
              description={
                "2meiget is a platform for helping students to find their lost IDs, It helps to provide one central point and bridging the gap between Id owners and collection centers"
              }
              link={"https://2meiget.vercel.app/"}
            />
            <ProjectItem
              image={OPPS}
              title={"ONLINE PROJECT PROPOSAL"}
              description={
                "OPPS in an online project proposal for project submission reviewing projects, awarding marks,  approval and funding in an online setup where users can follow up on their project state"
              }
              link={"https://opps-frontend.vercel.app/"}
            />

            <ProjectItem
              image={innerglow}
              title={"INNERGLOW"}
              description={
                "Innerglow is an empathetic chatbot that  provides a safe space for users to openly express their thoughts and emotions and extends a comforting hand helping you prioritize your mental health."
              }
              link={"https://inner-glow.vercel.app/"}
            />
            <ProjectItem
              image={fullsandbox}
              title={"FEEWIZ"}
              description={
                "FEEWIZ helps financial matters helping in payment of school fees, view fee statements, view balance and more using USSD , this also helps people (student) without smartphones"
              }
              link={"https://ussd-frontend.vercel.app/"}
            />
            <ProjectItem
              image={amredi}
              title={"AMREDI"}
              description={
                "Amredi is a mobile app platform that helps young women to connect to mentors and trainers who can help in impacting skills that they can use to earn a living buy starting a project that can be funded by a sponsor willing to fund the project"
              }
              link={"https://amredi.vercel.app/"}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
