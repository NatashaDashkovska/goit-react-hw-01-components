import { ProfileCard } from './components/Profile/Profile';
import { Statistics } from './components/Statistics/Statistics';
import { FriendList } from './components/FriendList/FriendList';
import { TransactionHistory } from './components/TransactionHistory/TransactionHistory';
import './App.css';

import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import items from './data/transactions.json'


function App() {
  return (
    <div className="App">
      <ProfileCard
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={items} />
    </div>
  );
}

export default App;
