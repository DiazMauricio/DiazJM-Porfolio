import Behance from "./Icons/Behance";
import Instagram from "./Icons/Instagram";
import LinkedIn from "./Icons/LinkedIn";
import "./IconBar.css";
import Dribble from "./Icons/Dribble";

const IconBar = () => {
  return (
    <div className="IconBar">
      <Instagram />
      <LinkedIn />
      <Behance />
      <Dribble />
    </div>
  );
};

export default IconBar;
