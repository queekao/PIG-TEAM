import { Facebook, Instagram, Twitter, QuestionMark } from "../Asset/Icon";
import classes from "./IconList.module.css";
const IconList = (props) => {
  return (
    <ul className={`${classes.list} ${props.className}`}>
      <li>
        <QuestionMark />
      </li>
      <li>
        <Instagram />
      </li>
      <li>
        <Twitter />
      </li>
      <li>
        <Facebook />
      </li>
    </ul>
  );
};
export default IconList;
