import UserService from "./Service.js";

const UserController = {
    getUserDetailsById: async (response, request, next) => {
        try {
            const result = await UserService.getUserDetailsById(request.req);
            response.res.json(result);
        } catch (e) {
            next(e)
        }
    }
};

export default UserController;