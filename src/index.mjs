import express from 'express';

const app = express();

const PORT = 4000;

let users = [
  {
    id: 1,
    name: 'Venti',
    email: 'ventitheanemoarchon@gmail.com',
    password: 'windguideyou',
  },
  {
    id: 2,
    name: 'Mona',
    email: 'monamegistus@gmail.com',
    password: 'hydro',
  },
];

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get('/users', (req, res) => {
  res.send(users);
});

app.get('/users/:id', (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) return res.status(400).send('Invalid ID');

  const find_user = users.find((user) => user.id === id);

  if (find_user) return res.send(find_user);
  return res.sendStatus(404);
});
