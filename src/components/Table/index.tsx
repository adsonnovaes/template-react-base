import { ReactNode } from 'react';
import "./styles.scss";

type TableProps = {
  children?: ReactNode;
}

export function Table({
  children
}: TableProps) {
  return (
    <>
      <div className="middle">

        <div className="container-table">
          <table>
            {children}
          </table>
        </div>

      </div>

      <div className="gap-footer"></div>
    </>
  );
}