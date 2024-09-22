function Hero() {
  return (
    <div className="bg-[#1F1F1F] p-11 mt-10">
      <h1 className="text-3xl text-[#EEEEEE] pb-2 font-semibold border-b-[2px] border-[#2C2C2C]">Browse</h1>
      <div className="flex">
        <div className="pt-3 text-[#9F9F9F]">
          <p className="uppercase text-xs">updated playlist</p>
          <p className="text-[#EEEEEE] font-light">Rap Life</p>
          <p className="uppercase font-light text-sm">apple music hip-hop</p>
          <img className="rounded-xl mt-5" src="https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/c6/49/95/c649953e-8e1b-a5f4-65cd-c6db94bc33fa/04db0fea-7091-4ee4-9760-0f1f426dc6a4.png/960x550sr.webp" alt="image1" />
        </div>
        <div className="pt-3 text-[#9F9F9F]">
          <p className="uppercase text-xs">new deluxe edition</p>
          <p className="text-[#EEEEEE] capitalize">c, XOXO ( magic city edition )</p>
          <p className="uppercase font-light text-sm">apple music hip-hop</p>
          <img className="rounded-xl mt-5" src="https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/b6/8b/11/b68b118c-de95-226c-58cc-243a7ffb80bf/cc2cf645-0167-4769-bcbe-ab21d76bff4e.png/960x550sr.webp" alt="image2" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
