import React, { useState} from 'react';
import PropTypes from 'prop-types';





const Greetingf = (props) => {
// const [VARIABLE, FUNCTION PARA ACTUALIZAR] = useState(VALOR INICIAL)
    const [age, setage] = useState(20);

    const birthday = () => {
        //HOOK QUE ACTUALIZA EL STATE (function)
        setage(age + 1);
    }
    return (
        <div>
            <div>
                <p>UWU { props.name }</p>
                <p>your age is { age }</p>
                <button onClick={birthday}>birthday</button>
            </div>
        </div>
    );
};

Greetingf.propTypes = {
    name: PropTypes.string,
};

export default Greetingf;
