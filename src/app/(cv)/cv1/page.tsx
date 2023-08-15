const Page = () => {
  return (
    <section className="border-2 print:border-0">
      <div className="h-[29.7cm] w-[21cm]">
        <div className="flex h-full w-full flex-col">
          <div className="relative flex h-[25%] w-full">
            <div className="bg-light-shades relative flex h-full w-2/6 items-center justify-center">
              picture
            </div>
            <div className="bg-light-accent relative flex h-3/4 w-4/6 items-center justify-center">
              tittle
            </div>
          </div>
          <div className="relative flex h-[55%] w-full">
            <div className="bg-main-color h-full w-2/6">profile</div>
            <div className="bg-dark-accent -mt-[10%] w-4/6 pl-[3%] pt-[4%]">
              biografi
            </div>
          </div>
          <div id="skill" className="bg-dark-shades h-[20%] w-full">
            skill
            <div className="bg-default w-full print:hidden">adas</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
