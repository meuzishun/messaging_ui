import MessagesDashboard from '../components/MessagesDashboard/MessagesDashboard';
import { MessagesProvider } from '../contexts/MessagesContext';

function MessagesPage() {
  return (
    <>
      <MessagesProvider>
        <MessagesDashboard />
      </MessagesProvider>
    </>
  );
}

export default MessagesPage;
