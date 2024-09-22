import { useState } from "react";
import { RiVolumeUpFill } from "react-icons/ri";

function VolumeControl() {
  // State untuk menyimpan nilai volume
  const [volume, setVolume] = useState(50);

  // Function untuk menangani perubahan slider
  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  };

  return (
    <div className="flex items-center gap-4">
      <div className="text-[#ADAEAD]">
        <RiVolumeUpFill />
      </div>
      <div className="relative w-24">
        <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-1 bg-gray-600 rounded-full"></div>
        <div
          className="absolute top-1/2 transform -translate-y-1/2 h-1 bg-[#ADAEAD] rounded-full transition-all duration-300"
          style={{ width: `${volume}%` }}
        >
        </div>

        {/* Slider (invisible but functional) */}
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={handleVolumeChange}
          className="appearance-none w-full h-2 opacity-0 absolute top-0 left-0 cursor-pointer"
        />

        {/* Handle (volume indicator) */}
        <div
          className="absolute top-1/2 transform -translate-y-1/2 bg-white border border-gray-400 rounded-full transition-all duration-300"
          style={{
            left: `calc(${volume}% - 8px)`, // -8px to center the handle
            width: "12px",
            height: "12px",
          }}
        ></div>
      </div>
    </div>
  );
}

export default VolumeControl;
