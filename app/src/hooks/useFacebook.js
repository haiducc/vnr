import { useEffect } from "react";

export const useFacebookSDK = () => {
  useEffect(() => {
    if (!document.getElementById('facebook-jssdk')) {
      window.fbAsyncInit = () => {
        window.FB.init({
          appId: '1040182517579604',
          cookie: true,
          xfbml: true,
          version: 'v10.0',
        });
      };

      const js = document.createElement('script');
      js.id = 'facebook-jssdk';
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      document.body.appendChild(js);
    }
  }, []);

  const loginWithFacebook = () => {
    window.FB.login((response) => {
      // Xử lý phản hồi
      console.log(response);
      
    }, {scope: 'public_profile,email'});
  };

  const getUserInfo = () => {
    window.FB.api('/me', {fields: 'name,email,picture'}, (response) => {
      // Xử lý thông tin người dùng
      console.log(response);
    });
  };

  return { loginWithFacebook, getUserInfo };
};
