import React from "react";
import InfoBox from "../../Components/InfoBox/InfoBox"; // Make sure the path is correct
import { PiChalkboardTeacherLight, PiStudentDuotone } from "react-icons/pi";
import { IoPeopleOutline } from "react-icons/io5";

const Boxes = () => {
  return (
    <div>
      <section className="body-font -mt-16 text-white text-2xl bg-slate-100">
        <div className="container px-5 py-24 mx-auto grid justify-items-stretch flex-wrap">
          <div className="flex flex-wrap -m-4 bg-white">
            {/* Use the InfoBox component with different props for each box */}
            <InfoBox
              Icon={PiChalkboardTeacherLight}
              bgColor="bg-orange-500"
              title="Teachers"
              content="12"
            />
            <InfoBox
              Icon={PiStudentDuotone}
              bgColor="bg-purple-500"
              title="Students"
              content="12"
            />
            <InfoBox
              Icon={IoPeopleOutline}
              bgColor="bg-red-600"
              title="Courses"
              content="12"
            />
            <InfoBox
              Icon={PiChalkboardTeacherLight}
              bgColor="bg-green-600"
              title="Revenue"
              content="$ 120"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Boxes;
