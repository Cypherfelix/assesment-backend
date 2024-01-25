const express = require('express');
const Model = require('../models/movie');

const router = express.Router();


router.get('/savedMovies', async (req, res) => {
    try {

        const data = await Model.find();
        res.json(data);
    } catch (e) {
        res.status(500).json({error: e.message})
    }

})

router.post('/movie', async (req, res) => {
    console.log(req.body)


    if (req.body?.name) {
        const {name} = req.body;
        const data = new Model({
            name: name
        });

        try {
            const movie = await data.save();

            console.log(movie);

            res.status(201).json({
                data: movie._id
            })

        } catch (e) {
            res.status(500).json({error: e.message})
        }
    } else {
        res.send("Invalid input");
    }


})

router.put('/watchMovie/:id', async (req, res) => {
    if (req.params.id) {
        try {
            const id = req.params.id;
            const result = await Model.findByIdAndUpdate(id, {
                watched: true
            }, {
                new: true
            });

            res.send("Successfully updated");
        } catch (e) {
            res.status(500).json({error: e.message})
        }
    } else {
        res.send("Id is required");
    }
})

module.exports = router;