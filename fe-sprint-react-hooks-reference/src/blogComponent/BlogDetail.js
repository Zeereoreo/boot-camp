import { useState } from "react";
import{ useParams } from "react-router-dom";
import { fetchDelete, fetchPatch } from "../util/api";
import useFetch from "../util/useFetch";
import useScrollTop from "../util/useScrollTop";
import Loading from "../component/Loading";

const BlogDetails = () => {
    const { id } = useParams();
    const [blog, isPending, error] = useFetch(`http://localhost:3001/blogs/${id}`)
    const [isLike, setIsLike] = useState(false);

    useScrollTop();

    const handleDeleteClick = () => {
        fetchDelete('http://localhost:3001/blogs/', id);
    }

    const handleLikeClick = () => {
        setIsLike(!isLike);
        let patchData = {"likes" : blog.likes + 1};
        fetchPatch('http://localhost:3001/blogs/', id, patchData);
    }


    return (
        <div className="blog-details">
            { isPending && <Loading/> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={handleLikeClick}>
                    {/* isLike에 의해 조건부 렌더링으로 빨간 하트(❤️)와 하얀 하트(🤍)가 번갈아 보여야 합니다. */}
                    {isLike === false ? '🤍' : '❤️'} {blog.likes}
                    </button>
                    <button onClick={handleDeleteClick}>delete</button>
                </article>
            )}
        </div>
    )
}

export default BlogDetails; 