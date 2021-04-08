const Layout = ({ children })  => {

  return (
    <div>
      <header>
        <h1>Primariqui Hostel</h1>
      </header>

      <main>
        { children }
      </main>

      <footer>
        <p>Todos los derechos reservados cabrón</p>
      </footer>
      
    </div>
  )
}

export default Layout;