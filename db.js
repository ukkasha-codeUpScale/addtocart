const sqlite3 = require('sqlite3').verbose();

const dbPath = './database.db'; // Path to your SQLite database file
const db = new sqlite3.Database(dbPath);

db.serialize(() => {
 // Create a table if it doesn't exist
 db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    username TEXT,
    email TEXT
  )`);

  // Insert some initial data
  const initialData = [
    { username: 'user1', email: 'user1@example.com' },
    { username: 'user2', email: 'user2@example.com' },
  ];

  const insertStmt = db.prepare('INSERT INTO users (username, email) VALUES (?, ?)');
  initialData.forEach((data) => {
    insertStmt.run(data.username, data.email);
  });
  insertStmt.finalize();

    // Create and configure your database tables if needed
});

module.exports = db;
