import React, { useState } from "react";
import { ShoveBoxButton, MoveableBox } from "./ShoveBox";

export function ShoveBox(): JSX.Element {
    const [position, setPosition] = useState<number>(10);

    return (
        <div>
            <h3>Shove Box</h3>
            <span>The box is at: {box.position}</span>
            <div>
                <ShoveBoxButton
                    position={box.position}
                    setPosition={box.setPosition}
                ></ShoveBoxButton>
                <MoveableBox position={position} />
            </div>
        </div>
    );
}
