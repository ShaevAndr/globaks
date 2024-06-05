import { useUserStore } from '@/entities/user/model/userStore';
import classes from './modal.module.css';
import { CloseIcon } from '@/shared/UI/closeIcon';

export const ModalWindow = (): JSX.Element => {
	const { currentUser, setCurrentUser } = useUserStore();

	const closeModal = () => {
		setCurrentUser(null);
	};

	return (
		<div className={classes['modal']} onClick={closeModal}>
			<div className={classes['modal-window']} onClick={(e) => e.stopPropagation()}>
				<div className={classes['modal-window__header']}>
					<h2>{currentUser?.name}</h2>
					<div onClick={closeModal}>
						<CloseIcon />
					</div>
				</div>
				<div className={classes['modal-window__info']}>
					<div className={classes['modal-window__info-title']}>
						<p>Телефон:</p>
						<p>Почта:</p>
						<p>Дата приема:</p>
						<p>Должность:</p>
						<p>Подразделение:</p>
					</div>
					<div className={classes['modal-window__info-data']}>
						<p title={currentUser?.phone}>{currentUser?.phone}</p>
						<p title={currentUser?.email}>{currentUser?.email}</p>
						<p title={currentUser?.hire_date}>{currentUser?.hire_date}</p>
						<p title={currentUser?.position_name}>{currentUser?.position_name}</p>
						<p title={currentUser?.department}>{currentUser?.department}</p>
					</div>
				</div>
				<div className={classes['modal-window__info-desc']}>
					<p>Дополнительная информация:</p>
					<p>
						Разработчики используют текст в качестве заполнителя макта страницы. Разработчики используют текст в качестве заполнителя макта
						страницы.
					</p>
				</div>
			</div>
		</div>
	);
};
