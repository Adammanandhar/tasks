import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function DoubleHalf(): JSX.Element {
    const [value, setValue] = useState(10);
    const Doubler = () => setValue(value * 2);
    const Halver = () => setValue(value * 0.5);

    export function DoubleHalf(): JSX.Element {
        return (
            <div>
                <h3>Double Half</h3>
                <div>
                    The current value is: <span>{value}</span>
                </div>
                <Button onClick={Doubler}>Double</Button>
                <Button onClick={Halver}>Halve</Button>
            </div>
        );
    }
}
