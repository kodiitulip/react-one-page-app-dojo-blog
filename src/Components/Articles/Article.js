const Article = ({ title, author, body, id, handleDelete }) => {

    return (
        <div className="article" key={id}>
            <div className="article__container">
                <div className="article__title">
                    <h1>{ title }</h1>
                    <p className="article__author">By { author }</p>
                    <hr className="article__divider" />
                </div>
                <div className="article__body">
                    <p className="article__text"> {body} </p>
                </div>
                <span className="article__delete" onClick={ () => handleDelete(id) } >Delete</span>
            </div>
        </div>
    );
}
 
export default Article;