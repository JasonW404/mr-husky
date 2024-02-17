import mysql from 'mysql2/promise'; // Import the MySQL client library

async function connect2mysql () {
  // Database connection configuration
  const conn = await mysql.createConnection({
    host: 'localhost',
    user: 'pere_d_husky',
    password: 'Hu!sky_666',
    database: 'husky',
  }); // Initialize the connection

  return conn;
}

export async function getChatHistory() {
  const conn = await connect2mysql();
  const [rows, fields] = await conn.query('SELECT * FROM topics');
  
  return rows, fields;
}
