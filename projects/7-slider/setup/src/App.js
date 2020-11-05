/** @format */

import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
	const [reviews, setReviews] = useState(data);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const lastIndex = reviews.length - 1;
		if (index < 0) {
			setIndex(lastIndex);
		}
		if (index > lastIndex) {
			setIndex(0);
		}
	}, [index, reviews]);

	//设置自动slide
	useEffect(() => {
		let slider = setInterval(() => {
			setIndex(index + 1);
		}, 3000);
		return () => clearInterval(slider);
	}, [index]);

	return (
		<section className="section">
			<div className="title">
				<h2>
					<span>/</span>Reviews
				</h2>
			</div>
			<div className="section-center">
				{reviews.map((review, reviewIndex) => {
					const { id, image, name, title, quote } = review;
					let position = "nextSlide";
					if (reviewIndex === index) {
						position = "activeSlide";
					}
					if (
						reviewIndex === index - 1 ||
						(index === 0 && reviewIndex === reviews.length - 1) // 定位到最后一个review
					) {
						position = "lastSlide";
					}
					return (
						<article key={id} className={position}>
							<img
								className="person-img"
								src={image}
								s
								alt={name}
							/>
							<h4>{name}</h4>
							<p className="title">{title}</p>
							<p className="text">{quote}</p>
							<FaQuoteRight className="icon" />
						</article>
					);
				})}
				<button className="prev">
					<FiChevronLeft onClick={() => setIndex(index - 1)} />
				</button>
				<button className="next">
					<FiChevronRight onClick={() => setIndex(index + 1)} />
				</button>
			</div>
		</section>
	);
}

export default App;
