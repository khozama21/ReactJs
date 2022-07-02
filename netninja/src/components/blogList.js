import { Link } from "react-router-dom";


const BlogList = ({ blogs, title, handleDelete }) => {
    // const blogs=props.blogs;
    // const title=props.title;

    return (<div>

        <h2> {title}</h2>
        {blogs.map((blog) => (

            <div className="blog-preview " key={blog.id}>
                <Link to={`/blogs/${blog.id}`}>


                    <h2> {blog.title}</h2>
                    <p className=" d-inline"> written by: {blog.author}</p>
                </Link>

                {/* <button className="btn btn-danger ml-5" onClick={()=>{handleDelete(blog.id)}} >Delete Blog</button> */}


            </div>
        ))}




    </div>);
}

export default BlogList;