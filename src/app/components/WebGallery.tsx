import { useState } from 'react';
import './WebGallery.css';

import webKojima from '../../assets/react/kojima.webp';
import webLaika from '../../assets/react/laika.webp';
import webRad from '../../assets/react/rad.webp';
import webHumanInsights from '../../assets/react/humaninsights.webp';
import webPermira from '../../assets/react/permira.webp';
import webRabo from '../../assets/react/rabo.webp';
import webYF from '../../assets/react/youngfutures.webp';
import webSoulshop from '../../assets/react/soulshop.webp';

type GalleryDef = {
	imgSrc: string,
	title: string,
	desc: string,
	tech: string,
}

function WebGallery() {
	const gallery: GalleryDef[] = [{
		imgSrc: webKojima,
		title: "Kojima Productions",
		desc: "",
		tech: ""
	}, {
		imgSrc: webLaika,
		title: "Laika",
		desc: "",
		tech: ""
	}, {
		imgSrc: webRad,
		title: "Rad.tv",
		desc: "",
		tech: ""
	}, {
		imgSrc: webHumanInsights,
		title: "Human insights",
		desc: "By the Sydney Ethics Centre, Human insights is a thing",
		tech: ""
	}, {
		imgSrc: webPermira,
		title: "Permira Investments",
		desc: "",
		tech: ""
	}, {
		imgSrc: webRabo,
		title: "Rabobank",
		desc: "",
		tech: ""
	}, {
		imgSrc: webYF,
		title: "Young Futures",
		desc: "",
		tech: ""
	}, {
		imgSrc: webSoulshop,
		title: "Soulshop",
		desc: "",
		tech: ""
	}];
	const [visible, setVisible] = useState(webKojima);

	return (
		<div className="web-gallery-container">
			<div className="web-gallery">
				{gallery.map((galleryItem: GalleryDef, index: number) => (
					<div className={"web-gallery-item" + (visible == galleryItem.imgSrc ? ' on' : '')} key={'web-thumb-' + index}>
						<img src={galleryItem.imgSrc} alt="" />
						<div className="web-gallery-vitae">
							<div className="web-gallery-title">{galleryItem.title}</div>
							<div className="web-gallery-desc">{galleryItem.desc}</div>
						</div>
					</div>
				))}
			</div>
			<div className="web-gallery-thumbs">
				{gallery.map((galleryItem: GalleryDef, index: number) => (
					<button className="web-gallery-thumb" key={'web-thumb-' + index} onClick={() => setVisible(galleryItem.imgSrc)}><img src={galleryItem.imgSrc} alt="" /></button>
				))}
			</div>
		</div>
	)
}

export default WebGallery;
