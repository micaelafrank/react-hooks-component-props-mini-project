import React from "react";
import blogData from "../data/blog";
import Article from "./Article";
console.log(blogData);

function ArticleList({ posts }) {
    const articles = posts.map((post) => (

            <Article key={post.id}>
                title={post.title}
                date={post.date}
                preview={post.preview}
            </Article>
    ));

    return <main>{articles}</main>
}

export default ArticleList;
