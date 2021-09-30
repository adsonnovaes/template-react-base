import { MdDashboard } from 'react-icons/md';
import { AiOutlineAreaChart } from 'react-icons/ai';
import { IoPeopleOutline } from 'react-icons/io5';
import './styles.scss';
import { Link } from 'react-router-dom';

// Trocar as tags "a" por Link
export function Sidebar() {
  return (
    <ul className="sidebar-container">
      <Link className="home-link active" to="/dashboard">
        <div>Web</div>
      </Link>
      
      <hr />

      <li>
        <a 
          href="/dashboard"
          className="active"
        >
          <MdDashboard />
          <span>Dashboard</span>
        </a>
      </li>

      <hr />

      <li className="margin-top">
        <a href="/dashboard">
          <AiOutlineAreaChart />
          <span>Empresa</span>
        </a>
      </li>

      <li>
        <a href="/dashboard">
          <IoPeopleOutline />
          <span>Funcionário</span>
        </a>
      </li>

    </ul>
  );
}