import express from 'express';

const app = express();

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get('/users', (req, res) => {
  let users = [
    {
      name: 'Venti',
      email: 'ventitheanemoarchon@gmail.com',
      password: 'windguideyou',
    },
    {
      name: 'Mona',
      email: 'monamegistus@gmail.com',
      password: 'hydro',
    },
  ];
  res.send(users[1]);
});
