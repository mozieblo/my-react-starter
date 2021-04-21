import React, { FC } from 'react';
import { useIntl } from 'react-intl';

const About: FC = () => {
    const intl = useIntl();
    return <div>{intl.formatMessage({ id: 'about.content' })}</div>;
};

export default About;
