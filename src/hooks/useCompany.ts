import db_company from '../data/companies.json';
import db_office from '../data/office.json';

export function useCompany(idCompany: string, idCargo: string) {

  const cargo = db_office.find(office => {
    let id = parseInt(idCargo);
    return office.id === id;
  });

  const company = db_company.find(company => {
    let id = parseInt(idCompany);
    return company.id === id;
  });

  const index = db_company.findIndex(company => {
    let id = parseInt(idCompany);
    return company.id === id;
  });

  return {
    company,
    index,
    cargo
  };
}