import { Link } from 'react-router-dom';
import { IoExitOutline } from 'react-icons/io5';

import './styles.scss';

export function Header() {
  return (
    <header className="header-container">
      <ul>
        <li>
          {/* Subistiruir a tag "a" por Link */}
          <Link to="/dashboard">
            <span>Adson Novaes</span>
            <img
              src="https://github.com/adsonnovaes.png"
              alt="Foto do perfil"
            />
          </Link>
        </li>
        <div className="separator"></div>

        <div className="exit-container">
          <button>
            <span>
              Sair
            </span>
            <IoExitOutline
              size={20}
            />
          </button>
        </div>
      </ul>
    </header>
  )
}