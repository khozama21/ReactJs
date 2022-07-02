import { useState } from "react";
import {  useNavigate }  from 'react-router-dom';

const Create = () => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("mario");
    const [isPneding, setIsPending] = useState(false);
    const nav=useNavigate();


    const handdleSubmit = (e) => {

        e.preventDefault();
        const blog={title,body, author};


        fetch ('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(blog)
        }).then(()=>{

            console.log('new blog added')
            setIsPending(false)
            nav('/')

        })

    }

    return (



        <div className="content create">
            <form onSubmit={handdleSubmit} >

                <label> Blog Title</label>
                <input required type="text" value={title} onChange={e => { setTitle(e.target.value) }} />
                <label> Blog Body</label>
                <textarea required value={body} onChange={e => { setBody(e.target.value) }} />
                <label> Blog Author</label>
                <select required type="text" value={author} onChange={e => { setAuthor(e.target.value) }}>
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>

                </select>

                {!isPneding && <button className="btn ">Add Blog</button>}
                {isPneding && <button className="btn " disabled>Adding Blog...</button>}


            </form>


        </div>);
}

export default Create;