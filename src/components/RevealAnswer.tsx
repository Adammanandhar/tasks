import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [isVisible, setIsVisible] = useState(false);
    const changeVisibility = () => {
        setIsVisible(!isVisible);
    };
    return (
        <div>
            <Button onClick={changeVisibility}>Reveal Answer</Button>
            {isVisible && <div>42</div>}
        </div>
    );
}
