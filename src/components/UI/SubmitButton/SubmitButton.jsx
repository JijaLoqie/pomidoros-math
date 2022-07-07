import classes from './SubmitButton.module.css';

function SubmitButton({ children, ...props }) {
	return (
		<button {...props} className={classes.myBtn}>
			{children}
		</button>
	);
}

export default SubmitButton;
