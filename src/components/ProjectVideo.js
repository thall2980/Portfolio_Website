import React from "react";

const ProjectVideo = ({ props }) => {
  return (
    <div className="project_container">
      <div className="title_video_container">
        <h1 className="project_title">{props.title}</h1>
        <div className="video-responsive">
          <iframe
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
      <div className="description_bullets_container">
        <h2 className="project_description">{props.description}</h2>
        <ul className="bullets">
          <li className="bullets">{props.process[0]}</li>
          <li className="bullets">{props.process[1]}</li>
          <li className="bullets">{props.process[2]}</li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectVideo;
