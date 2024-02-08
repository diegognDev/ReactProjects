import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App() {
  return (
    <>
      <TwitterFollowCard userName={'JoeBloggs123'} name={'Joe Bloggs'} />
      <TwitterFollowCard
        userName={'SarahJohnson456'}
        name={'Sarah Johnson'}
        showFollowButton={false}
      />
    </>
  )
}
