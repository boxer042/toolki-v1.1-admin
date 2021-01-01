export function replacePhone(phone: string) {
  if (phone === undefined || phone === '' || phone === null) {
    return phone;
  } else {
    return phone
      .replace(/[^0-9]/g, '')
      .replace(
        /(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,
        '$1-$2-$3',
      )
      .replace('--', '-');
  }
}

export function formatBusiness(business: string) {
  if (business === undefined || business === '' || business === null) {
    return business;
  } else {
    return business.replace(/(\d{3})(\d{2})(\d{5})/, '$1-$2-$3');
  }
}
