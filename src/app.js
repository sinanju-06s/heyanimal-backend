const expres = require('express');
const router = require('./router');

const app = expres();
app.use(expres.json());
app.use(expres.urlencoded({ extended: true }));
app.use(router);

module.exports = app;
