import Article from './Articles/Article';
import { useState } from 'react';

const Hero = () => {
    const [blogs, setBlogs] = useState([
        { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1},
        { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2},
        { title: "Web dev tools ", body: "lorem ipsum...", author: "mario", id: 3}
    ]);

    return (
        <div className="main__container">
            {blogs.map((blog) => Article(blog.title, blog.author, blog.body, blog.id) )}
        </div>
    );
}
 
export default Hero;