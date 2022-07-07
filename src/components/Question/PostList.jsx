import React from 'react';
import QuestionBlock from './QuestionBlock';


const PostList = (props) => {
	return (
		<div>
			{props.posts.map((el, index) =>
				<QuestionBlock handleCorrect={props.handleCorrect} post={{ num1: el.num1, num2: el.num2, operator: el.operator }}
					key={index} />
			)}
		</div>
	);
}
export default PostList;