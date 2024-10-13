import execute from "../Database/QueryWrapper.js";

const UserService = {
    getUserDetailsById: async (req) => {
        const { id } = req.query;
        const query = `select * from users where id = ?`;
        const result = await execute(query, [id]);
        if (result) {
            return { success: true, data: result }
        }
        return { success: false, data: "Error to fetch user details" }
    }
};

export default UserService;