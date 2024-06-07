import React, { useState, useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs";
import { GrNext, GrPrevious } from "react-icons/gr";
import ActionIcons from "../../Components/ActionIcons/ActionIcon"; 
import Button from "../../Components/buttons/Buttons.jsx";
import InputField from "../InputField/InputField.jsx";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [events, setEvents] = useState([]);
  const [newEventText, setNewEventText] = useState("");
  const [clickedDate, setClickedDate] = useState(null);
  const [editingEventId, setEditingEventId] = useState(null);
  const [editedEventName, setEditedEventName] = useState("");
  const [editedEventDate, setEditedEventDate] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:4041/api/GetEvents");
        const fetchedEvents = response.data.map((event) => ({
          ...event,
          date: dayjs(event.date),
        }));
        setEvents(fetchedEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setClickedDate(date);
  };

  const addEvent = async () => {
    if (newEventText && selectedDate) {
      const newEvent = {
        date: selectedDate,
        eventName: newEventText,
      };

      try {
        const response = await axios.post(
          "http://localhost:4041/api/AddEvents",
          newEvent
        );
        const savedEvent = {
          ...response.data,
          date: dayjs(response.data.date),
        };
        setEvents([...events, savedEvent]);
        setNewEventText("");
      } catch (error) {
        console.error("Error adding event:", error);
      }
    }
  };

  const deleteEvent = async (id) => {
    try {
      await axios.delete(`http://localhost:4041/api/deleteEvent/${id}`);
      setEvents(events.filter((event) => event._id !== id));
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  const startEditing = (id, currentName, currentDate) => {
    setEditingEventId(id);
    setEditedEventName(currentName);
    setEditedEventDate(currentDate.format("YYYY-MM-DD"));
  };

  const updateEvent = async (id, eventName, eventDate) => {
    try {
      const updatedEvent = {
        eventName,
        date: dayjs(eventDate),
      };
      await axios.put(`http://localhost:4041/api/updateEvent/${id}`, updatedEvent);

      const updatedEvents = events.map((event) =>
        event._id === id ? { ...event, eventName, date: dayjs(eventDate) } : event
      );
      setEvents(updatedEvents);

      setEditingEventId(null);
      setEditedEventName("");
      setEditedEventDate("");
    } catch (error) {
      console.error("Error updating event:", error);
    }
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
        events: eventsForDate.map((event) => event.eventName),
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
          <GrPrevious onClick={goToPreviousMonth} className="mt-2 mr-8 cursor-pointer" />
          <h1 className="text-md font-bold">
            {selectedDate.format("MMMM YYYY")}
          </h1>
          <GrNext onClick={goToNextMonth} className="mt-2 ml-8 cursor-pointer" />
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
          <InputField
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
            <li key={event._id} className="flex justify-between items-center">
              <div>
                {editingEventId === event._id ? (
                  <>
                    <InputField
                      type="date"
                      value={editedEventDate}
                      onChange={(e) => setEditedEventDate(e.target.value)}
                    />
                    <InputField
                      type="text"
                      value={editedEventName}
                      onChange={(e) => setEditedEventName(e.target.value)}
                    />
                  </>
                ) : (
                  <>
                    <div className="font-bold">
                      {event.date.format("MMMM D, YYYY")}
                    </div>
                    <div className="text-red-500">{event.eventName}</div>
                  </>
                )}
              </div>
              <div>
                {editingEventId === event._id ? (
                  <Button
                    onClick={() =>
                      updateEvent(event._id, editedEventName, editedEventDate)
                    }
                  >
                    Save
                  </Button>
                ) : (
                  <ActionIcons
                    onEditClick={() =>
                      startEditing(event._id, event.eventName, event.date)
                    }
                    onDeleteClick={() => deleteEvent(event._id)}
                  />
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Calendar;
