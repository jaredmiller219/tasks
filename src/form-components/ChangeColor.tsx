import React, { useState } from "react";

export function ChangeColor(): JSX.Element {
    const colors = [
        "Red",
        "Blue",
        "Green",
        "Yellow",
        "Purple",
        "Pink",
        "Orange",
        "Black"
    ];
    const [selectedColor, setSelectedColor] = useState(colors[0]);

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color, index) => (
                <div key={index}>
                    <input
                        type="radio"
                        id={color}
                        name="color"
                        value={color}
                        checked={selectedColor === color}
                        onChange={() => setSelectedColor(color)}
                    />
                    <label htmlFor={color}>{color}</label>
                </div>
            ))}
            <div
                style={{
                    backgroundColor: selectedColor,
                    color: "white",
                    padding: "10px",
                    marginTop: "10px"
                }}
                data-testid="colored-box"
            >
                {selectedColor}
            </div>
        </div>
    );
}
