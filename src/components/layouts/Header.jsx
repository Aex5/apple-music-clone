import { FaPlay } from "react-icons/fa";
import { IoIosMusicalNotes } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import VolumeControl from "../VolumeControl";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoMdPerson } from "react-icons/io";

function Header() {
  return (
    <div className="bg-[#2C2C2C] flex items-center justify-start fixed gap-20 pl-20 w-full text-white p-1">
      {/* Kiri: tombol kontrol musik */}
      <div className="flex gap-1">
        <button>
          <svg width="30" height="26" fill="#626262" viewBox="0 0 32 28" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.767 20.44a.81.81 0 00.49-.183l2.58-2.174c.316-.266.316-.681 0-.955l-2.58-2.183a.81.81 0 00-.49-.183c-.415 0-.673.258-.673.673v1.245h-1.162c-.739 0-1.195-.233-1.718-.847l-1.527-1.801 1.527-1.81c.54-.63.946-.847 1.677-.847h1.203v1.279c0 .407.258.664.673.664a.801.801 0 00.49-.174l2.58-2.175c.316-.266.316-.69 0-.955l-2.58-2.183a.761.761 0 00-.49-.183c-.415 0-.673.258-.673.665v1.386h-1.212c-1.228 0-1.992.34-2.863 1.386l-1.412 1.668-1.469-1.751c-.805-.946-1.569-1.303-2.747-1.303H8.896c-.53 0-.896.348-.896.838s.365.838.896.838h1.437c.697 0 1.162.225 1.685.847l1.519 1.801-1.52 1.81c-.53.623-.954.847-1.643.847H8.896c-.53 0-.896.348-.896.838s.365.838.896.838h1.536c1.179 0 1.901-.356 2.706-1.303l1.478-1.751 1.444 1.718c.822.98 1.627 1.336 2.822 1.336h1.212v1.412c0 .415.258.672.673.672z"></path>
          </svg>
        </button>
        <button>
          <svg width="30" height="26" style={{ transform: "scaleX(-1)" }} viewBox="0 0 32 28" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.14 20.68c.365 0 .672-.107 1.038-.323l8.508-4.997c.623-.365.938-.814.938-1.37 0-.564-.307-.988-.938-1.361l-8.508-4.997c-.366-.216-.68-.324-1.046-.324-.73 0-1.337.556-1.337 1.569v4.773c-.108-.399-.406-.73-.904-1.021L7.382 7.632c-.357-.216-.672-.324-1.037-.324-.73 0-1.345.556-1.345 1.569v10.235c0 1.013.614 1.569 1.345 1.569.365 0 .68-.108 1.037-.324l8.509-4.997c.49-.29.796-.631.904-1.038v4.79c0 1.013.615 1.569 1.345 1.569z" fill="#626262" fill-rule="nonzero"></path>
          </svg>
        </button>
        <button>
          <FaPlay className="text-[#626262] text-xl mx-1" />
        </button>
        <button>
          <svg width="30" height="26" fill="#626262" viewBox="0 0 32 28" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.14 20.68c.365 0 .672-.107 1.038-.323l8.508-4.997c.623-.365.938-.814.938-1.37 0-.564-.307-.988-.938-1.361l-8.508-4.997c-.366-.216-.68-.324-1.046-.324-.73 0-1.337.556-1.337 1.569v4.773c-.108-.399-.406-.73-.904-1.021L7.382 7.632c-.357-.216-.672-.324-1.037-.324-.73 0-1.345.556-1.345 1.569v10.235c0 1.013.614 1.569 1.345 1.569.365 0 .68-.108 1.037-.324l8.509-4.997c.49-.29.796-.631.904-1.038v4.79c0 1.013.615 1.569 1.345 1.569z" fill="#626262" fill-rule="nonzero"></path>
          </svg>
        </button>
        <button>
          <svg width="30" height="26" viewBox="0 0 32 28" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.545 14.272a.856.856 0 00.863-.855v-.448c0-1.004.706-1.677 1.785-1.677h5.005v1.362c0 .407.258.664.673.664a.745.745 0 00.49-.183l2.581-2.166c.316-.266.316-.69 0-.955l-2.581-2.183a.745.745 0 00-.49-.183c-.415 0-.672.258-.672.665v1.294h-4.881c-2.217 0-3.628 1.254-3.628 3.213v.597c0 .474.382.855.855.855zm4.864 5.952c.407 0 .664-.257.664-.664v-1.303h4.881c2.225 0 3.628-1.254 3.628-3.213v-.597a.854.854 0 10-1.71 0v.448c0 1.004-.714 1.677-1.793 1.677h-5.006v-1.353c0-.407-.257-.664-.664-.664a.767.767 0 00-.498.182l-2.573 2.175c-.324.257-.315.68 0 .946l2.573 2.192a.807.807 0 00.498.174z" fill="#626262" fill-rule="nonzero"></path>
          </svg>
        </button>
      </div>

      {/* Tengah: Ikon musik dan Apple */}
      <div className="flex items-center gap-2">
        <div className="bg-[#323232] p-3">
          <IoIosMusicalNotes className="text-3xl text-[#434343]" />
        </div>
        <div className="bg-[#4D4D4D] py-3">
          <FaApple className="text-2xl text-[#BFBFBF] w-[30rem]" />
        </div>
      </div>

      {/* Kanan: Login */}
      <div>
        <VolumeControl />
      </div>

      <div className="flex items-center gap-4">
        <div className="text-[#ADADAD]">
          <TfiMenuAlt />
        </div>
        <button className="bg-[#D60017] px-3 py-[3.5px] rounded-md flex items-center gap-2">
          <IoMdPerson className="text-md text-white" />
          <span className="text-white font-medium text-base">Sign In</span>
        </button>
      </div>
    </div>
  );
}

export default Header;
