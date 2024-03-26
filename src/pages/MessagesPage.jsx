import { MessagesProvider } from '../contexts/MessagesContext';
import MessagesDashboard from '../components/MessagesDashboard/MessagesDashboard';

function MessagesPage() {
  return (
    <MessagesProvider>
      <MessagesDashboard />
    </MessagesProvider>
  );
}

export default MessagesPage;
