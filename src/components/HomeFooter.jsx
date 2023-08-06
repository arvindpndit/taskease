import React from "react";

const HomeFooter = () => {
  return (
    <section className="flex flex-col my-4 md:my-8 px-2">
      <div>
        <p className="text-4xl md:text-5xl font-extrabold text-slate-300 mb-3">
          Get your
          <br />
          tasks done.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <img
          src="./assets/images/world.png"
          alt="earth"
          className="w-3/4 md:w-1/2 "
        />
      </div>
    </section>
  );
};

export default HomeFooter;
