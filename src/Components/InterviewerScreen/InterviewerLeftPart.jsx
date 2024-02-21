import femaleImg from "../../Avatars/femaleImg.png";
import maleImg from "../../Avatars/maleImg.png";
import {
  FaHouse,
  FaCirclePlay,
  FaCircleQuestion,
  FaNetworkWired,
  FaBookOpen,
  FaGear,
  FaCircleH,
  FaEllipsis,
} from "react-icons/fa6";
import LeftPartIcons from "./LeftPartIcons";

function InterviewerLeftPart({ avatarName }) {
  return (
    <>
      <div className="flex w-[42%] h-[80%] gap-24 shadow-2xl rounded-r-xl bg-white border-t-8 border-b-8 border-[#f4f6f8] relative top-24">
        <div className="p-6">
          <p className="text-xl font-medium mb-2 text-secondaryColor">
            Remostart
          </p>
          <div className="text-sm font-light px-2 py-4 text-secondaryColor">
            <LeftPartIcons>
              <FaHouse />
              Home
            </LeftPartIcons>
            <LeftPartIcons>
              <FaCirclePlay />
              Interview
            </LeftPartIcons>
            <LeftPartIcons>
              <FaCircleQuestion />
              Questions
            </LeftPartIcons>
            <LeftPartIcons>
              <FaNetworkWired />
              Community
            </LeftPartIcons>
            <LeftPartIcons>
              <FaBookOpen />
              Resources
            </LeftPartIcons>
            <LeftPartIcons>
              <FaGear />
              Settings
            </LeftPartIcons>

            <p className="py-4 flex items-center gap-2 absolute bottom-10">
              <FaCircleH className="text-[#898fa9] text-xl" />
              Hannah Hayes
              <FaEllipsis className="mt-1" />
            </p>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-xl font-medium mb-2">Tell me about yourself</p>
          <p className="text-sm mb-4 text-gray-600 font-light">
            Walk me through your resume with simplicity and impact. Let&apos;s
            dive into your journey to uncover the essence of who you are.
          </p>
          <div className="bg-[#f3f4f6] w-full h-[70%] rounded-l-lg relative">
            <img
              src={avatarName === "Eva" ? femaleImg : maleImg}
              alt="img"
              className="w-40 rounded-md absolute top-6 left-5"
            />
            <div className="bg-[#f87171] w-14 h-14 rounded-full absolute right-20 bottom-10 border-4 border-white"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InterviewerLeftPart;
