import { useQuery } from "@apollo/client";
import { FETCH_PRODUCTS_BY_CATEGORY } from "apollo/queries/storeAPI";
import { PreviewProduct } from "components/Business/ProductCard/PreviewProduct";
import { Loader } from "components/UI/Loader/Loader";
import { IProduct } from "interface/API_Model";
import { memo } from "react";
import { Link } from "react-router-dom";

interface ContentPageProps {
  category: string;
}

export const ContentPage: React.FC<ContentPageProps> = memo(({ category }) => {
  const { data, loading } = useQuery(FETCH_PRODUCTS_BY_CATEGORY, {
    variables: {
      name: {
        title: category,
      },
    },
  });

  const products: IProduct[] = data?.category.products;

  // ! ADD IN STOCK PROP
  return (
    <>
      {loading && (
        <div className="loader-container">
          <Loader size={200} thickness={13} color="#eaeaea" />
        </div>
      )}
      <div className="container">
        <div className="section-title">{category}</div>
        <div className="content-items">
          {products?.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <PreviewProduct
                id={product.id}
                image={product.gallery[0]}
                brand={product.brand}
                name={product.name}
                attributes={product.attributes}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
});
