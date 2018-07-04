module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_DATABASE || 'pokemonhq',
    username: process.env.DB_USERNAME || 'tommybaloukas123',
    password: process.env.DB_PASSWORD || 'pokemonhq_1234567890'
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
};
