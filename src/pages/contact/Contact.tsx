import React, { FC } from 'react';
import { useIntl } from 'react-intl';

const Contact: FC = () => {
    const intl = useIntl();
    return <div>{intl.formatMessage({ id: 'contact.content' })}</div>;
};

export default Contact;
