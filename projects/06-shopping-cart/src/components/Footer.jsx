export function Footer({ filters }) {
  return (
    <footer className="footer">
      {JSON.stringify(filters)}
      <h4>Prueba técnica de React</h4>
      <span>@diegogn</span>
      <h5>Shopping cart con useContext & useReducer</h5>
    </footer>
  )
}
