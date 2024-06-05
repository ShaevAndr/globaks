import classes from './userCard.module.css';
import { PhoneIcon } from '../phoneIcon';
import { EmailIcon } from '../emailIcon';
import { User } from '@/shared/lib/serverApi/types';

type UserCardProps = {
	user: User;
	selectUser: (user: User) => void;
};
export const UserCard = ({ user, selectUser }: UserCardProps): JSX.Element => {
	return (
		<article className={classes['card']} onClick={() => selectUser(user)}>
			<h2 className={classes['card__title']}>{user.name}</h2>
			<div className={classes['card__info']}>
				<div className={classes['card__info-icon']}>
					<PhoneIcon />
				</div>
				<p>{user.phone}</p>
			</div>
			<div className={classes['card__info']}>
				<div className={classes['card__info-icon']}>
					<EmailIcon />
				</div>
				<p>{user.email}</p>
			</div>
		</article>
	);
};
