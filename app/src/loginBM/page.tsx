"use client";
import { Button, Spin } from "antd";
import React, { useState } from "react";
import { FacebookOutlined, RollbackOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useFacebookSDK } from "../hooks/useFacebook";

function LoginBm() {
  const { loginWithFacebook } = useFacebookSDK();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();
  const handleLogin = () => {
    setIsLoading(true);
    router.push("/");
    console.log("âaaaaaaaa");
  };

  return (
    <>
      <div className="flex justify-center items-center flex-col">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/image/login.png" alt="#" width={400} height={400} />
        <div className="flex justify-center">
          <Button
            onClick={handleLogin}
            size="large"
            icon={<RollbackOutlined />}
          >
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
      <Spin spinning={isLoading} fullscreen />
    </>
  );
}
export default LoginBm;
