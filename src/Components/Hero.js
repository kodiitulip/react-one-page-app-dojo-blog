import { useState } from 'react';
import ArticleList from './Articles/ArticleList';

const Hero = () => {
    const [blogs, setBlogs] = useState([
        { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1},
        { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2},
        { title: "Web dev tools ", body: "lorem ipsum...", author: "mario", id: 3}
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter( blog => blog.id !== id );

        setBlogs(newBlogs);
    }

    return (
        <div className="main__container">
            <ArticleList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
            <ArticleList blogs={ blogs.filter( (blog) => blog.author === 'mario' ) } title="Mario's Blogs" handleDelete={handleDelete} />
        </div>
    );
}
 
export default Hero;