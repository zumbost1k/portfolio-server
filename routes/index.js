const Router = require('express');
const router = new Router();
const projectRouter = require('./projectRouter');
const emailRouter = require('./emailRouter');
const newsRouter = require('./newsRouter');

router.use('/project', projectRouter);
router.use('/email', emailRouter);
router.use('/news', newsRouter);

module.exports = router;
