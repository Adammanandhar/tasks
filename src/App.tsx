import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): JSX.Element {
    return (
        <div className="App">
            <h1>my app</h1>
            <header className="App-header">
                <img
                    src="https://media.licdn.com/dms/image/C4E03AQHx03oyKy9IWg/profile-displayphoto-shrink_800_800/0/1625844227180?e=2147483647&v=beta&t=IcutS7mUL28K7sOMQ4STn5SOto9gAyw6YTDvdfPzRnU"
                    alt="A picture of my dog Ada"
                />
                My hobbies:
                <ul>
                    <li>Watch Soccer</li>
                    <li>Hike</li>
                    <li>Sleep</li>
                </ul>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
                <Container>
                    <Row>
                        <Col>Aayush</Col>
                        <Col>Manandhar</Col>
                    </Row>
                </Container>
                UM COS420 with React Hooks and TypeScript
            </header>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;
