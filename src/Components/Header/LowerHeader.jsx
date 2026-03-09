import classes from "./Header.module.css";
import { AiOutlineMenu } from "react-icons/ai";

const LowerHeader = () => {
  return (
    <div className={classes.lower__container}>
      <ul>
        <li>
          <AiOutlineMenu />
          <p>All</p>
        </li>
        <li>Amzon Haul</li>
        <li>Books</li>
        <li>Early Prime Deals</li>
        <li>Medical Care</li>
        <li>Best Sellers</li>
        <li>Amazon Basics</li>
        <li>Groceries</li>
        <li>Prime</li>
        <li>Prime Big Deal Day is October 7-8</li>
      </ul>
    </div>
  );
};

export default LowerHeader;
