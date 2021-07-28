import cl from './PreloaderTwo.module.css';

const PreloaderTwo = (prop) => {
	return (
		<div className={cl.preloader}>
			<div className={cl.cssloader}>
				<div className={`${cl.cssloadInner} ${cl.cssloadOne}`}></div>
				<div className={`${cl.cssloadInner} ${cl.cssloadTwo}`}></div>
				<div className={`${cl.cssloadInner} ${cl.cssloadThree}`}></div>
			</div>
			<div className={cl.container}>
				<span>Loading</span>
				<div className={cl.itemOne}></div>
				<div className={cl.itemTwo}></div>
				<div className={cl.itemThree}></div>
			</div>
		</div>
	)
}
export default PreloaderTwo;