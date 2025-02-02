"use client";

import Link from "next/link";
import { useState } from "react";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  return (
    <div className="flex flex-col items-center justify-center h-[90vh]">
      <h4 className="text-[#304ffe] font-semibold text-3xl mb-4">
        فرم ثبت نام
      </h4>
      <form className="flex flex-col max-w-[700px] border-2 border-[#304ffe] p-10 rounded-lg mb-7">
        <label className="custom-label">ایمیل</label>
        <input
          type="text"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          className="custom-input"
        />
        <label className="custom-label">رمز عبور</label>
        <input
          type="password"
          value={password}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          className="custom-input"
        />
        <label className="custom-label">تکرار رمز عبور</label>
        <input
          type="password"
          value={rePassword}
          name="rePassword"
          onChange={(e) => setRePassword(e.target.value)}
          className="custom-input"
        />
        <button
          type="submit"
          className="border-none bg-[#304ffe] text-white text-xl font-normal rounded-md cursor-pointer py-2 transition-all ease-in duration-100 hover:transform hover:scale-105"
        >
          ثبت نام
        </button>
      </form>
      <p className="text-gray-800 text-lg">
        حساب کاربری دارید؟
        <Link href="/signin" className="text-[#304ffe] mr-2 border-b-1 border-gray-500">ورود</Link>
      </p>
    </div>
  );
}

export default SignUpPage;
