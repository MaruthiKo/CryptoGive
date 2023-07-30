export default function About() {
  return (
    <section className="px-[266px]">
      <div className="flex gap-[80px] w-[950px]">
        <div className=" max-w-[587px] max-h-[703px] pb-[103px]">
          <img
            className=" max-h-[500px] max-w-[316px]"
            src="/assets/about_image2.png"
            alt="money in hands"
          />
        </div>
        <div className="max-w-[611px] scale-90 translate-y-4">
          <p className="font-['inter'] text-3xl font-bold text-[#050505] mb-8 leading-[45px]   ">
            Did you know that 264 million children and youth worldwide <br /> do
            not have access to education?
          </p>
          <p className="text-slate-600 text-lg font-normal font-['inter'] mb-[50px] ">
            We here at CryptopGive are passionate about providing top-notch
            education to everyone, smashing any and all obstacles that stand in
            the way of knowledge. Your donation can help make learning a right,
            not just a privilege. Come join us on our mission to unleash the
            potential of every kid out there and create a brighter and better
            future!
          </p>
          <div className="border-b border-[#DCDDEB]"></div>
        </div>
      </div>
      <div className="flex gap-[50px] mt-[60px] w-[950px]">
        <div className=" w-auto scale-90   -translate-y-3">
          <p className="font-['inter'] text-3xl font-bold text-[#050505] mb-8 leading-[45px]  w-[100%]">
            Changing Lives, <br /> One Donation at a Time <br /> Witness the
            Power of Your Donation
          </p>
          <p className="text-slate-600 text-lg font-normal font-['inter'] mb-[50px] ">
            Your generous contribution through USDC payments goes a long way in
            changing lives for the better. Whether it is providing clean water
            to a drought-stricken region, offering medical assistance to those
            in need, or empowering underprivileged youth through education, your
            support creates a ripple effect of positive change.
          </p>
          <div className="border-b border-[#DCDDEB]"></div>
        </div>
        <div className=" max-w-[587px] max-h-[703px] pb-[103px]">
          <img
            className="  max-w-[350px]"
            src="/assets/about_image3.png"
            alt="homeless person"
          />
        </div>
      </div>
    </section>
  );
}
