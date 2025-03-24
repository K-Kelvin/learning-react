import { useState } from "react";

export default function Section2() {
    // const user = null;
    // const isLoggedIn = false;
    const user = {
        name: "John Doe",
        email: "jdoe@mail.com",
    };
    const isLoggedIn = true;

    // if (isLoggedIn) {
    //     return <Dashboard user={user} />
    // } else {
    //     return <Login />
    // }
    return (
        <div>
            <h1>Section 1</h1>

            {isLoggedIn ? <Dashboard user={user} /> : <Login />}
        </div>
    );
}

function Button({ style, ...props }) {
    const [count, setCount] = useState(0);

    function handleClick() {
        // alert('Click handled within the button');
        // props.onClick();
        // setCount(count + 1);
        setCount(prevCount => prevCount + 1);
    }

    return (
        <button
            {...props} // forward other props (attributes) to this element
            onClick={handleClick}
            style={{
                backgroundColor: "blue",
                color: "white",
                ...style, // destructuring objects
            }}
        >
            {props.children}, <span>Count={count}</span>
        </button>
    );
}

function Product({ product }) {
    return (
        <div
            style={{
                padding: 8,
                borderRadius: 12,
                backgroundColor: "white",
                color: "black",
            }}
        >
            <span>{product.id}.)</span>{" "}
            <span style={{ fontWeight: "bold" }}>{product.name}</span>
        </div>
    );
}

function Dashboard({ user }) {
    const products = [
        { id: 1, name: "IPhone 16" },
        { id: 2, name: "Hp Omen" },
        { id: 3, name: "Desk" },
        { id: 4, name: "Monitor" },
    ];

    // console.log(
    //     products.map((product) => {
    //         return product.name;
    //     })
    // );

    const productList = products.map((product) => {
        return <Product key={product.id} product={product} />;
    });

    return (
        <div>
            <h2>Hello {user.name}</h2>

            <Button
                style={{ marginBottom: 16, marginRight: 16 }}
                onClick={() => {
                    alert("[Outside] Button clicked");
                }}
            >
                Click Me
            </Button>
            <Button>Button 2</Button>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {/* {products.map((product) => {
                    return <Product key={product.id} product={product} />
                })} */}

                {productList}
            </div>
        </div>
    );
}

function Login() {
    return (
        <form>
            <div className="">
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Enter your username..."
                />
            </div>

            <div className="">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password..."
                />
            </div>

            <button type="submit">Login</button>
        </form>
    );
}
