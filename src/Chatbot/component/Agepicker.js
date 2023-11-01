import React, { useState } from 'react';

const Agepicker = (props) => {
    const [selectedAge, setSelectedAge] = useState(18);
    console.log(props)

    const handleAgeChange = (e) => {
        const newAge = parseInt(e.target.value, 10);
        setSelectedAge(newAge);
        if(props.state && props.state.userData){
             props.state.userData.age = newAge;
             props.actions.afterage(newAge);
        }
        
    };

    const ageOptions = Array.from({ length: 23 }, (_, index) => 18 + index);

    return (
        <div className="age-picker-container">
            <label htmlFor="age"> Age:</label>
            <select id="age" className="age-picker-dropdown" onChange={handleAgeChange}>
                {ageOptions.map((age) => (
                    <option key={age} value={age}>
                        {age}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Agepicker;
