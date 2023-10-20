

module.exports = {
    database: {
      username: process.env.DB_USERNAME || "your_database_username",
      password: process.env.DB_PASSWORD || "your_database_password",
      database: process.env.DB_NAME || "your_database_name",
      host: process.env.DB_HOST || "localhost",
      dialect: "mysql", 
    },
  
    session: {
      secret: process.env.SESSION_SECRET || "your_session_secret_here",
    },
  };
  