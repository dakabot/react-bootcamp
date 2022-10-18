import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';


const ContactListComponent = () => {

    const exampleContact = new Contact("example_name", "example_lastName", "lorem@example.com", true)

    return (
        <div>
            <h1>Your contacts:
            </h1>
            <ContactComponent contact={ exampleContact }></ContactComponent>
        </div>
    );
};

export default ContactListComponent;
