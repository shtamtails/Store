import { useQuery } from "@apollo/client";
import { FETCH_PRODUCTS_BY_CATEGORY } from "apollo/queries/storeAPI";
import { ContentCard } from "components/Business/Content/ContentCard";
import { IProduct } from "interface/IStore";
import { Link } from "react-router-dom";

interface ContentPageProps {
  category: string;
}

export const ContentPage: React.FC<ContentPageProps> = ({ category }) => {
  const { data } = useQuery(FETCH_PRODUCTS_BY_CATEGORY, {
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
      <div className="container">
        <div className="section-title">{category}</div>
        <div className="content-items">
          {products?.map((product) => (
            <Link key={product.id} to={`/item/${product.id}`}>
              <ContentCard id={product.id} image={product.gallery[0]} brand={product.brand} name={product.name} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};