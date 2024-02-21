import { useEffect, useState } from "react";
import Button from "./Button";

function ButtonContainer({ status, dispatch, startRecording, stopRecording }) {
  const [showStartBtn, setShowStartBtn] = useState(false);

  useEffect(
    function () {
      let timer;
      if (status === "start") {
        timer = setTimeout(() => {
          setShowStartBtn(true);
        }, 4000);
      }

      return () => clearTimeout(timer);
    },
    [status]
  );

  return (
    <div className="relative w-full lg:w-[986px] mt-8">
      {status === "ready" && (
        <Button
          styles={"absolute left-0"}
          btnAction={"askQuestion"}
          dispatch={dispatch}
        >
          Start Interview
        </Button>
      )}
      {status === "start" && showStartBtn && (
        <Button
          styles={"absolute left-1/2 transform -translate-x-1/2"}
          btnAction={"giveAnswer"}
          dispatch={dispatch}
          onBtnClick={startRecording}
        >
          Start Answering
        </Button>
      )}
      {status === "running" && (
        <Button styles={"absolute right-0"} onBtnClick={stopRecording}>
          Done →
        </Button>
      )}
    </div>
  );
}

export default ButtonContainer;
