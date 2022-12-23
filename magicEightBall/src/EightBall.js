import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import answers from './answers.js';
import './EightBall.css';

const EightBall = (props) => {
	const genRandom = () => Math.floor(Math.random() * answers.length);
	const getRandomAns = () => {
		let answer = answers[genRandom()];
		setStart(answer.msg);
		setColor(answer.color);
	};
	const restart = () => {
		setStart('Think of a Question');
		setColor('black');
	};
	const [ start, setStart ] = useState('Think of a Question');
	const [ color, setColor ] = useState('black');
	return (
		<Stack gap={2} className="col-md-5 mx-auto">
		<div className="title-holder">
				<img src={'https://cdn.shopify.com/s/files/1/2782/2378/files/lighter-4.png?crop=center&height=2048&v=1645665194&width=2048'} width="200" alt="" />
        </div>
    
			<div className="d-grid gap-2">
				<div className="Eightball" style={{ backgroundColor: color }} onClick={getRandomAns}>
					<p className="Eightball-text">{start}</p>
				</div>
				<Button variant="primary" size="lg" onClick={restart}>
					New Game
				</Button>
			</div>
		</Stack>
	);
};

export default EightBall;
