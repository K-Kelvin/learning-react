import OtherComponent from "../components/OtherComponent";

// React Component -> Reusable block of code
// children -> special React prop (takes in all nested nodes when we use the component)
function MyComponent({ children, className, someOtherProp }) {
    if (someOtherProp) {
        return (
            <div style={{ backgroundColor: "purple", borderRadius: 20 }}>
                Some other prop
            </div>
        );
    } else
        return (
            <p style={{ backgroundColor: "red", padding: 16 }} className={className}>
                {children}
            </p>
        );
}

export default function Section1() {
    return (
        <div>
            <h1 id="" className="my-custom-class">
                Hello World
            </h1>
            {/* <p>My name is {name}</p> */}
            <MyComponent someOtherProp={true}>This is a child text node</MyComponent>

            <MyComponent>
                <OtherComponent />
                <OtherComponent />
                <OtherComponent />
            </MyComponent>

            <MyComponent className="my-custom-class">Custom ClassName</MyComponent>

            <OtherComponent />
            <OtherComponent />
            <MyComponent />
            <OtherComponent />
            <MyComponent />
            <OtherComponent />
            <MyComponent />
            <MyComponent />
        </div>
    );
}
