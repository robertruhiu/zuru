import express from 'express';

const router = express.Router();

/* login page */
router.get('/login', (req, res) => {
  res.render('login');
});

export default router;
