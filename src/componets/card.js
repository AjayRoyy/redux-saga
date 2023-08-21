import React from "react";
import { Card } from "antd";
import { useDispatch } from "react-redux";
const { Meta } = Card;
const Cards = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <Card
      hoverable
      style={{
        width: 240,
      }}
      cover={<img alt="example" src={data.thumbnail} />}
      onClick={() =>
        dispatch({ type: "Product_Slice/getProductsFetch", payload: data.id })
      }
    >
      <Meta
        title={data.title}
        brand={data.brand}
        description={data.description}
      />
      <Meta title={data.brand} />
    </Card>
  );
};
export default Cards;
