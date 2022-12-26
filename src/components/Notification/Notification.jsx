import propTypes from 'prop-types';
import css from './Notification.module.css';

export const Notification = ({ warningText }) => (
    <p className={css.warningStyle}>{warningText}</p>
);

Notification.propTypes = {
    warningText: propTypes.string.isRequired,
}