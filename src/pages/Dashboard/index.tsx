import { useEffect } from "react";
import { Header } from "../../components/Header";

import { Sidebar } from '../../components/Sidebar';

import './styles.scss';

export function Dashboard() {

  useEffect(() => {
    document.title = "Web | Dashboard";
  }, [])

  return (
    <div className="wrapper">
      <Sidebar dashboardIsActive/>
      <main>
        <Header/>
      </main>
    </div>
  );
}