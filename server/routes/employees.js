const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Employee = require('../models/Employee');
const mongoose = require('mongoose');

// GET /api/employees - list all employees for the user
router.get('/', auth, async (req, res) => {
  try {
    const employees = await Employee.find({ createdBy: req.user.id }).sort({ createdAt: -1 });
    res.json(employees);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// POST /api/employees - create
router.post('/', auth, async (req, res) => {
  try {
    const { name, position, department, salary } = req.body;
    if (!name) return res.status(400).json({ message: 'Name is required' });
    const emp = new Employee({ name, position, department, salary, createdBy: req.user.id });
    await emp.save();
    res.json(emp);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// GET /api/employees/:id
router.get('/:id', auth, async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) return res.status(400).json({ message: 'Invalid employee id' });
    const emp = await Employee.findById(req.params.id);
    if (!emp) return res.status(404).json({ message: 'Employee not found' });
    if (emp.createdBy.toString() !== req.user.id) return res.status(403).json({ message: 'Not authorized' });
    res.json(emp);
  } catch (err) {
    console.error('GET /api/employees/:id error:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// PUT /api/employees/:id
router.put('/:id', auth, async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) return res.status(400).json({ message: 'Invalid employee id' });
    const emp = await Employee.findById(req.params.id);
    if (!emp) return res.status(404).json({ message: 'Employee not found' });
    if (emp.createdBy.toString() !== req.user.id) return res.status(403).json({ message: 'Not authorized' });

    const { name, position, department, salary } = req.body;
    emp.name = name ?? emp.name;
    emp.position = position ?? emp.position;
    emp.department = department ?? emp.department;
    emp.salary = salary ?? emp.salary;
    await emp.save();
    res.json(emp);
  } catch (err) {
    console.error('PUT /api/employees/:id error:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// DELETE /api/employees/:id
router.delete('/:id', auth, async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) return res.status(400).json({ message: 'Invalid employee id' });
    const emp = await Employee.findById(req.params.id);
    if (!emp) return res.status(404).json({ message: 'Employee not found' });
    if (emp.createdBy.toString() !== req.user.id) return res.status(403).json({ message: 'Not authorized' });
    await emp.deleteOne();
    res.json({ message: 'Employee removed' });
  } catch (err) {
    console.error('DELETE /api/employees/:id error:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;
