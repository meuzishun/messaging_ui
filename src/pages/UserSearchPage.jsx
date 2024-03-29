import { UserSearchProvider } from '../contexts/UserSearchContext';
import UserSearch from '../components/UserSearch/UserSearch';

function UserSearchPage() {
  return (
    <UserSearchProvider>
      <UserSearch />
    </UserSearchProvider>
  );
}

export default UserSearchPage;
