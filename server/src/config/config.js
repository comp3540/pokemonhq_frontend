module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_DATABASE || 'pokemonhq',
    username: process.env.DB_USERNAME || 'pokemonhq',
    password: process.env.DB_PASSWORD || 'pokemonhq',
    options: {
      dialect: process.env.DB_DIALECT || 'sqlite',
      host: process.env.DB_HOST || 'localhost',
      storage: './pokemonhq.sqlite'
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
