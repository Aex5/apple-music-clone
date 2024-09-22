import { SlOptions } from "react-icons/sl";

function LatestSongs() {
  const songs = [
    {
      title: "ego",
      artist: "halsey",
      image: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/d3/79/bd/d379bd8a-3d54-eaa5-3c6b-775e62924496/196872431667.jpg/96x96bb.webp"
    },
    {
      title: "Ruby Rossary",
      artist: "A$AP Rocky",
      image: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/83/49/46/834946f3-6c8d-6390-9f8e-f487cdc4facc/196872424621.jpg/96x96bb.webp"
    },
    {
      title: "Just Stand There",
      artist: "Freed Again",
      image: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/bb/00/6b/bb006b8e-2d17-7f1c-cedc-f76a70b3af1f/5021732456847.jpg/96x96bb.webp"
    },
    {
      title: "Neva Play",
      artist: "Megan Thee Stallion",
      image: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/53/3c/f9/533cf90d-bb8d-a073-30a6-3339fdd165c6/075679630773.jpg/96x96bb.webp"
    },
    {
      title: "All Night",
      artist: "The Dare",
      image: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/f0/89/da/f089da91-f8d1-61b9-8110-5a4194973704/24UMGIM64117.rgb.jpg/96x96bb.webp"
    },
    {
      title: "Madonna",
      artist: "LINKIN PARK",
      image: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/69/21/cf/6921cff3-7074-118a-ece2-4012450e6c75/093624839811.jpg/96x96bb.webp"
    },
  ]
  return (
    <div className="bg-[#1F1F1F] px-11 py-3">
      <h1 className="text-lg text-[#EEEEEE] pb-2 font-semibold">Latest Songs</h1>
      <div className="grid grid-cols-3 gap-5">
        {songs.map((song, index) => (
          <div className="flex justify-between items-center border-t-[2px] border-[#2C2C2C]">
            <div key={index} className="flex items-center py-2">
              <img src={song.image} alt="song" className="w-12 h-12 rounded-md" />
              <div className="ml-3">
                <p className="text-[#EEEEEE]">{song.title}</p>
                <p className="text-[#9F9F9F] text-sm">{song.artist}</p>
              </div>
            </div>
            <div className="text-[#fa586a]">
              <SlOptions />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestSongs;
