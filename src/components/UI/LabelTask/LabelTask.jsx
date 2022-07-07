import classes from './LabelTask.module.css';

function LabelTask({ children, ...props }) {
	return (
		<label {...props} className={classes.lbl}>
			{children}
		</label>
	);
}

export default LabelTask;
