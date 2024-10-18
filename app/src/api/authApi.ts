import axiosInstance from "./axiosClients";

const authApi = {
    // login: (data: unknown) => {
    //     const url = "/auth/login";
    //     return axiosInstance.post(url, data);
    // },
    loginFB: (accessToken: string) => {
        const url = "/auth/facebook";
        return axiosInstance.get(url, {
            params: {
                access_token: accessToken
            }
        });
    },
};

export default authApi;