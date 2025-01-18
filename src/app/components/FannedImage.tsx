
import './FannedImage.css';

type props = {
	image: string;
}

function FannedImage({image}: props) {

	return (
		<div className="fanned-image"><img src={image} alt="" /></div>
	)
}

export default FannedImage;
