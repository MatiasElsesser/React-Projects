import { Link } from '../Link'

export default function Page404 () {
  return (
    <>
      <div>
        <h1>This is NOT fine</h1>
        <img src='https://i.kym-cdn.com/entries/icons/mobile/000/018/012/this_is_fine.jpg' />
      </div>
      <Link to='/'> Go to home</Link>
    </>
  )
}
