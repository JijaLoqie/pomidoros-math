import { React, useEffect, useState } from 'react';
import PostList from '../Question/PostList';
import classes from './Main.module.css';

const Main = (props) => {
	const timeInterval = 3000;
	const [posts, setPosts] = useState([
	]);

	useEffect(() => {
		const operators = ['+', '-', '*'];
		const addNewTask = () => {
			const num1 = Math.floor(Math.random() * 100);
			const num2 = Math.floor(Math.random() * 100);
			const operatorIndex = Math.floor(Math.random() * operators.length);
			setPosts(posts => [...posts, { num1: num1, num2: num2, operator: operators[operatorIndex] }]);
		}
		const interval = setInterval(addNewTask, timeInterval);
		return () => clearInterval(interval);
	}, []);


	const handleCorrect = (post) => {
		setPosts(posts.filter((element) => {
			return (element.num1 !== post.num1 ||
				element.num2 !== post.num2 ||
				element.operator !== post.operator)
		}))
	}
	return (
		<div className={classes.math_panel}>
			<div>
				<PostList handleCorrect={handleCorrect} posts={posts} />
			</div>
		</div>
	);
}

export default Main;
