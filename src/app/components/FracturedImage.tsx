
import './FracturedImage.css';

type props = {
	image: string;
}

function FracturedImage({image}: props) {

	return (
		<div className="fractured-image"><img src={image} alt="" /></div>
	)
}

export default FracturedImage;
