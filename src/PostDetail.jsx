import { Container, Spinner } from "react-bootstrap";
import CustomNavbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

// query parameters -> /posts/23
// search parameters -> /posts?limit=20
export default function PostDetail() {
    let { id } = useParams(); // e.g. ['posts/:id'] /posts/23 then the "id" will be 23
    const [post, setPost] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        async function fetchPosts() {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/posts/${id}`
            );

            if (response.ok) {
                const post = await response.json();
                setPost(post);
                console.log(post)
            } else {
                setError("Failed to fetch post");
            }
        }

        fetchPosts();
    }, [id]);

    return (
        <div>
            <CustomNavbar />
            <Container>
                <h1>Post Detail Page</h1>
                {error && <Alert variant="danger">{error}</Alert>}

                {post ? (
                    <>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        {/* Display the user who posted */}
                    </>
                ) : (
                    <Spinner animation="border" variant="primary" />
                )}

                <Link to="/posts">Back</Link>
            </Container>
        </div>
    );
}
