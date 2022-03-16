import s from './Preloader.module.css';
import preloader from '../../images/preloader.gif'

const Preloader = (props) => {
	return (<img className={s.preloader} src={preloader} alt="preloader" />)
}

export default Preloader;