import { Link } from 'react-router-dom';

import { MdDashboard } from 'react-icons/md';
import { AiOutlineAreaChart } from 'react-icons/ai';
import { IoPeopleOutline } from 'react-icons/io5';

import './styles.scss';

// Trocar as tags "a" por Link
export function Sidebar() {
  return (
    <ul className="sidebar-container">
      <Link className="home-link active" to="/dashboard">
        <div>Web</div>
      </Link>
      
      <hr />

      <li>
        <Link 
          to="/dashboard"
          className="active"
        >
          <MdDashboard />
          <span>Dashboard</span>
        </Link>
      </li>

      <hr />

      <li className="margin-top">
        <Link  to="/dashboard/company">
          <AiOutlineAreaChart />
          <span>Empresa</span>
        </Link >
      </li>

      <li>
        <Link  to="/dashboard">
          <IoPeopleOutline />
          <span>Funcionário</span>
        </Link >
      </li>

    </ul>
  );
}