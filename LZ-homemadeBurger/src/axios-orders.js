import axios from "axios";

const instance = axios.create({
    baseURL: "https://react-my-burger-c5b24.firebaseio.com/"
});

export default instance;