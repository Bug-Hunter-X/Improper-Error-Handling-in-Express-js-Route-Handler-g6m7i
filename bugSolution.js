const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  db.getUser(userId, (err, user) => {
    if (err) {
      console.error(err); 
      // Send more informative error responses based on the error type
      if (err.code === 'USER_NOT_FOUND') {
        return res.status(404).json({ error: 'User not found' });
      } else {
        return res.status(500).json({ error: 'Failed to retrieve user' });
      }
    } else {
      res.json(user);
    }
  });
});
//Example centralized error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});