import React from "react";
import { PiChalkboardTeacherLight, PiStudentDuotone } from "react-icons/pi";
import { IoPeopleOutline } from "react-icons/io5";

const Boxes = () => {
  return (
    <div>
      <section className="body-font -mt-16 text-white text-2xl">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 xl:w-1/4 lg:w-1/4 md:w-full sm:w-full flex-grow">
              <div className="flex border-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                <div className="sm:mr-8 sm:mb-0 mb-4 inline-flex  rounded-full flex-shrink-0">
                  <PiChalkboardTeacherLight />
                </div>
                <div className="flex-grow">
                  <h2 className=" text-md title-font font-medium mb-3">
                    Teachers
                  </h2>
                  <p className="leading-relaxed text-base">12</p>
                </div>
              </div>
            </div>

            <div className="p-4 xl:w-1/4 lg:w-1/4 md:w-full sm:w-full flex-grow">
              <div className="flex border-2 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500 border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                <div className="sm:mr-8 sm:mb-0 mb-4 inline-flex  rounded-full flex-shrink-0">
                  <PiStudentDuotone />
                </div>
                <div className="flex-grow">
                  <h2 className=" text-md title-font font-medium mb-3">
                    Students
                  </h2>
                  <p className="leading-relaxed text-base">12</p>
                </div>
              </div>
            </div>
            <div className="p-4 xl:w-1/4 lg:w-1/4 md:w-full sm:w-full flex-grow">
              <div className="flex border-2 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                <div className="sm:mr-8 sm:mb-0 mb-4 inline-flex  rounded-full flex-shrink-0">
                  <IoPeopleOutline />
                </div>
                <div className="flex-grow">
                  <h2 className=" text-md title-font font-medium mb-3">
                    Courses
                  </h2>
                  <p className="leading-relaxed text-base">12</p>
                </div>
              </div>
            </div>

            <div className="p-4 xl:w-1/4 lg:w-1/4 md:w-full sm:w-full flex-grow">
              <div className="flex border-2 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                <div className="sm:mr-8 sm:mb-0 mb-4 inline-flex  rounded-full flex-shrink-0">
                  <PiChalkboardTeacherLight />
                </div>
                <div className="flex-grow">
                  <h2 className=" text-md title-font font-medium mb-3">
                    Revenue
                  </h2>
                  <p className="leading-relaxed text-base">$ 120</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Boxes;
