import React from "react";

const ProjectVideo = ({ props }) => {
  return (
    <div className=" h-fit overflow-y-auto  p-10 mb-20 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-orange-100 via-orange-300 to-red-100 text-stone-500 shadow-2xl rounded-3xl 2xl:h-[60vh]">
      <h1 className="text-center font-bold text-3xl md:text-4xl">{props.title}</h1>
      <div className="pt-10 justify-center lg:flex flex-row">
        <div className="h-full w-full lg:w-3/5">

            <iframe
              className="w-full h-[30vh] lg:h-[40vh] mt-15 xl:mt-0 "
              // width="853"
              // height="480"
              src={`https://www.youtube.com/embed/${props.embedID}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />

        </div>
        <div className=" md:mt-4 ml-6 lg:w-3/5">
          <h2 className="font-bold pb-5 border-b-4 text-2xl md:text-3xl">{props.description}</h2>
          <ul className="text-lg md:text-2xl ">
            <li className="pt-10 ">{props.process[0]}</li>
            <li className="pt-4 ">{props.process[1]}</li>
            <li className="pt-4 ">{props.process[2]}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectVideo;
