import React, { useState } from "react";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [events, setEvents] = useState([]);
  const [newEventText, setNewEventText] = useState("");

  const handleDateClick = (date) => {
    setSelectedDate(date);
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
       events: [], // Initialize events array as empty
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
       events: [], // Initialize events array as empty
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
    <div className="flex ">
      <div className="container bg-amber-200 border-blue-950 w-1/2 ">
        <div className="flex justify-center mb-5">
          <button
            onClick={goToPreviousMonth}
            className="ml-2 px-3 py-1 bg-green-400 text-white rounded-md"
          >
            Previous Month
          </button>
          <h1 className="text-3xl font-semibold">
            {selectedDate.format("MMMM YYYY")}
          </h1>
          <button
            onClick={goToNextMonth}
            className="ml-2 px-3 py-1 bg-green-400 text-white rounded-md"
          >
            Next Month
          </button>
        </div>
        <div className="grid grid-cols-7 gap-1">
          <div className="text-center text-gray-600">Sun</div>
          <div className="text-center text-gray-600">Mon</div>
          <div className="text-center text-gray-600">Tue</div>
          <div className="text-center text-gray-600">Wed</div>
          <div className="text-center text-gray-600">Thu</div>
          <div className="text-center text-gray-600">Fri</div>
          <div className="text-center text-gray-600">Sat</div>
          {generateDates().map((day) => (
            <div
              key={day.date.format("YYYY-MM-DD")}
              className={`cursor-pointer p-2 border ${
                day.currentMonth ? "" : "text-gray-400"
              } ${day.today ? "bg-gray-200" : ""} ${
                day.hasEvent ? "bg-blue-200" : ""
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
        <div className="mt-4">
          <input
            type="text"
            value={newEventText}
            onChange={(e) => setNewEventText(e.target.value)}
            placeholder="Add event..."
            className="border border-gray-300 rounded-md py-1 px-2"
          />
          <button
            onClick={addEvent}
            className="ml-2 px-3 py-1 bg-green-400 text-white rounded-md"
          >
            Add Event
          </button>
        </div>
      </div>
      <div className="w-1/2 bg-gray-300 p-4">
        <h2 className="text-xl font-semibold mb-2">
          Events 
        </h2>
        <ul>
          {events.map((event) => (
            <li key={event.id}>
              <div className="font-bold ">
                {event.date.format("MMMM D, YYYY")}
              </div>
              <div className=" text-red-500">{event.text}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Calendar;
