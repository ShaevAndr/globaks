import { useUserStore } from '@/entities/user/model/userStore';
import classes from './search.module.css';
import { SearchIcon } from '@/shared/UI/searchIcon';
import { useEffect, useState } from 'react';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { fetchUsers } from '@/shared/lib/serverApi/api';

export const SearchUsers = (): JSX.Element => {
	const [inputSearch, setInputSearch] = useState<string>('');
	const debouncedSearch = useDebounce(inputSearch, 1000);
	const { setUsers, setIsLoading } = useUserStore();

	useEffect(() => {
		setIsLoading(true);
		fetchUsers(debouncedSearch)
			.then((data) => {
				if (data.status === 'success') {
					setUsers(data.data);
				} else {
					console.log(data.data);
				}
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [debouncedSearch]);

	return (
		<div className={classes['search-wrapper']}>
			<input type="text" placeholder="Поиск" onChange={(e) => setInputSearch(e.target.value)} />
			<SearchIcon />
		</div>
	);
};
