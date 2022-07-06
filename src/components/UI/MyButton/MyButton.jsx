import classes from './MyButton.module.css';

function MyButton({ children, ...props }) {
	return (
		<button className={classes.myBtn}>
			{children}
		</button>
	);
}

export default MyButton;
