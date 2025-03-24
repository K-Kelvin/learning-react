import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export default function Section3() {
    return <RealtimeValidation />;
    // return <OnSubmitValidation />;
}

function RealtimeValidation() {
    const [email, setEmail] = useState("default@mail.com"); // react built-in hook
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [check, setCheck] = useState(false);

    const values = {
        email,
        password,
        password2,
        check,
    };

    // useEffect with an empty dependency array only runs once -> when the component mounts(loads or is created)
    useEffect(() => {
        console.log("Runs once -> During component mount(creation)");

        // This section runs when the component unmounts/is destroyed
        return () => {
            // clear event listeners
        }
    }, [])

    // useEffect that runs any time the email state changes
    // useEffect(() => {
    //     console.log("Runs any time the email changes: ", email)
    // }, [email, password])

    // Runs EVERY SINGLE TIME any state change occurs
    // useEffect(() => {
    //     console.log("CHANGE!")
    // })

    return (
        <Form style={{ textAlign: "left" }} className="shadow-sm p-4 border rounded-4">
            <h1 className="text-center">Sign Up</h1>

            <pre>{JSON.stringify(values, null, 4)}</pre>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                {/* {isValidEmail(email) ? null : (
                    <Form.Text className="text-danger">Invalid email</Form.Text>
                )} */}
                {!isValidEmail(email) && (
                    <Form.Text className="text-danger">Invalid email</Form.Text>
                )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                {password && password.length < 8 && (
                    <Form.Text className="text-danger">
                        Password should be at least 8 characters
                    </Form.Text>
                )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword2">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    value={password2}
                    onChange={(event) => setPassword2(event.target.value)}
                />
                {password !== password2 && (
                    <Form.Text className="text-danger">
                        The passwords do not match!
                    </Form.Text>
                )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                    type="checkbox"
                    label="Check me out"
                    value={check}
                    onChange={(event) => setCheck(event.target.checked)}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

function OnSubmitValidation() {
    const [emailError, setEmailError] = useState(""); // react built-in hook
    const [passwordError, setPasswordError] = useState("");
    const [password2Error, setPassword2Error] = useState("");

    function handleSubmit(event) {
        // Clear previous error messages (if any)
        setEmailError("");
        setPasswordError("");
        setPassword2Error("");

        event.preventDefault(); // prevent default browser behaviour on form submission
        const formData = new FormData(event.currentTarget);

        const email = formData.get("email");
        const password = formData.get("password");
        const password2 = formData.get("password2");
        const check = formData.get("check");

        let formInvalid = false;

        // Check for empty values
        if (email.trim() == "") {
            setEmailError("Email cannot be empty!");
            formInvalid = true;
        } else if (!isValidEmail(email)) {
            setEmailError("Invalid email address");
            formInvalid = true;
        }

        if (password.trim() == "") {
            setPasswordError("Password cannot be empty!");
            formInvalid = true;
        } else if (password.length < 8) {
            setPasswordError("Passwords should have a minimum of 8 characters!");
            formInvalid = true;
        }

        if (password2 !== password) {
            setPassword2Error("The passwords do not match");
            formInvalid = true;
        }

        // If everything is valid
        if (formInvalid === false) {
            const data = {
                email,
                password,
                check,
            };
            alert(JSON.stringify(data, null, 4));
        }
    }

    return (
        <Form
            onSubmit={handleSubmit}
            style={{ textAlign: "left" }}
            className="shadow-sm p-4 border rounded-4"
        >
            <h1 className="text-center">Sign Up</h1>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" />
                {emailError && (
                    <Form.Text className="text-danger">{emailError}</Form.Text>
                )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" />
                {passwordError && (
                    <Form.Text className="text-danger">{passwordError}</Form.Text>
                )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword2">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    name="password2"
                />
                {password2Error && (
                    <Form.Text className="text-danger">{password2Error}</Form.Text>
                )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                    type="checkbox"
                    label="Check me out"
                    name="check"
                    defaultChecked={false}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}
