import { UserSearchProvider } from '../contexts/UserSearchContext';
import UserSearch from '../components/UserSearch/UserSearch';
import { FriendsProvider } from '../contexts/FriendsContext';

function UserSearchPage() {
  return (
    <FriendsProvider>
      <UserSearchProvider>
        <UserSearch />
      </UserSearchProvider>
    </FriendsProvider>
  );
}

export default UserSearchPage;
