export function FormatCnpj(currentValue: number) {
  let updateValue = "" + currentValue;

  updateValue = updateValue.replace(/\D/g, "");
  updateValue = updateValue.replace(/^(\d{2})(\d)/, "$1.$2");
  updateValue = updateValue.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
  updateValue = updateValue.replace(/\.(\d{3})(\d)/, ".$1/$2");
  updateValue = updateValue.replace(/(\d{4})(\d)/, "$1-$2");

  return updateValue;
}

export function formatCPF(cpf: number) {
  let value = "" + cpf;
  value = value.replace(/[^\d]/g, "");

  return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

export function replaceCnpj(cnpj: string) {
  let newCnpj = cnpj.replaceAll(".", "");
  newCnpj = newCnpj.replace("/", "");
  newCnpj = newCnpj.replace("-", "");

  return newCnpj;
}

export function replaceCpf(cpf: string) {
  let newCpf = cpf.replaceAll(".", "");
  newCpf = newCpf.replace("-", "");

  return parseInt(newCpf);
}

export function replaceMoney(money: number) {
  let value = money.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 2
  });

  return value;
}