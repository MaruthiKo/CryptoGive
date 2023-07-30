function ProgressContainer() {
  return (
    <div className="progress-update-container p-3 flex justify-between items-center w-[480px] h-[126px] drop-shadow-lg rounded-2xl bg-white">
      <div className="w-[300px] h-[78px] flex flex-col justify-between">
        <div className="flex justify-between">
          <span className="text-[#11AEA8] font-semibold">100%</span>
          <span className="flex">
            <span className="font-semibold">11,298</span>
            <p className="ml-1">donations</p>
          </span>
          <span className="flex">
            <p>goal</p>
            <span className="ml-1 font-semibold">$600,000</span>
          </span>
        </div>
        <div className="progress bg-gradient-to-r from-[#8EE79E] to-[#11AEA8] h-2 stroke-[#EAEAEA] stroke-2 rounded-lg"></div>
        <div className="flex justify-between">
          <span className="flex">
            <p>left</p>
            <span className="ml-1 font-semibold">$ 0</span>
          </span>
          <p>Goal Reached</p>
        </div>
      </div>
      <div className="p-2 rounded-full bg-[#E0F8D9] flex items-center px-4 ml-4">
        <div className="w-2 h-2 bg-[#CD46B2] rounded-full mr-2"></div>
        <p>Live update</p>
      </div>
    </div>
  );
}

export default ProgressContainer;