import Button from "./Button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="px-[160px] flex mt-[80px] gap-2 mb-[130px]">
      <div className="flex flex-col gap-3">
        <h3 className="font-['inter'] font-bold leading-[61px] text-[3.125rem]">
          Empower Change with CryptoGive
        </h3>
        <p className="font-['inter']  font-normal text-xl text-[#050505] mb-4">
          Donate Digital Currencies for a Better World
        </p>
        <Link to="/donation"><Button innerText="Donate Now" width="250" backgroundColor="#68E342" /></Link>
      </div>
      <div>
        <img src="/assets/about_image1.png" alt="seated children" />
      </div>
    </section>
  );
}
