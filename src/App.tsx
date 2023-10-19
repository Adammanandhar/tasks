import React from "react";
import "./App.css";
<<<<<<< HEAD
import { Button, Col, Container, Row } from "react-bootstrap";
=======
>>>>>>> upstream/task-components
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
<<<<<<< HEAD
=======
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
>>>>>>> upstream/task-components

function App(): JSX.Element {
    return (
        <div className="App">
            <h1>my app</h1>
            <header className="App-header">
<<<<<<< HEAD
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
=======
                UM COS420 with React Hooks and TypeScript
            </header>
            <hr></hr>
            {/* <DoubleHalf></DoubleHalf> */}
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr></hr>
>>>>>>> upstream/task-components
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
