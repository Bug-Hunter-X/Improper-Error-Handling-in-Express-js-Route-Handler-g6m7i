const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  db.getUser(userId, (err, user) => {
    if (err) {
      //Should send an appropriate error response
      console.error(err); // Logs the error, but doesn't handle it gracefully
      res.status(500).send('Internal Server Error');
    } else {
      res.json(user);
    }
  });
});