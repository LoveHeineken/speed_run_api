const express = require('express');
const monk = require('monk');
const db = monk(process.env.MONGO_URI);
const faqs = db.get(faqs);

const router = express.Router();

// READ ALL
router.get('/', async (req, res, next) => {
    try {
        const items = await faqs.find({});
        res.json(items);
    } catch (error) {
        next(error);
    }

});

// READ ONE
router.get('/:id', (req, res, next) => {
    res.json({
        message: 'Hello READ One'
    });
});

// Create One
router.post('/', (req, res, next) => {
    res.json({
        message: 'Hello Create one',
    });
});

// Update One
router.put('/:id', (req, res, next) => {
    res.json({
        message: 'Hello Update one',
    });
});

// Delete One
router.delete('/:id', (req, res, next) => {
    res.json({
        message: 'Hello Delete one',
    });
});

module.exports = router;