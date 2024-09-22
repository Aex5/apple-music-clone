import { MdChevronRight } from "react-icons/md";

function Explore() {
  const data = [
    {
      title: "spatial audio",
    },
    {
      title: "charts",
    }, 
    {
      title: "decades",
    }, 
    {
      title: "music videos",
    }, 
    {
      title: "browse by genre",
    },
    {
      title: "mood and activity",
    },

  ]
  return (
    <div className="bg-[#1F1F1F] px-11 py-12">
      <h1 className="text-xl text-[#EEEEEE] pb-2 font-semibold mb-4">More To Explore</h1>
      <div className="grid grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div key={index} className="text-[#fa586a] font-light capitalize bg-[#2B2B2B] p-5 rounded-lg flex items-center justify-between">
            <p className="">{item.title}</p>
            <MdChevronRight className="text-[#fa586a]" />
          </div>
        ))
        }
      </div>
    </div>
  );
}

export default Explore;
