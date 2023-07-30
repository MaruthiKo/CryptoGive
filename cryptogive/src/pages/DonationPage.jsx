import ProgressContainer from "../components/ProgressContainer";
import Donate from "../components/Donate";
import Header from "../components/Header";

function DonationPage() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default DonationPage;

function Main() {
  return (
    <main className="bg-[#FFFFF0]">
      {/* donate section */}
      <section>
        <div className="grid-container w-[58.80rem] flex justify-between m-auto pt-20">
          {/* first grid container */}

          <div>
            <h1 className="font-bold text-[2.5rem] w-96 mb-8">
              Change lives this giving season
              <span className="text-[#CD46B2]">.</span>
            </h1>
            <ProgressContainer />
          </div>

          {/* 2nd grid container */}
          <div>
            <Donate />
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-between w-[71.25rem] m-auto pt-24">
          <img
            src="../../public/assets/donate_image.png"
            alt="help the hungry"
          />
          <div>
            <h3 className="font-bold text-3xl mb-20 pt-24">
              Send hope this holiday season
              <span className="text-[#CD46B2]">.</span>
            </h3>
            <div className="bg-[#F6F6F9] relative w-[31.25rem] rounded-2xl">
              <img
                src="../../public/quote icon.svg"
                alt="quote"
                className="ml-7 absolute mt-[-0.75rem]"
              />
              <p className="p-6 text-s">
                Give generously and make a difference this season! Your{" "}
                <span className="text-[#CD46B2]">kind contribution</span> will
                bring joy and encouragement to those who need it most. Let&aposs
                come together to make the{" "}
                <span className="text-[#CD46B2]">world a brighter place</span>{" "}
                and bring hope to everyone. Help to spread warmth and kindness
                and be the light in someone&aposs life this holiday season!
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
