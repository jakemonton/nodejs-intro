const express = require('express');
const { Level } = require('level');

// Instantiate express app.
const app = express();

app.use(express.json());

// Set static port value.
const port = 3000;

// Create a database.
const db = new Level('db', { valueEncoding: 'json' });

// Get all users.
app.get('/users', async (req, res) => {
  const users = await db.getMany(['1']);

  res.send(JSON.parse(users));
});

// Get user.
app.get('/users/:userId', async (req, res) => {
  const userId = req.params.userId;
  const user = await db.get(userId);

  res.send(JSON.parse(user));
});

app.post('/users', async (req, res) => {
  const user = JSON.stringify(req.body);

  await db.put('2', user);
    res.send({
      message: 'User added!'
    });
})

app.put('/users/:userId', async (req, res) => {
  const userId = req.params.userId;

  // Get data.
  const user = JSON.stringify(req.body);

  await db.put(userId, user);
    res.send({
      message: 'User updated!'
    });
});

app.delete('/users/:userId', async (req, res) => {
  const params = req.params;
  console.log(params);

  await db.del(params.userId, () => {
    console.log("user deleted");
  });
  
  res.send({
    message: 'User deleted!'
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});