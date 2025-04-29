const Area = require('../model/area');

// Create Area
exports.createArea = async (req, res) => {
  try {
    const { name, city, state, postalCode } = req.body;

    // Check if area already exists
    const existingArea = await Area.findOne({ name });
    if (existingArea) {
      return res.status(400).json({ message: 'Area already exists' });
    }

    const area = new Area({ name, city, state, postalCode });
    await area.save();

    res.status(201).json({ message: 'Area created successfully', area });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get All Areas
exports.getAllAreas = async (req, res) => {
  try {
    const areas = await Area.find().sort({ name: 1 });
    res.json(areas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update Area
exports.updateArea = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, city, state, postalCode } = req.body;

    const area = await Area.findByIdAndUpdate(id, { name, city, state, postalCode }, { new: true });

    if (!area) {
      return res.status(404).json({ message: 'Area not found' });
    }

    res.json({ message: 'Area updated successfully', area });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete Area
exports.deleteArea = async (req, res) => {
  try {
    const { id } = req.params;

    const area = await Area.findByIdAndDelete(id);

    if (!area) {
      return res.status(404).json({ message: 'Area not found' });
    }

    res.json({ message: 'Area deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
