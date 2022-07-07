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
				return num1 * num2;
			case '+':
				return num1 + num2;
			case '-':
				return num1 - num2;
			default:
				return Error();
		}
	}
	const handleClick = (e) => {
		const real = solveTask(props.post.num1, props.post.num2, props.post.operator);
		if (real == answer) {
			console.log('correct!');
			props.handleCorrect(props.post);
		} else {
			console.log('error!');
			console.log(answer);
			console.log(real);
		}
	}
	return (
		<div className={classes.question_body}>
			<LabelTask>{props.post.num1} {props.post.operator} {props.post.num2}</LabelTask>
			<MyInput placeholder='   _  _  _  _  _  _  _  _  _   ' type='number' onChange={handleChange}></MyInput>
			<SubmitButton className={classes.SubmitButton} onClick={handleClick}>Готово</SubmitButton>
		</div>
	);
}

export default QuestionBlock;
