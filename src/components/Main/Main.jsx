import * as React from 'react';
import { useEffect, useState } from 'react';
import PostList from '../Question/PostList';
import classes from './Main.module.css';

const Main = (props) => {
	const timeInterval = 3000;
	const [posts, setPosts] = useState([
	]);
	useEffect(() => {
		const getPostSize = (taskPost) => {
			var col = 0;
			for (let i = 0; i < taskPost.length; i++) {
				if (taskPost[i].operator != '??') {
					col++;
				}
			}
			return col;
		}

		const operators = ['+', '-', '*'];
		const addNewTask = () => {
			const num1 = Math.floor(Math.random() * 100);
			const num2 = Math.floor(Math.random() * 100);
			const operatorIndex = Math.floor(Math.random() * operators.length);
			setPosts(posts => (getPostSize(posts) < 5) ? [...posts, { num1: num1, num2: num2, operator: operators[operatorIndex] }] : posts);
		}
		const interval = setInterval(addNewTask, timeInterval);
		return () => clearInterval(interval);
	}, []);


	const handleCorrect = (post) => {
		setPosts(posts.flatMap((element, index) => {
			if (element.num1 === post.num1 &&
				element.num2 === post.num2 &&
				element.operator === post.operator) {
				return { num1: 999, num2: -999, operator: '??' };
			} else {
				return element;
			}
		}))
	}
	return (
		<div className={classes.math_panel}>
			<div>
				{
					(posts.length === 0) ? <h1>No task</h1>
						: <PostList className={classes.questionList} handleCorrect={handleCorrect} posts={posts} />
				}
			</div>
		</div>
	);
}

export default Main;
