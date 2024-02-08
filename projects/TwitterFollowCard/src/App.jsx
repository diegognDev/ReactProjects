import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App() {
  const users = [
    { userName: 'JerryNYC', isFollowing: true, name: 'Jerry' },
    { userName: 'Carla123', isFollowing: false, name: 'Carla' },
  ]
  return (
    <>
      {users.map((user) => {
        const { userName, name, isFollowing } = user
        return (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            name={name}
            isFollowing={isFollowing}
          />
        )
      })}
    </>
  )
}
