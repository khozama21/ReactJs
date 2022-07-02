import { useNavigate, useParams } from "react-router";
import useFetch from "./useFetch";

const Blogs = () => {
    const { id } = useParams();
    const { data: blog, isPneding } = useFetch('http://localhost:8000/blogs/' + id);
    const nav=useNavigate();
const handleClick=()=>{

    fetch ('http://localhost:8000/blogs/'+ blog.id,{
        method:'DELETE',
       

    }).then(()=>{

        nav('/')

    })
}

    return (
        <div className="content blog-details">
            {isPneding && <div className="content"> <h3> LOADING...</h3></div>}
            {blog && (
                <article>
                    <h2> {blog.title} </h2>
                    <p> written by: {blog.author}</p>
                    <div>

                         {blog.body}  
                    </div>
                </article>
            
            )}
            <button className="btn" onClick={handleClick}>Delete Blog</button>
        </div>
    );
}

export default Blogs;