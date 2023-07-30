function Donate() {
  return (
    <div className="flex flex-col justify-center text-center w-[21.875rem]">
      <div className="bg-white p-4 rounded-2xl drop-shadow-lg">
        <h2 className="w-72 text-[16px] m-auto font-bold mb-10">
          Choose an amount to give and we&quotll allocate it to vetted projects with
          the greatest impact
        </h2>
        <form>
          <div className="border-2 w-72 p-2 m-auto rounded-xl">
            <div className="input-container">
              <label className="flex items-center text-2xl">
                ${" "}
                <input
                  type="number"
                  id="donationAmount"
                  placeholder="USD"
                  className="w-11/12 ml-2 p-2 bg-[#F6F6F9] rounded-xl"
                ></input>
              </label>
            </div>
          </div>
          <button className="bg-[#68E342] mt-8 p-3 rounded-full font-bold w-72 mb-12">
            Donate
          </button>
        </form>
      </div>
      <div>
        <p className="text-xs font-bold mt-6">
          Your gift is 100% tax-deductible
        </p>
        <div className="flex justify-center items-center mt-3.5">
          <img src="../../public/Verification icon.svg" alt="verified icon" />
          <p className="text-xs ml-2">
            Your transaction is securely processed by{" "}
            <span className="font-bold">CIRCLE</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Donate;
