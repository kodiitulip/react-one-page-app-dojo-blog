import Article from "./Article";

const ArticleList = ( { blogs, title, handleDelete } ) => {

    return (
        <div className="article__list">
            <h1 className="article__list__title"> {blogs.length > 0 ? title : ""} </h1>
            {blogs.map(
                (blog) => (<Article title={blog.title} author={blog.author} body={blog.body} id={blog.id} handleDelete={handleDelete} />)
            )}
        </div>
    );
}
 
export default ArticleList;