import up from "../../assets/icons/up-arrow-svgrepo-com.svg?raw";
import doubleUp from "../../assets/icons/up-double-arrow-svgrepo-com.svg?raw";
import down from "../../assets/icons/down-arrow-svgrepo-com.svg?raw";
import doubleDown from "../../assets/icons/down-double-arrow-svgrepo-com.svg?raw";

type RatingStatus = "up" | "double-up" | "down" | "double-down" | "neutral";

const Rating = ({ value }: { value: RatingStatus }) => {
  const assetMap = {
    up: up,
    "double-up": doubleUp,
    down: down,
    "double-down": doubleDown,
  };

  if (value === "neutral") {
    return null;
  }

  const asset = assetMap[value];

  return (
    <div
      className="flex items-center justify-center w-7 h-7"
      dangerouslySetInnerHTML={{ __html: asset }}
    ></div>
  );
};

export default Rating;
