import { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../API/endPoint";
import ProductCard from "../../Components/Product/ProductCard";
import classes from "./Results.module.css";
import Loader from "../../Components/Loader/Loader";

function Results() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { categoryName } = useParams();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching category products:", err);
        setIsLoading(false);
      });
  }, [categoryName]); // Added dependency to re-fetch when category changes

  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={classes.resultsSection}>
          <h1 className={classes.heading}>Results</h1>
          <p className={classes.categoryPath}>Category / {categoryName}</p>
          <hr />
          <div className={classes.products__container}>
            {results.length > 0 ? (
              results.map((product) => (
                <ProductCard
                  product={product}
                  key={product.id}
                  renderAdd={true}
                />
              ))
            ) : (
              <p>No products found in this category.</p>
            )}
          </div>
        </section>
      )}
    </Layout>
  );
}

export default Results;
