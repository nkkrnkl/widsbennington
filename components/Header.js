export default function Header({ title, test }) {
  return <
      <h1> {test} </h1>
//       <img src="public/wids-black-stacked.png" alt="logo" width="50" height="50">
      <h1 className="title">{title}</h1>
    > 
}
