import bfstore from "../assets/bfstore.png";
import weather from "../assets/weather.png"
import notes from "../assets/notes.png"

const web = [
  {
    id: 1,
    imageUrl: bfstore,
    description:
      `A FullStack Full Responsive Ecommerce Website with checkout built from scratch.
      Using React, TailwindCSS
      `,
    seeMore: "https://github.com/icenspln/Ecommerce",
    hostUrl: "https://bfstore.vercel.app/",
    hosted: true,
  },
  {
    id: 2,
    imageUrl: weather,
    description:
      "Weather app built with open weather API.",
    seeMore: "https://github.com/icenspln/weather-app",
    hostUrl: "https://weather-app-icen.vercel.app",
    hosted: true,
  },
  {
    id: 3,
    imageUrl: notes,
    description:
      "Note taking application using React, typescript and bootstrap",
    seeMore: "https://github.com/icenspln/note-app-ts",
    hostUrl: "https://note-app-ts.vercel.app/",
    hosted: true,
  },
];

export default web;
