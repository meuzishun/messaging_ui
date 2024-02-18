import { UserSearchProvider } from '../contexts/UserSearchContext';
import UserSearch from '../components/UserSearch/UserSearch';

function UserSearchPage() {
  return (
    <div>
      <UserSearchProvider>
        <UserSearch />
      </UserSearchProvider>
    </div>
  );
}

export default UserSearchPage;
