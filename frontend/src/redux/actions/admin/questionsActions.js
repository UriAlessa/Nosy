
import axios from "axios";

const questionActions = {
    getQuestions: () => {
        return async () => {
            let response = await axios.get(
                "http://localhost:4000/api/admin/questions"
            );
            return response;
        };
    },
};
export default questionActions;
