import mysql from "mysql2";

const Pool = mysql.createPool({
    host: "",
    port: 3306,
    user: "",
    password: "",
    database: "",
    ssl: {}
});

export default Pool;