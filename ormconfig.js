if(process.env.NODE_ENV === "production") {
  module.exports = {
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    "migrations": ["./dist/database/migrations/*.ts"],
    "entities": ["./dist/entities/*.ts"],
    "cli": {
      "migrationsDir": "./src/database/migrations",
      "entitiesDir": "./src/entities"
    }
  }
} else {
  module.exports = {
    "type": "sqlite",
    "database": "./src/database/database.sqlite",
    "migrations": ["./src/database/migrations/*.ts"],
    "entities": ["./src/entities/*.ts"],
    "cli": {
      "migrationsDir": "./src/database/migrations",
      "entitiesDir": "./src/entities"
    }
  }
}
 