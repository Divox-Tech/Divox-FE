import {Injectable} from "@angular/core";

@Injectable({ providedIn: 'root' })
export class EnglishTextService {
  constructor() {
  }

  contactUsText = {
    contactUsHeadline: `We'd love to know more about your projects and how we can help bring your vision to life.`,
    contactUsSideText: `Trust our experienced and dedicated team of tech experts to be your reliable partner in transforming your ideas into reality. Hire us as your trusted tech team and benefit from our expertise.`
  }

  workProcessText = `We are an agile team that combines the power of design thinking with cutting-edge technology to deliver comprehensive website development, branding, and design solutions for businesses of all sizes. From crafting captivating visuals to creating seamless user experiences.`;

  readyToTalkToUsText = `Ready to bring your ideas to life? We're here to help. Share your project or problem, and let us create a stunning website that showcases your vision.`;

  hireUsAsTechTeam = `Unlock the power of our team. With 5 talented designers and developers at your service, we'll bring your project to life with expertise and collaboration.`;

  aboutUsText = {
    aboutDivoxText: `At Divox, our vision is to empower businesses with cutting-edge digital solutions that drive growth and success. We are a team of passionate professionals dedicated to delivering exceptional website design, development, and branding services.`,
    ourApproachText: `We believe in the power of innovation and collaboration. Our team combines extensive technical expertise with creative thinking to craft digital experiences that leave a lasting impact. We strive to understand your unique business goals and tailor our solutions to exceed your expectations.`,
    collaborationAndResultsText: `At Divox, we prioritize collaboration and open communication. We work closely with our clients, involving them at every stage of the process, from conceptualization to final implementation. Our goal is to deliver tangible results that align with your objectives, helping you achieve sustainable growth in an ever-evolving digital world.`,
    experienceTheDivoxDifferenceText: `Choose Divox as your trusted partner for all your digital needs. Let us help you navigate the complexities of the online realm while providing you with unparalleled support and expertise. Join hands with us, and together, we'll create digital experiences that captivate, inspire, and drive your business forward.`
  }

  divoxSlogan = `From Tech Wizardry \n to Marketing Mastery`;

  whatIsDivox = `A comprehensive design, marketing, and development agency. We blend creativity and strategy to build brands, engage audiences, and create seamless digital experiences that leave a lasting impact.`;

  whyDivox = `Divox: Where Tech Solutions Get a Splash of Innovation! Our secret ingredient? Simplicity and swanky design that wows users. Our team of tech wizards and Designers will whisk you through the entire process, making sure you're part of the magic. Say goodbye to boring and hello to Divox, where your business gets a turbo boost into the future!`;

  projectsCost = `Project Cost: Where Pricing Meets Value!`;

  servicesDescription = `Our pricing structure is project-based, requiring an initial deposit to commence the work. Payments are then made upon the completion of each milestone. Here are the various services:`;

  servicesText = {
    webAppText: `WebSite and Application design & development`,
    webAppDescription: `we deliver exceptional website and mobile app development with innovative design for engaging audiences and meeting business needs`,
    landingPageText: `Landing Page <br> We provide design and development services for captivating landing pages.`,
    logoDesignText: `Logo Design`,
    logoDesignDescription: `Our in-house logo designer will create a custom logo tailored to your brand.`,
    websiteText: `Website <br> We offer multiple-page website development.`,
    brandingText: `Branding`,
    brandingDescription: `Our branding services encompass brand identity guides, logo design, and custom illustrations for marketing purposes.`,
    motionGraphicsVideos:`Motion Graphics Videos`,
    motionGraphicsVideosDescription:`Engage and impress your audience with dynamic motion graphics videos to impress your clients`,
    ContentCreator:`Content Creation`,
    ContentCreatorDescription:`Our content creator will create all the content you need to boost your project`,
    marketingCampaigns:`Marketing Campaigns and consultations`,
    marketingCampaignsDescription:`Boost your business with impactful marketing campaigns and expert consultations. `,

    servicesNote: `Please note that specific pricing details for each project type can be provided upon consultation and understanding the scope of work involved.`,
    hireUsText: `HIRE US AS YOUR TEAM`,
    readyToTalkToUs: `Talk to us to learn more about how hiring us as your team works!`
  }

  ourTeam = {
    ourTeamText: `Our Team`,
    productDesignerText: `Product Designer <br> UX/UI design team with one senior designer`,
    projectManagerText: `Project Manager <br> Dedicated project Manager`,
    frontendText: `Front-end Engineer <br> Frontend team with one senior front-end engineer`,
    graphicDesignerText: `Graphics Designer <br> Dedicated graphics designers for custom logo and illustrations`,
    backendText: `Back-end Engineer <br> Backend team with one senior back-end engineer`,
  }

}
