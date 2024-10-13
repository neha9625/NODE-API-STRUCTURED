import Pool from "./Database.js";

const execute = (Query, BindValues) => {
    return new Promise((resolve, reject) => {
        Pool.query(Query, BindValues, (err, result) => {
            if (err) {
                return reject(err)
            }
            resolve(result)
        })
    })
};

export default execute;