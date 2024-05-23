import Event from "../Model/calendar.model.js"

export const getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addEvent = async (req, res) => {
  const { date, eventName } = req.body;
  const newEvent = new Event({
    date,
    eventName
  });

  try {
    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
