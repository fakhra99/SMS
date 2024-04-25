import React, { useState } from "react";
import dayjs from "dayjs";
import { GrNext, GrPrevious } from "react-icons/gr";
import Button from "../../Components/buttons/Buttons.jsx.jsx";
import Input_Field from "../../Components/Input_Field/Input_Field.jsx";
import { v4 as uuidv4 } from "uuid";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [events, setEvents] = useState([]);
  const [newEventText, setNewEventText] = useState("");
  const [clickedDate, setClickedDate] = useState(null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setClickedDate(date);
  };

  const addEvent = () => {
    if (newEventText && selectedDate) {
      const newEvent = {
        id: uuidv4(),
        date: selectedDate,
        text: newEventText,
        color: getRandomColor(),
      };
      setEvents([...events, newEvent]);
      setNewEventText("");
    }
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const generateDates = () => {
    const firstDateOfMonth = selectedDate.startOf("month");
    const lastDateOfMonth = selectedDate.endOf("month");

    const arrayOfDate = [];

    for (let i = 0; i < firstDateOfMonth.day(); i++) {
      const date = firstDateOfMonth.subtract(i + 1, "day");

      arrayOfDate.push({
        currentMonth: false,
        date,
        events: [],
      });
    }

    for (let i = 1; i <= lastDateOfMonth.date(); i++) {
      const date = firstDateOfMonth.date(i);
      const eventsForDate = events.filter((event) =>
        event.date.isSame(date, "day")
      );
      const hasEvent = eventsForDate.length > 0;
      arrayOfDate.push({
        currentMonth: true,
        date,
        today: date.isSame(dayjs(), "day"),
        hasEvent,
        events: eventsForDate.map((event) => event.text),
      });
    }

    const remaining = 42 - arrayOfDate.length;

    for (let i = 1; i <= remaining; i++) {
      const date = lastDateOfMonth.add(i, "day");
      arrayOfDate.push({
        currentMonth: false,
        date,
        events: [],
      });
    }

    return arrayOfDate;
  };

  const goToPreviousMonth = () => {
    setSelectedDate(selectedDate.subtract(1, "month"));
  };

  const goToNextMonth = () => {
    setSelectedDate(selectedDate.add(1, "month"));
  };

  return (
    <div className="flex flex-col md:flex-row md:space-x-4 p-4 md:p-6 bg-slate-100">
      <div className="w-full md:w-1/2 bg-white">
        <div className="flex justify-center mb-5 bg-customBlue text-white">
          <GrPrevious onClick={goToPreviousMonth} className="mt-2 mr-8" />
          <h1 className="text-md font-bold">
            {selectedDate.format("MMMM YYYY")}
          </h1>
          <GrNext onClick={goToNextMonth} className="mt-2 ml-8" />
        </div>
        <div className="grid grid-cols-7 gap-1">
          {generateDates().map((day) => (
            <div
              key={day.date.format("YYYY-MM-DD")}
              className={`cursor-pointer p-2 border ${
                day.currentMonth ? "" : "text-gray-400"
              } ${day.today ? "bg-gray-200" : ""} ${
                day.hasEvent ? "bg-blue-200" : ""
              } ${
                clickedDate && day.date.isSame(clickedDate, "day")
                  ? "bg-customBlue text-white"
                  : ""
              }`}
              onClick={() => handleDateClick(day.date)}
            >
              <div>{day.date.format("D")}</div>
              {day.hasEvent && (
                <div className="text-sm">
                  <ul>
                    {day.events.map((event, index) => (
                      <li key={index}>{event}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-4 flex">
          {/* <input
            type="text"
            value={newEventText}
            onChange={(e) => setNewEventText(e.target.value)}
            placeholder="Add event..."
            className="border border-gray-300 rounded-md py-1 px-2"
          /> */}
          <Input_Field
            type="text"
            value={newEventText}
            onChange={(e) => setNewEventText(e.target.value)}
            placeholder="Add event"
          />

          <Button onClick={addEvent} className="w-1/2 -ml-6">
            Add Event
          </Button>
        </div>
      </div>
      <div className="w-full md:w-2/3 p-4 mt-4 md:mt-0">
        <h2 className="text-xl font-semibold mb-2">Events</h2>
        <ul>
          {events.map((event) => (
            <li key={event.id}>
              <div className="font-bold">
                {event.date.format("MMMM D, YYYY")}
              </div>
              <div className="text-red-500">{event.text}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Calendar;
