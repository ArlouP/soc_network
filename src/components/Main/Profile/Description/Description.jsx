import Preloader from "../../../../common/Preloader/Preloader";
import s from "./Description.module.css"

const Description = (props) => {
	if(!props.carrentProfile) return <Preloader/>
	return (
		<div className={s.content}>
			<img src={props.carrentProfile.photos.small} alt="" />
		</div>
	)
}

export default Description;