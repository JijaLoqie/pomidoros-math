import classes from './MyButton.module.css';
import * as React from 'react';

function MyButton({ children, ...props }) {
	return (
		<button {...props} className={classes.myBtn}>
			{children}
		</button>
	);
}

export default MyButton;
