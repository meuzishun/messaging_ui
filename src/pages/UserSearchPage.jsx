import { UserSearchProvider } from '../contexts/UserSearchContext';
import UserSearch from '../components/UserSearch/UserSearch';
import { FriendsProvider } from '../contexts/FriendsContext';

function UserSearchPage() {
  return (
    <div>
      <FriendsProvider>
        <UserSearchProvider>
          <UserSearch />
        </UserSearchProvider>
      </FriendsProvider>
    </div>
  );
}

export default UserSearchPage;
