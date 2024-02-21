import { useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import { useReactMediaRecorder } from "react-media-recorder";
import Timer from "./Timer";
import ButtonContainer from "./ButtonContainer";
import BlankScreen from "./BlankScreen";
import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import avatarFemale from "../../Avatars/avatarFemale.mp4";
import avatarMale from "../../Avatars/avatarMale.mp4";

const VIDEO_CONSTRAINTS = {
  width: 986,
  height: 543,
  aspectRatio: 1,
  facingMode: "user",
};

const QUESTION =
  "Tell me about yourself. Why don't you walk me through your resume?";

const initialState = {
  //loading, ready, start, running, done
  status: "loading",
  secRemaining: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "permissionGranted":
      return {
        ...state,
        status: "ready",
      };

    case "askQuestion":
      return {
        ...state,
        status: "start",
        secRemaining: 120,
      };

    case "giveAnswer":
      return {
        ...state,
        status: "running",
      };

    case "tick":
      return {
        ...state,
        secRemaining: state.secRemaining - 1,
        status: state.secRemaining === 0 ? "done" : state.status,
      };

    case "answerDone":
      return {
        ...initialState,
        status: "done",
      };

    default:
      throw new Error("Action is unknown");
  }
}

function Interview({ setMedia, setAnswer, avatarName }) {
  const [{ status, secRemaining }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const { startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder(
    { video: true }
  );

  const navigate = useNavigate();

  const mins = Math.floor(secRemaining / 60);
  const seconds = secRemaining % 60;

  // useEffect(
  //   function () {
  //     const voices = window.speechSynthesis.getVoices();
  //     if (status === "start") {
  //       const question = new SpeechSynthesisUtterance(QUESTION);
  //       const selectedVoice = voices.find(
  //         (voice) => voice.name === "Google US English"
  //       );
  //       question.voice = selectedVoice;
  //       question.volume = 0.35;
  //       window.speechSynthesis.speak(question);
  //     }
  //   },
  //   [status]
  // );

  useEffect(
    function () {
      if (secRemaining === 0) {
        stopRecording();
      }
    },
    [secRemaining, stopRecording]
  );

  useEffect(
    function () {
      if (mediaBlobUrl) {
        setMedia(mediaBlobUrl);
        dispatch({ type: "answerDone" });
      }
    },
    [setMedia, mediaBlobUrl, navigate, stopRecording]
  );

  useEffect(
    function () {
      if (status === "done") {
        navigate("/result");
      }
    },
    [status, navigate, stopRecording]
  );

  //Speech Recognition

  const {
    transcript,
    resetTranscript,
    browserSupportsSpeechRecognition,
    browserSupportsContinuousListening,
  } = useSpeechRecognition();

  useEffect(
    function () {
      if (status === "running" && browserSupportsContinuousListening) {
        resetTranscript();
        SpeechRecognition.startListening({ continuous: true });
      }
    },
    [status, browserSupportsContinuousListening, resetTranscript]
  );

  useEffect(
    function () {
      if (transcript !== "") {
        setAnswer(transcript);
      }
    },
    [transcript, setAnswer]
  );

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn&apos;t support speech recognition.</span>;
  }

  return (
    <main className="flex flex-col justify-center items-center w-full h-screen -mt-4">
      <div>
        <div className="text-2xl font-medium">{QUESTION}</div>
        <div className="text-sm mb-4 mt-2 text-gray-700">
          Asked by top companies like Google, Amazon, Microsoft and more
        </div>
        <div className="relative">
          {status === "loading" && <BlankScreen />}

          <Webcam
            imageSmoothing={true}
            audio={false}
            mirrored={true}
            videoConstraints={VIDEO_CONSTRAINTS}
            className={`rounded-md ${status === "loading" ? "hidden" : ""}`}
            onUserMedia={() => dispatch({ type: "permissionGranted" })}
          />

          {status === "start" && (
            <video className="w-64 absolute top-4 right-4 rounded-md" autoPlay>
              <source
                src={avatarName === "Eva" ? avatarFemale : avatarMale}
                type="video/mp4"
              />
            </video>
          )}

          {status === "start" && (
            <div className="bg-[#f3f4f6] absolute left-5 top-5 px-2 py-1 rounded-md font-medium text-secondaryColor">
              {mins < 10 && "0"}
              {mins}:{seconds < 10 && "0"}
              {seconds}
            </div>
          )}
          {status === "running" && (
            <Timer dispatch={dispatch} secRemaining={secRemaining} />
          )}
        </div>
      </div>

      <ButtonContainer
        status={status}
        dispatch={dispatch}
        startRecording={startRecording}
        stopRecording={stopRecording}
      />
    </main>
  );
}

export default Interview;
