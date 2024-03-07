import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const colors = [
        "Red",
        "Blue",
        "Green",
        "Gray",
        "Purple",
        "HotPink",
        "Orange",
        "Black"
    ];
    const [selectedColor, setSelectedColor] = useState(colors[0]);

    return (
        <div>
            <h3>Change Color</h3>
            <Form>
                {colors.map((color, index) => (
                    <Form.Check
                        key={index}
                        inline
                        label={
                            <span
                                style={{
                                    backgroundColor: color,
                                    color: "white",
                                    padding: "0 5px",
                                    fontWeight: "bold"
                                }}
                            >
                                {color === "HotPink" ? "Hot Pink" : color}
                            </span>
                        }
                        name="color"
                        type="radio"
                        id={`inline-radio-${index}`}
                        value={color}
                        checked={selectedColor === color}
                        onChange={() => setSelectedColor(color)}
                    />
                ))}
            </Form>
            <div
                style={{
                    backgroundColor: selectedColor,
                    color: "white",
                    padding: "10px",
                    marginTop: "10px"
                }}
                data-testid="colored-box"
            >
                {selectedColor === "HotPink" ? "Hot Pink" : selectedColor}
            </div>
        </div>
    );
}
