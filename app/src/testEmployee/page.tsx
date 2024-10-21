"use client";
import React, { useEffect, useState } from "react";
import MButton from "../components/config/Mbutton";

const YourComponent = () => {
  const [data, setData] = useState<unknown[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const fetchData = async (type: string) => {
    try {
      const response = await fetch(`/src/api/get?type=${type}`);

      if (!response.ok) {
        throw new Error("Có lỗi xảy ra khi lấy dữ liệu");
      }

      const result = await response.json();
      setData(result.data);
    } catch (error) {
      console.error(error);
      setError("Có lỗi xảy ra khi lấy dữ liệu");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData("employee");
  }, []);

  if (loading) return <div>Đang tải dữ liệu...</div>;
  if (error) return <div>Lỗi: {error}</div>;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newUser = {
      type: "employee",
      data: {
        name,
        email,
        phone,
      },
    };

    try {
      const res = await fetch(`/src/api/add?type=employee`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      console.log("Response status:", res.status);
      if (res.ok) {
        await fetchData("employee");
        setName("");
        setEmail("");
        setPhone("");
      } else {
        console.error("Có lỗi xảy ra khi thêm employee");
      }
    } catch (error) {
      console.error("Có lỗi xảy ra khi thêm employee:", error);
    }
  };

  // const handleButtonEdit = () => {}

  return (
    <div>
      <h1>Dữ liệu:</h1>
      <ul>
        {data.map((item, index) => (
          <div key={index}>
            <li>{JSON.stringify(item)}</li>
            <MButton
              type="secondary"
              text="Sửa"
              htmlType="submit"
              loading={loading}
            />
            <MButton
              type="secondary"
              text="Xóa"
              htmlType="submit"
              loading={loading}
            />
          </div>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tên"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="SĐT"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <MButton
          type="secondary"
          text="Thêm mới"
          htmlType="submit"
          loading={loading}
          disabled={loading}
        />
      </form>
    </div>
  );
};

export default YourComponent;
