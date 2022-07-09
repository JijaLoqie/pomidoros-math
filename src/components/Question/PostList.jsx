import React from 'react';
import QuestionBlock from './QuestionBlock';
import classes from './QuestionBlock.module.css';


const PostList = (props) => {
	return (
		<div className={classes.questionList}>
			{props.posts.map((el, index) =>
				(el.num1 === 999) ? <></>
					: <QuestionBlock handleCorrect={props.handleCorrect} post={{ num1: el.num1, num2: el.num2, operator: el.operator }}
						key={index} />
			)}
		</div>
	);
}
export default PostList;