import React, { useState } from "react";

export function EditMode(): JSX.Element {
    const [isEditMode, setIsEditMode] = useState(false);
    const [name, setName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);

    const handleSwitchChange = () => {
        setIsEditMode(!isEditMode);
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setIsStudent(event.target.checked);
    };

    return (
        <div>
            <label className="form-switch">
                Edit Mode
                <input
                    type="checkbox"
                    checked={isEditMode}
                    onChange={handleSwitchChange}
                />
            </label>
            {isEditMode ? (
                <div>
                    <label>
                        Name:
                        <input
                            type="text"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </label>
                    <label>
                        Is a student:
                        <input
                            type="checkbox"
                            checked={isStudent}
                            onChange={handleCheckboxChange}
                        />
                    </label>
                </div>
            ) : (
                <div>
                    {name} is {isStudent ? "" : "not "}a student
                </div>
            )}
        </div>
    );
}
