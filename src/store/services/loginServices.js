import Axios from 'axios';

export class LoginServices {
    loginUser(data) {
        return Axios.post("/auth/sign-in", data);
    }
    registerUser(data) {
        return Axios.post("/auth/sign-up", data);
    }
    sendEmailForgetPassword(data) {
        return Axios.post("/auth/forget-password", data);
    }
    updatePassword(userId, token, newPassword) {
        return Axios.post(`/auth/reset-password/${userId}/${token}`, { newPassword });
    }
    getGoogleUser() {
        return Axios.get("/auth/google/me", {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    };
    getGoogleUrl() {
        return Axios.get("/auth/google/url");
    }
}