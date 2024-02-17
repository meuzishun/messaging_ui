import { FriendsProvider } from '../contexts/FriendsContext';
import Friends from '../components/Friends/Friends';

function FriendsPage() {
  return (
    <FriendsProvider>
      <Friends />
    </FriendsProvider>
  );
}

export default FriendsPage;
