import { useState } from 'react';
import Bubble from './Bubble';
import './WebGallery.css';

import webKojima from '../../assets/react/kojima.webp';
import webLaika from '../../assets/react/laika.webp';
import webRad from '../../assets/react/rad.webp';
import webHumanInsights from '../../assets/react/humaninsights.webp';
import webPermira from '../../assets/react/permira.webp';
import webRabo from '../../assets/react/rabo.webp';
import webYF from '../../assets/react/youngfutures.webp';
import webSoulshop from '../../assets/react/soulshop.webp';
import webNeuro from '../../assets/react/neuro.webp';
import webLiv from '../../assets/react/liv.webp';

type GalleryDef = {
	imgSrc: string,
	title: string,
	desc: string,
	tech: string[],
}

function WebGallery() {
	const gallery: GalleryDef[] = [{
		imgSrc: webKojima,
		title: "Kojima Productions",
		desc: "A new presence for the famous video game studio, built with Drupal and modern web technologies for simplicity of site management.",
		tech: ["Drupal", "HTML/CSS", "Javascript", "Greensock"]
	}, {
		imgSrc: webLaika,
		title: "Laika",
		desc: "Coinciding with the release of Kubo and the Two String, this website rebuild helped Laika promote and display their amazing works of stop-motion.",
		tech: ["Ruby CMS", "HTML/CSS", "Coffeescript"]
	}, {
		imgSrc: webRad,
		title: "Rad.tv",
		desc: "A rethink of Rad's NFT and TV offerings, these React components and page layout were built to align with the company's existing component library, to seamlessly embed over time.",
		tech: ["React", "Typescript"]
	}, {
		imgSrc: webNeuro,
		title: "Neurosensation",
		desc: "A short-lived but exciting promotion of sexual confidence and wellbeing.",
		tech: ["HTML/CSS", "Typescript"]
	}, {
		imgSrc: webPermira,
		title: "Permira Investments",
		desc: "This broad website's high data intensity needed a strong CMS, cache and state management, all with an on-brand design.",
		tech: ["React", "NextJS", "Typescript"]
	}, {
		imgSrc: webRabo,
		title: "Rabobank",
		desc: "Mission-critical uptime and site integrity and security made this project uniquely professional.",
		tech: ["Umbraco", "HTML/CSS", "Javascript"]
	}, {
		imgSrc: webHumanInsights,
		title: "Human insights",
		desc: "By the Sydney Ethics Centre, Human insights is a demonstration of what could be - behaviour change and awareness of ethics, biases and lenses.",
		tech: ["HTML/CSS", "Typescript", "ChatGPT"]
	}, {
		imgSrc: webYF,
		title: "Young Futures",
		desc: "Built and deployed well undertime and budget, this website facilitated the Young Futures grant, and goes on to be the home for the YOung Futures Organisation.",
		tech: ["HTML/CSS", "Typescript", "Wordpress"]
	}, {
		imgSrc: webSoulshop,
		title: "Soulshop",
		desc: "Faith-based television and YouTube programming were the main feature in this multimedia site for all religions.",
		tech: ["HTML/CSS", "Typescript", "Shopify"]
	}, {
		imgSrc: webLiv,
		title: "Liv",
		desc: "For people living with dementia and their carers, this online platform helps users schedule tasks and support so that the insurmountable feels possible again.",
		tech: ["NodeJS CMS", "HTML/CSS", "Typescript"]
	}];
	const [visible, setVisible] = useState(webKojima);

	const next = () => {
		const screenWidth = window.innerWidth;
		document.querySelector('.web-gallery')!.scrollTo({ left: document.querySelector('.web-gallery')!.scrollLeft + screenWidth, behavior: 'smooth' });
	}

	const prev = () => {
		const screenWidth = window.innerWidth;
		document.querySelector('.web-gallery')!.scrollTo({ left: document.querySelector('.web-gallery')!.scrollLeft - screenWidth, behavior: 'smooth' });
	}

	return (
		<div className="web-gallery-container">
			<div className="web-gallery">
				{gallery.map((galleryItem: GalleryDef, index: number) => (
					<div className={"web-gallery-item" + (visible == galleryItem.imgSrc ? ' on' : '')} key={'web-thumb-' + index}>
						<img src={galleryItem.imgSrc} alt="" />
						<div className="web-gallery-vitae">
							<div className="web-gallery-title">{galleryItem.title}</div>
							<div className="web-gallery-desc">{galleryItem.desc}</div>
							<div className="web-gallery-tech-container">
								{galleryItem.tech.map((tech: string, index: number) => (
									<div className="web-gallery-tech" key={"tech-"+index}>
										<Bubble color="primary">{tech}</Bubble>
									</div>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="web-gallery-thumbs">
				{gallery.map((galleryItem: GalleryDef, index: number) => (
					<button className="web-gallery-thumb" key={'web-thumb-' + index} onClick={() => setVisible(galleryItem.imgSrc)}><img src={galleryItem.imgSrc} alt="" /></button>
				))}
			</div>
			<div className="web-gallery-controls carousel-controls">
				<button onClick={prev} className="left"></button>
				<button onClick={next} className="right"></button>
			</div>
		</div>
	)
}

export default WebGallery;
