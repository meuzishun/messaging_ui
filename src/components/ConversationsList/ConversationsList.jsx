import { useRef } from 'react';
import useMessages from '../../hooks/useMessages';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import LoadingMsg from '../LoadingMsg/LoadingMsg';
import ConversationPreview from '../ConversationPreview/ConversationPreview';
import styles from './ConversationsList.module.scss';

function ConversationsList() {
  const loadingRef = useRef(null);
  const conversationsRef = useRef(null);
  const { conversations, isLoading } = useMessages();
  const nodeRef = isLoading ? loadingRef : conversationsRef;

  return (
    <SwitchTransition mode='out-in'>
      <CSSTransition
        key={isLoading}
        nodeRef={nodeRef}
        addEndListener={(done) => {
          nodeRef.current.addEventListener('transitionend', done, false);
        }}
        timeout={300}
        classNames={{
          appear: styles['fade-appear'],
          appearActive: styles['fade-appear-active'],
          appearDone: styles['fade-appear-done'],
          enter: styles['fade-enter'],
          enterActive: styles['fade-enter-active'],
          enterDone: styles['fade-enter-done'],
          exit: styles['fade-exit'],
          exitActive: styles['fade-exit-active'],
          exitDone: styles['fade-exit-done'],
        }}
        unmountOnExit
      >
        {isLoading ? (
          <div ref={loadingRef}>
            <LoadingMsg text='Loading...' />
          </div>
        ) : (
          <div className={styles['conversations-list']} ref={conversationsRef}>
            {conversations?.length < 1 ? (
              <div>
                <p className={styles['msg']}>No messages</p>
              </div>
            ) : (
              conversations &&
              conversations
                .reverse()
                .map((conversation) => (
                  <ConversationPreview
                    key={conversation[0]._id}
                    conversation={conversation}
                  />
                ))
            )}
          </div>
        )}
      </CSSTransition>
    </SwitchTransition>
  );
}

export default ConversationsList;
