import { NextResponse } from "next/server";
import { hashPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import User from "@/models/User";

export async function POST(req) {
  try {
    await connectDB();
    const { email, password } = await req.json();
    console.log({ email, password });
    if (!email || !password) {
      return NextResponse.json(
        { error: "لطفا اطلاعات معتبر را وارد نمایید." },
        { status: 422 }
      );
    }
    const isUserExist = await User.findOne({ email });
    console.log(isUserExist);
    if (isUserExist) {
      return NextResponse.json(
        { error: "این حساب کاربری قبلا ایجاد شده است." },
        { status: 422 }
      );
    }
    const hashedPassword = hashPassword(password);
    const newUser = await User.create({
      email: email,
      password: hashedPassword,
    });
    console.log(newUser);
    return NextResponse.json({ message: "حساب کاربری ایجاد شد." });
  } catch (error) {
    return NextResponse.json(
      { error: "مشکلی در اتصال به سرور به وجود آمده است." },
      { status: 500 }
    );
  }
}
