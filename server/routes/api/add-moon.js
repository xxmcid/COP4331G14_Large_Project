const express = require('express');
const Planet = require("../../models/Planet");
const SolarSystems = require("../../models/SolarSystem");
const jwt = require("../../resources/jwt");

// Initialize express
const app = express();

// Add Moon:
// Creates a new moon.
app.post('/', async function (req, res) {
    // Validate the client's session.
    let token = req.body.token;
    if (!jwt.checkValidity(token) || jwt.getTokenType(token) != jwt.TokenTypes.ClientSession)
        return res.status(498).json({
            status: "failed",
            error: "Invalid token"
        });

    // Create a new Planet document from the request body arguments.
    let moon = new Planet({
        name: req.body.moon.name,
        mass: req.body.moon.mass,
        gravitationalPull: req.body.moon.gravitationalPull,
        distance: req.body.moon.distance,
        color: req.body.moon.color,
    });

    // Gather IDs from the request body arguments.
    let solarSystemID = req.body.solarSystemID;
    let planetID = req.body.planetID;

    // Find documents from the database.
    let solarSystem = await SolarSystems.findById(solarSystemID);
    let planet = solarSystem.planets.find(x => x._id == planetID);

    // Add moon to moons array.
    planet.moons.push(moon);
    
    // Save the new moon to the database.
    await solarSystem
        .save()
        .then(() => {    
            // Return status code 201 (succesful and new resource was created).
            return res.status(201).json({
                "status": "success",
                "error": ""
            });
        })
        .catch(err => {
            return res.status(400).json({
                "status": "failed",
                "error": err
            });
        }
    );    
});

module.exports = app;