import { Alert, Card, Container, Spinner } from "react-bootstrap";
import CustomNavbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        async function fetchPosts() {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts?_limit=10"
            );

            if (response.ok) {
                const posts = await response.json();
                setPosts(posts);
            } else {
                setError("Failed to fetch posts");
            }
        }

        fetchPosts();
    }, []);

    return (
        <div>
            <CustomNavbar />
            <Container>
                <h1>All Posts</h1>
                {error && <Alert variant="danger">{error}</Alert>}

                {posts.length == 0 && <Spinner animation="border" variant="primary" />}

                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    {posts.map((post) => (
                        <Card key={post.id}>
                            <Card.Body>
                                <Card.Title>{post.title}</Card.Title>
                                <Card.Text>{post.body}</Card.Text>
                                <Link to={`/posts/${post.id}`} className="">
                                    View Post
                                </Link>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </Container>
        </div>
    );
}
