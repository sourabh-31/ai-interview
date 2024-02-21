import { useEffect } from "react";

function Timer({ dispatch, secRemaining }) {
  const mins = Math.floor(secRemaining / 60);
  const seconds = secRemaining % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div className="bg-[#f3f4f6] absolute left-5 top-5 px-2 py-1 rounded-md font-medium text-secondaryColor">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer;
