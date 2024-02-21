import { Route, Routes } from "react-router-dom";
import Interview from "./Components/InterviewScreen/Interview";
import Result from "./Components/ResultScreen/Result";
import { useState } from "react";
import InterviewerSelect from "./Components/InterviewerScreen/InterviewerSelect";

function App() {
  const [media, setMedia] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [avatarName, setAvatarName] = useState("");

  return (
    <Routes>
      <Route
        path="/"
        element={
          <InterviewerSelect
            setMedia={setMedia}
            setAnswer={setAnswer}
            avatarName={avatarName}
            setAvatarName={setAvatarName}
          />
        }
      />
      <Route
        path="/screen"
        element={
          <Interview
            setMedia={setMedia}
            setAnswer={setAnswer}
            avatarName={avatarName}
          />
        }
      />
      <Route
        path="/result"
        element={<Result media={media} answer={answer} />}
      />
    </Routes>
  );
}

export default App;
