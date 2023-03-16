const EventsController = require('../controllers/events.controller');

module.exports = (app) => {
    app.get('/api', EventsController.index);
    app.post('/api/events', EventsController.createEvents);
    app.get('/api/events', EventsController.getAllEvents);
    app.get('/api/events/:id', EventsController.getEvents);
    app.put('/api/events/:id', EventsController.updateEvents);
    app.delete('/api/events/:id', EventsController.deleteEvents);
};