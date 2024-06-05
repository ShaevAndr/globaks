import { User } from '@/shared/lib/serverApi/types';
import classes from './usersList.module.css';
import { UserCard } from '../../shared/UI/userCard/userCard';
import { useUserStore } from '@/entities/user/model/userStore';

export const UsersList = (): JSX.Element => {
	const { setCurrentUser, users, isLoading } = useUserStore();

	const selectUser = (user: User) => {
		setCurrentUser(user);
	};

	return (
		<div className={classes['users-list']}>
			{isLoading && <div>Загрузка...</div>}
			{users.map((user) => (
				<UserCard user={user} selectUser={selectUser} />
			))}
		</div>
	);
};
