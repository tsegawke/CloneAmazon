import { useEffect, useState } from "react";
import LayOut from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../API/endPoint";
import ProductCard from "../../Components/Product/ProductCard";
import classes from "./ProductDetail.module.css";
import Loader from "../../Components/Loader/Loader";
function ProductDetail() {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { productId } = useParams();
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        // console.log(res.data);
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [productId]);
  return (
    <LayOut>
      <div className={classes.pageWrapper}>
        {isLoading ? (
          <Loader />
        ) : (
          <div className={classes.products__container}>
            <ProductCard
              product={product}
              key={product.id}
              flex={true}
              renderDesc={false}
              renderDetail={true}
              renderAdd={true}
            />
          </div>
        )}
      </div>
    </LayOut>
  );
}

export default ProductDetail;
