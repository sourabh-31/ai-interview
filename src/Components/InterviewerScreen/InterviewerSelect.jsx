import InterviewerBtn from "./InterviewerBtn";
import { useState } from "react";
import InterviewerLeftPart from "./InterviewerLeftPart";
import { useNavigate } from "react-router-dom";
import texture from "../../Avatars/texture.jpg";

function InterviewerSelect({ avatarName, setAvatarName }) {
  const [selectedBtn, setSelectedBtn] = useState(null);

  const navigate = useNavigate();

  function handleBtnClick(name) {
    setAvatarName(name);
    setSelectedBtn(name === selectedBtn ? null : name);
  }

  function continueClick() {
    navigate("/screen");
  }

  return (
    <section
      className="h-screen flex justify-between"
      style={{
        background:
          "linear-gradient(90deg, rgba(244, 244, 246, 1) 50%, rgba(252, 252, 252, 1) 50%)",
      }}
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${texture})`,
          backgroundSize: "cover",
          opacity: 0.1,
          pointerEvents: "none",
        }}
      ></div>
      <InterviewerLeftPart avatarName={avatarName} />

      <div className="p-8 w-40 mt-40 z-10">
        <p className="text-3xl font-bold w-80 mb-3">Add an interviewer</p>
        <p className="w-[70%] text-gray-600">
          Choose whoever makes you feel comfortable. You can always try again
          with another one.
        </p>

        <InterviewerBtn
          name="Eva"
          role="Managerial"
          selected={selectedBtn === "Eva"}
          onClick={() => handleBtnClick("Eva")}
        />
        <InterviewerBtn
          name="Matthew"
          role="Managerial"
          selected={selectedBtn === "Matthew"}
          onClick={() => handleBtnClick("Matthew")}
        />

        <button
          className="bg-secondaryColor text-white px-6 py-2 rounded-3xl mt-5"
          onClick={continueClick}
        >
          continue →
        </button>
      </div>
    </section>
  );
}

export default InterviewerSelect;
