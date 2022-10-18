import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactComponent = ({ contact }) => {
    return (
        <div>
            <p>
                Name: { contact.name } { contact.lastName }
            </p>
            <p>
                Email: { contact.email }
            </p>
            <p>
                { contact.status ? "Contacto en linea" : "Contacto no disponible"}
            </p>
        </div>
    );
};

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
}

export default ContactComponent;
