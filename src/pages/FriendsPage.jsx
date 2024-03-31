import Friends from '../components/Friends/Friends';
import { FriendsProvider } from '../contexts/FriendsContext';

function FriendsPage() {
  return (
    <FriendsProvider>
      <Friends />
    </FriendsProvider>
  );
}

export default FriendsPage;
