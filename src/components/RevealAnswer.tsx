import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
<<<<<<< HEAD
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
=======
    return <div>Reveal Answer</div>;
>>>>>>> upstream/task-components
}
