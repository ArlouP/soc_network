import s from './Users.module.css';
import usersPhoto from '../../../images/users-avatar.jpg';
import { NavLink } from 'react-router-dom';




const Users = (props) => {

	let pages = Math.ceil(props.totalCount / props.pageSize);
	let pageNambers = [];
	for (let i = 1; i <= pages; i++) {
		pageNambers.push(i);
	}

	return (
		<div>
			<div>
				{
					pageNambers.map(page => {
						return (
							<span className={`${page === props.carrentPage && s.activePage} ${s.pageNambers}`}
								onClick={() => { props.changeCarrentPage(page) }}>{page}</span>
						)
					})}
			</div>
			<div>
				{
					props.users.map(user => {
						const path = '/profile/' + user.id;
						return (
							<div key={user.id}>
								<div>
									<div>
										<NavLink to={path}>
											<img className={s.usersAvatar} src={user.photos.large ? user.photos.large : usersPhoto} />
										</NavLink>
									</div>
									<div>{user.followed
										? <button onClick={() => { props.unfollow(user.id) }} >Follow</button>
										: <button onClick={() => { props.follow(user.id) }}>Unfollow</button>}</div>
								</div>
								<div>
									<p>Name:{user.name}</p>
									<p>Status:{user.status ? user.status : 'Статус отсутсвует'}</p>
									{/* <span>Country:{user.adress.country}, City:{user.adress.city}</span> */}
								</div>
							</div >)
					})
				}
			</div>
		</div>
	)
};


export default Users;