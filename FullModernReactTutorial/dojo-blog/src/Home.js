import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [ blogs, setBlogs ] = useState([
    { title: 'My new website', body: "lorem ipsum ...", author: 'mario', id: 1},
    { title: 'Welcome party', body: "lorem ipsum ...", author: 'yoshi', id: 2},
    { title: 'Web dev top tips', body: "lorem ipsum ...", author: 'mario', id: 3},
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log('useEffect hook run');
    console.log(blogs);
  });

  return (
    <div className="home">
    <BlogList blogs={blogs} title="all blogs" handleDelete={handleDelete}/>
    </div>
  );
}

export default Home;