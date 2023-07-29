import Button from "./Button";

export default function Header() {
  return (
    <header>
      <nav className="flex pt-[50px] items-center justify-between px-[6.25rem] gap-12">
        <div>
          <p>LOGO</p>
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
