import Link from "next/link";
import { FiLogIn } from "react-icons/fi";

function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-2 my-5 bg-blue-700 rounded-lg text-white">
      <div>
        <ul className="flex items-center gap-2">
          <li className="hover:bg-[#304ffe] hover:text-white px-4 py-2 ">
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li className="hover:bg-[#304ffe] hover:text-white px-4 py-2">
            <Link href="/buy-residential">آگهی ها</Link>
          </li>
        </ul>
      </div>
      <div>
        <Link
          href="/signin"
          className="rounded-md flex items-center  gap-1 px-4 py-1 bg-white text-blue-800 "
        >
          <FiLogIn className="text-2xl" />
          <span>ورود</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
