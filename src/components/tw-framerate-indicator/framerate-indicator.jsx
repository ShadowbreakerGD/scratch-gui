import React from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';

import styles from './framerate-indicator.css';

const FramerateIndicator = ({framerate}) => (
    <div className={styles.framerateContainer}>
        <div className={styles.framerateLabel}>
            <FormattedMessage
                defaultMessage="{framerate} FPS with interpolation"
                description="Label indicating project framerate when interpolation is enabled"
                id="tw.framerateIndicatorWithInterpolation"
                values={{
                    framerate: framerate
                }}
            />
        </div>
    </div>
);

FramerateIndicator.propTypes = {
    framerate: PropTypes.number
};

export default FramerateIndicator;
