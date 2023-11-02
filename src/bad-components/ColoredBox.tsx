import React, { useState } from "react";
import { Button } from "react-bootstrap";

const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

interface colors {
    change: () => void;
}
interface ChangeColor {
    color: string;
}

function ChangeColor({ change }: colors): JSX.Element {
    return <Button onClick={change}>Next Color</Button>;
}

function ColorPreview({ color }: ChangeColor): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: color,
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    const change = () => setColorIndex((1 + colorIndex) % COLORS.length);
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>

            <div>
                <ChangeColor change={change}></ChangeColor>
                <ColorPreview color={COLORS[colorIndex]}></ColorPreview>
            </div>
        </div>
    );
}
