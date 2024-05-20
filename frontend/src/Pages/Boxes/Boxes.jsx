import React, { useEffect, useState } from "react";
import InfoBox from "../../Components/InfoBox/InfoBox";
import { PiChalkboardTeacherLight, PiStudentDuotone } from "react-icons/pi";
import { IoPeopleOutline } from "react-icons/io5";
import axios from "axios";

const Boxes = () => {
  const [teacherCount, setTeacherCount] = useState(0);
  const [courseCount, setCourseCount] = useState(0);
  const [studentCount, setStudentCount] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const teacherResponse = await axios.get(
          "http://localhost:4041/api/countTeachers"
        ); 
        setTeacherCount(teacherResponse.data.count);

        const courseResponse = await axios.get(
          "http://localhost:4041/api/countCourses"
        ); 
        setCourseCount(courseResponse.data.count);

        const studentResponse = await axios.get(
          "http://localhost:4041/api/countStudents"
        ); 
        setStudentCount(studentResponse.data.count);
      } catch (error) {
        console.error("Error fetching counts:", error);
      }
    };

    fetchCounts();
  }, []);

  return (
    <div>
      <section className="body-font -mt-16 text-white text-2xl bg-slate-100">
        <div className="container px-5 py-24 mx-auto grid justify-items-stretch flex-wrap">
          <div className="flex flex-wrap -m-4 bg-white">
            <InfoBox
              Icon={PiChalkboardTeacherLight}
              bgColor="bg-orange-500"
              title="Teachers"
              content={teacherCount.toString()}
            />
            <InfoBox
              Icon={PiStudentDuotone}
              bgColor="bg-purple-500"
              title="Students"
              content={studentCount.toString()}
            />
            <InfoBox
              Icon={IoPeopleOutline}
              bgColor="bg-red-600"
              title="Courses"
              content={courseCount.toString()}
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
