import Button from "./Button";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="pl-[266px] flex flex-col gap-[100px] pr-[100px]">
      <div className="flex justify-center items-center">
        <div className=" ">
          <Link to="/">
          <img
            src="/assets/CryptoGive.png"
            alt="logo"
            className="w-[200px] -ml-[35px]"
          />
          </Link>
          <p className="-mt-[50px] text-[#373949] font-['inter'] font-medium leading-[30px] w-[59%] text-[17px]">
            Contribute to charities that are making a positive impact and
            receive a video showcasing the impact your support has had!
          </p>
        </div>
        <div className="flex gap-[32px]">
          <Button
            innerText="Donate Now"
            backgroundColor="#68E342"
            width="200"
          />
          <Button innerText="About Us" backgroundColor="#D6F5E2" width="200" />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-[#373949] font-['inter'] font-medium">
          <p>Copyright © CryptoGive 2023</p>
        </div>
        <div>Terms | Privacy</div>
        <div className="flex gap-[10px]">
          <a href="#">
            <img
              src="/assets/Facebook.png"
              alt="facebook logo"
              className="rounded-2xl"
            />
          </a>
          <a href="#">
            <img
              src="/assets/Twitter.png"
              alt="twitter logo"
              className="rounded-2xl"
            />
          </a>
          <a href="#">
            <img
              src="/assets/Instagram.png"
              alt="instagram logo"
              className="rounded-2xl"
            />
          </a>
          <a href="#">
            <img
              src="/assets/LinkedIn.png"
              alt="linkedIn logo"
              className="rounded-2xl"
            />
          </a>
          <a href="#">
            <img
              src="/assets/Youtube.png"
              alt="youtube logo"
              className="rounded-2xl"
            />
          </a>
        </div>
      </div>
      <div></div>
    </footer>
  );
}
