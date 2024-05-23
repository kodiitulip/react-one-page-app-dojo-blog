const Article = (title, author, body, key) => {
    return (
        <div className="article" key={key}>
            <div className="article__container">
                <div className="article__title">
                    <h1>{ title }</h1>
                    <p className="article__author">By { author }</p>
                    <hr className="article__divider" />
                </div>
                <div className="article__body">
                    <div className="article__text">
                        <p>{ body }</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Article;