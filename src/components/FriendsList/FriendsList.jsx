import { useRef } from 'react';
import useFriends from '../../hooks/useFriends';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import LoadingMsg from '../LoadingMsg/LoadingMsg';
import Friend from '../Friend/Friend';
import styles from './FriendsList.module.scss';

function FriendsList() {
  const loadingRef = useRef(null);
  const friendsRef = useRef(null);
  const { friends, isLoading } = useFriends();
  const nodeRef = isLoading ? loadingRef : friendsRef;

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
            <LoadingMsg />
          </div>
        ) : (
          <div className={styles['friends-list']} ref={friendsRef}>
            {friends?.length < 1 ? (
              <div>
                <p className={styles['no-friends']}>You have no friends</p>
              </div>
            ) : (
              friends?.map((friend) => (
                <Friend friend={friend} key={friend._id} />
              ))
            )}
          </div>
        )}
      </CSSTransition>
    </SwitchTransition>
  );
}

export default FriendsList;
