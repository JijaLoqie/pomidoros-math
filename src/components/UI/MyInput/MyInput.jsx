import classes from './MyInput.module.css';
import * as React from 'react';

function MyInput(props) {
	return (
		<input {...props} className={classes.myInpt}>
		</input>
	);
}

export default MyInput;
