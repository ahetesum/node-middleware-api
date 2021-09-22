module.exports = {
    HOST: "134.209.152.10",
    USER: "bcdev1",
    PASSWORD: "bcDev1!@#",
    DB: "testdb",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };