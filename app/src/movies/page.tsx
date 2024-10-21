"use client";
import { useEffect, useState } from "react";

interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
}

const Movies = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Hàm lấy dữ liệu từ API
  const fetchData = async (type: string) => {
    try {
      const response = await fetch(`/api/get?type=${type}`);
      const data = await response.json();
      setUsers(data.data); // Giả sử response có dạng { data: [...] }
    } catch (error) {
      console.error("Có lỗi xảy ra khi lấy dữ liệu:", error);
    }
  };

  // Xử lý gửi yêu cầu POST
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newUser = {
      name,
      email,
      password,
    };

    try {
      const res = await fetch(`/api/add?type=users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      console.log("Response status:", res.status);
      if (res.ok) {
        const addedUser = await res.json();
        setUsers((prevUsers) => [...prevUsers, addedUser]);
        setName("");
        setEmail("");
        setPassword("");
      } else {
        console.error("Có lỗi xảy ra khi thêm người dùng");
      }
    } catch (error) {
      console.error("Có lỗi xảy ra khi thêm người dùng:", error);
    }
  };

  useEffect(() => {
    fetchData("users");
  }, []);

  return (
    <div>
      <h1>Test API</h1>
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
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Thêm mới</button>
      </form>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
