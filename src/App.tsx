import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
                <p>Hello World</p>
            </header>
            <h2>Jared Miller</h2>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <div className="columns">
                <Container>
                    <Row>
                        <Col>First column.</Col>
                        <Col>
                            Second column. You can put whatever you want in
                            here, and it will be on the right side. Maybe try
                            adding an image?
                        </Col>
                    </Row>
                </Container>
            </div>
            <img
                src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iN3KwAJOuaj0/v0/-1x-1.jpg"
                alt="Shanghai Oriental Probe (Shanghai Tower)"
                width="400"
                height="400"
            />

            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World!
            </Button>

            <div className="List">
                <ul>
                    <li>Tennis</li>
                    <li>Programming</li>
                    <li>Music Composition</li>
                </ul>
            </div>
        </div>
    );
}

export default App;
