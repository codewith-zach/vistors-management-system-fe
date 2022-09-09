const getToken = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
        return user.token;
    }
}

const Util = {
    getToken
}

export default Util;