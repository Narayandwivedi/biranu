require('dotenv').config();
const mongoose = require('mongoose');
const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const createAdmin = async () => {
  try {
    // Connect to Database
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/biranu');
    console.log('Connected to MongoDB...');

    rl.question('Enter Admin Email: ', async (email) => {
      // Check if email is valid
      if (!email || !email.includes('@')) {
        console.error('Invalid email.');
        process.exit(1);
      }

      // Check if admin exists
      const existing = await Admin.findOne({ email: email.toLowerCase() });
      if (existing) {
        console.error('Admin with this email already exists.');
        process.exit(1);
      }

      rl.question('Enter Admin Password: ', async (password) => {
        if (!password || password.length < 6) {
          console.error('Password must be at least 6 characters.');
          process.exit(1);
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newAdmin = new Admin({
          email: email.toLowerCase(),
          password: hashedPassword
        });

        await newAdmin.save();
        console.log(`\nSuccess! Admin created with email: ${email}`);

        await mongoose.connection.close();
        rl.close();
        process.exit(0);
      });
    });
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
};

createAdmin();
