import type { SocialObjects } from "./types";

export const SITE = {
  website: "https://priver.dev/",
  author: "Emil Privér",
  desc: "Hey! My name is Emil Privér, I write about stuffs I learn and build. I am a software developer who likes serverless and distributed systems, but also discovering new projects and areas in tech.",
  title: "Emil Privér",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 10,
};

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/emilpriver",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/emil_priver",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/emilpriver/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/emil_priver",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "Twitch",
    href: "https://twitch.tv/privann",
    linkTitle: `${SITE.title} on Twitch`,
    active: true,
  },
];
