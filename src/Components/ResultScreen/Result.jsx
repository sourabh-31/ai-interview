import { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";
import StarRating from "./StarRating";

function Result({ media, answer }) {
  const [userRating, setUserRating] = useState("");
  console.log(userRating);

  const [savedMedia, setSavedMedia] = useState(null);
  const [savedAnswer, setSavedAnswer] = useState(null);

  useEffect(
    function () {
      if (media) {
        localStorage.setItem("resMedia", media);
      }
    },
    [media]
  );

  useEffect(function () {
    const item = localStorage.getItem("resMedia");
    setSavedMedia(item);
  }, []);

  useEffect(
    function () {
      if (answer) {
        localStorage.setItem("resAnswer", answer);
      }
    },
    [answer]
  );

  useEffect(function () {
    const item = localStorage.getItem("resAnswer");
    setSavedAnswer(item);
  }, []);

  return (
    <main>
      <section className="mt-16">
        <div className="flex justify-between items-start w-80 ml-auto mr-auto rounded-2xl shadow-lg border-[1px] border-gray-200">
          <div>
            <p className="text-3xl text-secondaryColor font-medium ml-14 mt-14 text-center">
              Thank you for using this platform for your interview.
            </p>
            <div className="w-fit mt-5 ml-auto mr-auto">
              <p className="text-2xl font-light text-secondaryColor">
                How was your experience?
              </p>
              <StarRating
                maxRating={5}
                size={50}
                onSetRating={setUserRating}
                className="mt-5 ml-2"
              />
            </div>
          </div>
          <video
            src={savedMedia && savedMedia}
            controls
            className="w-[40%] rounded-xl"
          ></video>
        </div>
      </section>

      <section className="mt-16 flex justify-between h-96 w-80 ml-auto mr-auto border-[1px] border-gray-200 rounded-2xl">
        <div className="flex flex-wrap justify-evenly pt-10 ml-10 gap-8 w-96">
          <ProgressBar pathColor="#2196F3" label="Performance" value={3} />
          <ProgressBar pathColor="#FFD700" label="Confidence" value={4} />
          <ProgressBar pathColor="#FC9483" label="Communication" value={3} />
          <ProgressBar pathColor="#5DBB63" label="Grammar" value={2} />
          <div className="flex flex-col items-center">
            <label className="font-medium mb-2">Energy Level</label>
            <span className="text-7xl">😄</span>
          </div>
        </div>

        <div className="border-l-[1px] border-gray-200 w-60 px-8 py-6">
          <p className="text-2xl font-medium mb-4">
            Candidate&apos;s response →
          </p>
          <span className="text-base font-normal">
            {savedAnswer && savedAnswer}
          </span>
        </div>
      </section>
    </main>
  );
}

export default Result;
