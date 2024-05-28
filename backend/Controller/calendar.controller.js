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

export const updateEvent = async (req, res) => {
  const { id } = req.params;
  const { date, eventName } = req.body;

  try {
    // Find the event by id and update it with the new data
    // { new: true } returns the updated document
    const updatedEvent = await Event.findByIdAndUpdate(id, { date, eventName }, { new: true });
    
    if (!updatedEvent) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.json(updatedEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteEvent = async (req, res) => {
  const { id } = req.params;

  try {
    // This method directly removes the document without needing to fetch it first
    const result = await Event.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
