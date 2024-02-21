import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ProgressBar({ pathColor, label, value }) {
  const progressStyles = {
    pathColor: pathColor,
    textColor: "#1d2b3a",
  };

  return (
    <div className="w-20 flex flex-col items-center">
      <label className="font-medium">{label}</label>
      <CircularProgressbar
        value={value}
        maxValue={5}
        strokeWidth={10}
        text={`${value}/${5}`}
        className="mt-2 font-medium"
        styles={buildStyles(progressStyles)}
      />
    </div>
  );
}

export default ProgressBar;
