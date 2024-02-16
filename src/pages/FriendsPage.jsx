import { FriendsProvider } from '../contexts/FriendsProvider';
import Friends from '../components/Friends/Friends';

function FriendsPage() {
  return (
    <FriendsProvider>
      <Friends />
    </FriendsProvider>
  );
}

export default FriendsPage;
