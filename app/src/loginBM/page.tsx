"use client";
import { Button } from "antd";
import React from "react";
import { FacebookOutlined, RollbackOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useFacebookSDK } from "../hooks/useFacebook";

function LoginBm() {
  const { loginWithFacebook } = useFacebookSDK();


  const router = useRouter();
  const handleLogin = () => {
    router.push("/");
  };

  return (
    <div className="flex justify-center items-center flex-col">
       {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/image/login.png" alt="#" width={400} height={400} />
      <div className="flex justify-center">
        <Button onClick={handleLogin} size="large" icon={<RollbackOutlined />}>
          Login Admin
        </Button>
        <div className="w-3" />
        <Button
          size="large"
          icon={<FacebookOutlined />}
          onClick={loginWithFacebook}
          type="primary"
        >
          Login BM
        </Button>
      </div>
    </div>
  );
}
export default LoginBm;
