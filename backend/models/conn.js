// --------  imports and data
const { Sequelize } = require('sequelize');


// --------  DB connection config
const sequelize = new Sequelize("ticketing_99yi", "woodum", "LCD4Hl33XPq0cqDzmp8OtnqSfrcBcbM2", {
    host: "dpg-ckedridtj22c73dfb7h0-a",
    dialect: "postgres", 
    dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
});


// ---------  connection test
async function testConnection() {
    try{
        await sequelize.authenticate();
        console.log("connection established");
        return true;
    } catch(error) {
        console.error("connection failed", error);
        return false;
    }
};


//------------  exports
module.exports = {sequelize, testConnection};
