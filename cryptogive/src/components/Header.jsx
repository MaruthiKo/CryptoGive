import Button from "./Button";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="-mt-5">
      <nav className="flex  items-center justify-between px-[6.25rem] gap-12">
        <div>
          <Link to="/">
            <img
              src="../../public/assets/CryptoGive.png"
              alt="logo"
              className="w-[200px] cursor-pointer"
            />
          </Link>
        </div>
        <div className="flex gap-8">
          <Link to="/about">About</Link>
          <Link className="cursor-pointer" to="/sign-up">
            Sign Up
          </Link>
        </div>
        <div className="flex items-center gap-8">
          <Link to="/login">Log In</Link>
          <Link to="/donation">
            <Button 
              innerText="Donate Now" 
              backgroundColor="#68E342"
              width="200"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
}
