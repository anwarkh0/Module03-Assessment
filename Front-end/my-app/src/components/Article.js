import React from "react";
import style from "./Article.module.css"



function Article() {
    return (
        <div>
            <div className={style.cardArticle}>
                <img src="" alt="img" className={style.image} />
                <h2 className={style.title} >title</h2>
                <p className={style.category} >category</p>
                <p className={style.body} >body</p>
                <p className={style.author} >author</p>
                <button>view more</button>
        
            </div>
        </div>
    );
}

export default Article;
