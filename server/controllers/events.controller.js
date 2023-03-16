const Events = require('../models/events.model');  

module.exports.index = (request, response) => { 
    response.json({ 
        message: "Hello World"
    });
}

module.exports.createEvents = (request, response) => {
    Events.create(request.body) 
        .then(events => response.json(events))
        .catch(err => response.json(err));
};

module.exports.getAllEvents = (request, response) => {
    Events.find({})
        .then(events => {
            console.log(events); 
            response.json(events);
        })
        .catch(err => {
            console.log(err)
            response.json(err)
        })
};

module.exports.getEvents = (request, response) => {
    Events.findOne({_id:request.params.id})
        .then(events => response.json(events))
        .catch(err => response.json(err));
}

module.exports.updateEvents = (request, response) => {
    Events.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedEvents => response.json(updatedEvents))
        .catch(err => response.json(err))
}

module.exports.deleteEvents = (request, response) => {
    Events.deleteOne({ _id: request.params.id }) //note: "id" here MUST match id in corresponding route
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}