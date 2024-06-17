const mongoose = require('mongoose');
const User = require('./models/User');
const Thought = require('./models/Thought');

mongoose.connect('mongodb://127.0.0.1:27017/socialnetwork', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedUsers = [
  {
    username: 'john_doe',
    email: 'john_doe@example.com',
  },
  {
    username: 'jane_doe',
    email: 'jane_doe@example.com',
  },
];

const seedThoughts = [
  {
    thoughtText: 'This is a thought from John',
    username: 'john_doe',
    userId: null, // This will be updated later
  },
  {
    thoughtText: 'This is a thought from Jane',
    username: 'jane_doe',
    userId: null, // This will be updated later
  },
];

async function seedDB() {
  await User.deleteMany({});
  await Thought.deleteMany({});

  const users = await User.insertMany(seedUsers);

  seedThoughts[0].userId = users[0]._id;
  seedThoughts[1].userId = users[1]._id;

  const thoughts = await Thought.insertMany(seedThoughts);

  await User.findByIdAndUpdate(users[0]._id, { $push: { thoughts: thoughts[0]._id } });
  await User.findByIdAndUpdate(users[1]._id, { $push: { thoughts: thoughts[1]._id } });

  console.log('Database seeded!');
  mongoose.connection.close();
}

seedDB().catch((err) => {
  console.error(err);
  mongoose.connection.close();
});
