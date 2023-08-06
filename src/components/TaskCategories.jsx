import React from "react";

const categories = [
  {
    title: "Moving furniture",
    iconSrc: "./assets/images/truck.png",
  },
  { title: "Events & Photography", iconSrc: "./assets/images/video.png" },
  { title: "Gardening", iconSrc: "./assets/images/leaves-leaf.png" },
  { title: "Handyman", iconSrc: "./assets/images/paint-roller-roller.png" },
  {
    title: "Furniture Assembly",
    iconSrc: "./assets/images/drill-drilling.png",
  },
  { title: "Cleaning", iconSrc: "./assets/images/sprayer-spray-bottle.png" },
  { title: "Business & Admin", iconSrc: "./assets/images/suitcase.png" },
  { title: "Delivery", iconSrc: "./assets/images/trolley.png" },
  { title: "Delivery", iconSrc: "./assets/images/obar.png" },
  { title: "Manpower", iconSrc: "./assets/images/people.png" },
  { title: "Safety", iconSrc: "./assets/images/safety-vest.png" },
  { title: "Health", iconSrc: "./assets/images/medical-kit.png" },
  { title: "Art", iconSrc: "./assets/images/paint-brush-art.png" },
  { title: "Construction", iconSrc: "./assets/images/construction.png" },
  { title: "Pedicure & manicure", iconSrc: "./assets/images/manicure.png" },
  {
    title: "Lab & Research",
    iconSrc: "./assets/images/microscope-medical.png",
  },
  { title: "Mechanic", iconSrc: "./assets/images/steering-wheel-car.png" },
  { title: "Pets care", iconSrc: "./assets/images/pet.png" },
  { title: "Web & design", iconSrc: "./assets/images/web-design.png" },
  { title: "Baby care", iconSrc: "./assets/images/blocks-child.png" },
];

const TaskCategories = () => {
  return (
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4 md:mt-6 lg:mt-8 px-2">
      {categories.map((item) => (
        <div
          class="flex flex-col items-center bg-slate-50 hover:bg-slate-100 p-2 rounded-lg shadow-md "
          key={item.title}
        >
          <img src={item.iconSrc} alt={item.title} class="w-12 h-12 mb-2 " />
          <div class="text-sm text-gray-800">{item.title}</div>
        </div>
      ))}
    </div>
  );
};

export default TaskCategories;
