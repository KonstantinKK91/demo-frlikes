import cl from './Preloader.module.css';

const Preloader = (prop) => {
	return (
		<div className={cl.preloader}>
			<div className={cl.loader}>
				<div className={cl.dot}></div>
				<div className={cl.dot}></div>
				<div className={cl.dot}></div>
				<div className={cl.dot}></div>
				<div className={cl.dot}></div>
			</div>
		</div>
	)
}
export default Preloader;