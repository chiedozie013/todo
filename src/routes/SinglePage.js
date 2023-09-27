import React from "react";
import { useParams } from "react-router-dom";
import { aboutData } from "../components/data";

const SinglePage = () => {
  const { slug } = useParams();
  const aboutContent = aboutData.find((item) => item.slug === slug);
  const { title, description } = aboutContent;
  return (
    <div className="main_content">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default SinglePage;
