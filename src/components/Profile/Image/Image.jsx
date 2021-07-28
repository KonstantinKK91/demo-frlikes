import image from "../../../image/image.jpg";
import cl from './Image.module.css';

function Image() {
	return (
		<div className={cl.section__header}>
			<img src={image} alt=""/>
		</div>
	)
}

export default Image;