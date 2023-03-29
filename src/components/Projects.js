import React from "react";
import ProjectVideo from "./ProjectVideo";

const embedIDs = ["HZpBoumGV7Q", "lZKTvIHeGnA", "h_6S7QVwqqs", "e0qrnaA9MIA"];
const projectVideos = [
  {
    id: 1,
    title: "Art Spot",
    description:
      "A social media app for artists to post artwork, comment, and like other user’s artwork.",
    process: [
      "Created a backend API using Ruby on Rails following the MVC pattern with a React.js frontend.",
      "Implemented an aliased user model to create a follower-following relationship.",
      "Utilized session cookies to authorize/authenticate user accounts.",
    ],
    embedID: "HZpBoumGV7Q",
  },
  {
    id: 2,
    title: "Groove Hound",
    description:
      "A concert tracking app that displays upcoming concerts and bands.",
    process: [
      "Constructed a backend API using Ruby on Rails  following the MVC pattern with a React.js frontend.",
      "Utilized session cookies to authorize/authenticate user accounts.",
      "Implemented the Mantine library in addition to vanilla CSS to style the application.",
    ],
    embedID: "lZKTvIHeGnA",
  },
  {
    id: 3,
    title: "Wagging Walkers",
    description:
      "A dog walking service where users can register their dogs and create appointments.",
    process: [
      "Constructed a backend API through Sinatra with two models relating to each other via a many-to-many relationship.",
      "Utilized React for the front end of the application to display the database entries.",
      "Implemented full CRUD capabilities that persisted through the backend.",
    ],
    embedID: "h_6S7QVwqqs",
  },
  {
    id: 4,
    title: "League of Legends Worlds 2022",
    description:
      "An application to display the 2022 League of Legends world tournament information with a message board feature.",
    process: [
      "Created a local JSON server to act as the backend endpoint for fetch requests with a fully-fleshed React.js frontend.",
      "Implemented conditional rendering through the use of state and user actions.",
      "Organized the application as a single page to limit HTTP requests through client-side routing using React Router.",
    ],
    embedID: "e0qrnaA9MIA",
  },
];
const videoComponent = projectVideos.map((projectVideo) => (
  <ProjectVideo key={projectVideo.id} props={projectVideo} />
));
console.log(embedIDs);

const Projects = () => {
  return (
    <div>
      <h1 className="text-center text-5xl pb-20">Projects</h1>
      <div className="projects_container overflow-y-auto">{videoComponent}</div>
    </div>
  );
};

export default Projects;
