import MyInput from '../UI/MyInput/MyInput';
import SubmitButton from '../UI/SubmitButton/SubmitButton';
import LabelTask from '../UI/LabelTask/LabelTask';
import classes from './QuestionBlock.module.css';
import { useState } from 'react';

function QuestionBlock(props) {
	const [answer, setAnswer] = useState('');
	const [correct, setCorrect] = useState(false);
	const handleChange = (e) => {
		setAnswer(e.target.value);
	}
	function sleep(time) {
		return new Promise((resolve) => setTimeout(resolve, time));
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
			setCorrect(true);
			console.log('correct!');
			sleep(2000).then(() => props.handleCorrect(props.post));

		} else {
			console.log('error!');
		}
		setAnswer('');
	}
	return (
		<div style={(correct) ? { transition: '1s', transform: 'translate(100vw, 0)' } : {}} className={classes.question_body}>
			<LabelTask className={classes.MyInput}>{props.post.num1} {props.post.operator} {props.post.num2}</LabelTask>
			<form onSubmit={handleClick}>
				<MyInput value={answer} placeholder='   _  _  _  _  _  _  _  _  _   ' type='number' onChange={handleChange}></MyInput>
				<SubmitButton type='submit' className={classes.SubmitButton}>Готово</SubmitButton>
			</form>
		</div>
	);
}

export default QuestionBlock;
