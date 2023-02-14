import React from "react";
import "./App.css";
import manup from "./images/manup.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";
function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>man up</h1>

            <Container>
                <Row>
                    <Col>
                        <img
                            src={manup}
                            alt="This is an image of someone stressed"
                        />
                        <div className="rectangle"></div>
                    </Col>
                    <Col>
                        <ul>
                            <li>Man up</li>
                            <li>pay your bills</li>
                            <li>if you mess up</li>
                            <li>house/kids get taken and wife leaves</li>
                            <li>american dream</li>
                        </ul>
                        <div className="rectangle"></div>
                    </Col>
                </Row>
            </Container>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>aaron oster</p>
            <p>Hello World</p>
        </div>
    );
}

export default App;
