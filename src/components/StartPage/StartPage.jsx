import cl from './StartPage.module.css'
import welcome from "../../image/welcome.png";

const StartPage = props => {
	return (
		<div className={cl.wrapper}>
			<img src={welcome} alt=""/>
		</div>
	)
}

export default StartPage;