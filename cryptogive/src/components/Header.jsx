import Button from "./Button";

export default function Header() {
  return (
    <header className="-mt-5">
      <nav className="flex  items-center justify-between px-[6.25rem] gap-12">
        <div>
          <img
            src="../../public/assets/CryptoGive.png"
            alt="logo"
            className="w-[200px] "
          />
        </div>
        <div className="flex gap-8">
          <a href="#">About</a>
          <a href="#">Sign Up</a>
        </div>
        <div className="flex items-center gap-8">
          <a href="#">Log In</a>
          <Button innerText="Donate Now" />
        </div>
      </nav>
    </header>
  );
}
