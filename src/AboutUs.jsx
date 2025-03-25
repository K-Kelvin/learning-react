import { Container } from "react-bootstrap";
import CustomNavbar from "./components/Navbar";

export default function AboutUs() {
    return (
        <div>
            <CustomNavbar />
            <Container>
                <h1>About Us Page</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
                    doloremque eos quibusdam ea sed itaque impedit quod recusandae
                    corporis veritatis, omnis tempore sunt, aliquam odit hic optio
                    beatae quos autem.
                </p>
            </Container>
        </div>
    );
}
