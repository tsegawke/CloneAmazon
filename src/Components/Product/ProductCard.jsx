import { useContext } from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./product.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";

function ProductCard({
  product,
  flex,
  renderDesc = true,
  renderAdd = true,
  renderDetail = false,
}) {
  const { id, image, title, price, rating, description } = product;
  const [, dispatch] = useContext(DataContext);

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        id,
        image,
        title,
        price,
        rating,
        description,
      },
    });
  };

  return (
    <div className={`${classes.card} ${flex && classes.product__fixed}`}>
      <Link to={`/product/${id}`} className={classes.link}>
        <img src={image} alt={title} className={classes.productImage} />
        <h3 className={classes.title}>{title}</h3>
      </Link>

      <div>
        {/* render description only if renderDesc is true */}

        {renderDesc && (
          <p className={classes.desc}>{description?.substring(0, 80)}...</p>
        )}
        {renderDetail && <p className={classes.desc}>{description}</p>}

        <div className={classes.rating}>
          <Rating value={rating?.rate || 0} precision={0.1} readOnly />
          <span>({rating?.count || 0})</span>
        </div>

        <div className={classes.price}>
          <CurrencyFormat amount={price} />
        </div>

        {/* render Add to Cart button only if renderAdd is true */}
        {renderAdd && (
          <button className={classes.button} onClick={addToCart}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
