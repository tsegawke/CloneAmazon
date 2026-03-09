import classes from "./category.module.css";
import { Link } from "react-router-dom";
function CategoryCard({ title, imgLink, name, more }) {
  return (
    <div className={classes.category}>
      <Link to={`/category/${name}`}>
        <span>
          <h2>{title}</h2>
          <img src={imgLink} alt={title} />
          <p>{more}</p>
        </span>
      </Link>
    </div>
  );
}

export default CategoryCard;
