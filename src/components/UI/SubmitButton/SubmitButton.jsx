import classes from './SubmitButton.module.css';
import * as React from 'react';

function SubmitButton({ children, ...props }) {
	return (
		<button {...props} className={classes.myBtn}>
			{children}
		</button>
	);
}

export default SubmitButton;
