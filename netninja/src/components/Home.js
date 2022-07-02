import BlogList from './blogList';
import useFetch from './useFetch';

export const Home = () => {
    const url = "http://localhost:8000/blogs";
    const { data: blogs, isPneding } = useFetch(url)

    // const handleDelete = (id) => {

    //     const newBlogs = blogs.filter((blog) => blog.id !== id);
    //     setBlogs(newBlogs)

    // }


    return (
        <div className='container mt-5'>
            {isPneding && <div className="content"> <h3> LOADING...</h3></div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
            {/* <BlogList blogs={blogs.filter((blog)=>blog.author==='mario')} title="Mario's Blogs" /> */}


        </div>
    )
}
