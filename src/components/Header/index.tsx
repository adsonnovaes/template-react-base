import './styles.scss';

export function Header () {
  return (
    <header className="header-container">
      <ul>
        <div className="separator"></div>
        <li>
          {/* Subistiruir a tag "a" por Link */}
          <a href="/">
            <span>Adson Novaes</span>
            <img 
              src="https://github.com/adsonnovaes.png" 
              alt="Foto do perfil"
            />
          </a>
        </li>
      </ul>
    </header>
  )
}