import React, { useContext } from "react";
import "./Publication.css";
import BlogCard from "../../components/blogCard/BlogCard";
import { pubSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
export default function Publications() {
  const { isDark } = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="publications">
        <div className="blog-header">
          <h1 className="blog-header-text">{pubSection.title}</h1>
          <p
            className={
              isDark ? "dark-mode blog-subtitle" : "subTitle blog-subtitle"
            }
          >
            {pubSection.subtitle}
          </p>
        </div>
        <div className="blog-main-div">
          <div className="blog-text-div">
            {pubSection.pubs.map((blog) => {
              return (
                <BlogCard
                  isDark={isDark}
                  blog={{
                    url: blog.url,
                    image: blog.image,
                    title: blog.title,
                    description: blog.description,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
