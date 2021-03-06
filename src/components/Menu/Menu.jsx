import { useEffect, useState } from 'react';
import * as React from 'react';
import MyButton from '../UI/MyButton/MyButton';
import classes from './Menu.module.css';

function Menu() {
	return (
		<menu>
			<li><MyButton>Математика</MyButton></li>
			<li><MyButton>Pomodoro Session</MyButton></li>
			<li><MyButton>Запомидорить страницу</MyButton></li>
			<li><MyButton>Помидор</MyButton></li>
		</menu>
	);
}

export default Menu;
