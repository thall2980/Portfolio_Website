import React from "react";

const ProjectVideo = ({ props }) => {
  return (
    <div className="project_container  p-10 mb-20 bg-blue-300 rounded">
      <h1 className="project_title">{props.title}</h1>
      <div className="flex flex-row pt-10">
        <div className="title_video_container">
          <div className="h-full w-full">
            <iframe
              className="h-full w-full"
              width="853"
              height="480"
              src={`https://www.youtube.com/embed/${props.embedID}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
        </div>
        <div className="description_bullets_container py-20 px-8">
          <h2 className="project_description">{props.description}</h2>
          <ul className="bullets px-10 sm: px-0">
            <li className="bullets pt-10">{props.process[0]}</li>
            <li className="bullets pt-10">{props.process[1]}</li>
            <li className="bullets pt-10">{props.process[2]}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectVideo;
