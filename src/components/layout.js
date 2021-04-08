const Layout = ({ children, name })  => {
  document.title = name;
  return (
    <div>
      <header>
        <h1>Primariqui { name }</h1>
      </header>

      <main>
        { children }
      </main>

      <footer>
        <p>Todos los derechos reservados a { name }, cabrón</p>
      </footer>
      
    </div>
  )
}

export default Layout;