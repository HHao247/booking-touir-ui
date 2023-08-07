export function getQueryStr(name) {
  return new URLSearchParams(window.location.search).get(name);
}

export function formatNumber(number) {
  return (
    new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' })
      .format(number)
      .replace(/₫/g, '')
      .replace(/,/g, '.')
      .trim() + ' VNĐ'
  );
}
