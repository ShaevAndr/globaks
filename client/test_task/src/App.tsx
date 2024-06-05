import './App.css';
import { useUserStore } from './entities/user/model/userStore';
import { SearchUsers } from './features/search/UI/search';
import { ModalWindow } from './widgets/modal/modal';
import { UsersList } from './widgets/usersList/usersList';

function App() {
	const { currentUser } = useUserStore();
	return (
		<>
			<div className="App">
				{currentUser && <ModalWindow />}
				<SearchUsers />
				<UsersList />
			</div>
		</>
	);
}

export default App;
