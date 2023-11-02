import React from "react";
import { MoveableBox, ShoveBoxButton } from "./ShoveBox";

export function ShoveBox(): JSX.Element {
    const box = MoveableBox();

    return (
        <div>
            <h3>Shove Box</h3>
            {
                ((<span>The box is at: {box.position}</span>),
                (
                    <div>
                        <ShoveBoxButton
                            position={box.position}
                            setPosition={box.setPosition}
                        ></ShoveBoxButton>
                        {box}
                    </div>
                ))
            }
        </div>
    );
}
