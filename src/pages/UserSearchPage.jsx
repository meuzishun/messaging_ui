import { UserSearchProvider } from '../contexts/UserSearchContext';
import { FriendsProvider } from '../contexts/FriendsContext';
import UserSearch from '../components/UserSearch/UserSearch';

function UserSearchPage() {
  return (
    <UserSearchProvider>
      <FriendsProvider>
        <UserSearch />
      </FriendsProvider>
    </UserSearchProvider>
  );
}

export default UserSearchPage;
