import MyInput from '../UI/MyInput/MyInput';
import SubmitButton from '../UI/SubmitButton/SubmitButton';
import LabelTask from '../UI/LabelTask/LabelTask';
import classes from './QuestionBlock.module.css';
import { useState } from 'react';

function QuestionBlock(props) {
	const [answer, setAnswer] = useState(0);

	const handleChange = (e) => {
		setAnswer(e.target.value);
	}
	const solveTask = (num1, num2, operator) => {
		switch (operator) {
			case '*':
				return (num1) * (num2);
			case '+':
				return num1 + num2;
			case '-':
				return num1 - num2;
			default:
				return Error();
		}
	}
	const handleClick = (e) => {
		e.preventDefault();
		const real = solveTask(props.post.num1, props.post.num2, props.post.operator);
		if (real == answer) {
			console.log('correct!');
			props.handleCorrect(props.post);
		} else {
			console.log('error!');
		}
	}
	return (
		<div className={classes.question_body}>
			<LabelTask className={classes.MyInput}>{props.post.num1} {props.post.operator} {props.post.num2}</LabelTask>
			<form onSubmit={handleClick}>
				<MyInput value='' placeholder='   _  _  _  _  _  _  _  _  _   ' type='number' onChange={handleChange}></MyInput>
				<SubmitButton type='submit' className={classes.SubmitButton}>Готово</SubmitButton>
			</form>
		</div>
	);
}

export default QuestionBlock;
