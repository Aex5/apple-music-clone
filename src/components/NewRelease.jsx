
function NewRelease() {
  const newRelease = [
    {
      title: "viva hinds",
      artist: "hinds",
      image: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/8a/46/fa/8a46fa5c-7d57-ab91-c5c6-6e3c8c14b32b/102419.jpg/632x632bf.webp",
    },
    {
      title: "cowboy and dreamers",
      artist: "george strait",
      image: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/94/b1/61/94b161e0-dcb5-5b33-77c3-c6bfac9888e0/24UMGIM33172.rgb.jpg/632x632bf.webp",
    },
    {
      title: "infinite icon",
      artist: "paris hilton",
      image: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/19/58/dd/1958dd28-c3da-a44c-16bc-be64766bdcac/085365030343.jpg/632x632bf.webp",
    },
    {
      title: "about tzu - ep",
      artist: "tzuyu",
      image: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/cf/2b/6f/cf2b6fe5-b8d3-bacf-3885-0f14e775067e/8809928952437_Cover.jpg/632x632bf.webp",
    },
    {
      title: "big swerve",
      artist: "g herbo",
      image: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/8c/e4/1e/8ce41eb9-25b4-e2b6-ade1-88a613b8ac7e/24UMGIM93862.rgb.jpg/632x632bf.webp",
    },
  ];


  return (
    <div className="bg-[#1F1F1F] p-11">
      <h1 className="text-lg text-[#EEEEEE] pb-2 font-semibold">New Release</h1>
      <div className="flex gap-5">
        {newRelease.map((release, index) => (
          <div key={index} className="flex flex-col">
            <img src={release.image} alt="release" className="rounded-md" />
            <div className="pt-2">
              <p className="text-[#EEEEEE]">{release.title}</p>
              <p className="text-[#9F9F9F] text-sm">{release.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewRelease;
