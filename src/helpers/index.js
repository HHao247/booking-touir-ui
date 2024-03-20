export function getQueryStr(name) {
  return new URLSearchParams(window.location.search).get(name);
}
export function getNameSearch(){
  const url = new URL(window.location.href);
  const searchText = url.searchParams.get('searchText');
  return searchText;
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
export function formatDate(dateTimeString) {
  const dateTime = new Date(dateTimeString);
  const day = dateTime.getDate();
  const month = dateTime.getMonth() + 1;
  const year = dateTime.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;
  return formattedDate;
}
export function mappingPostData(item) {
  // let moTa = item.moTa.replace('<p>', '');
  // moTa = moTa.replace('</p>', '');
  // let excerpt = item.moTa.replace('<p>', '');
  // excerpt = excerpt.replace('</p>', '');
  return {
    maTour: item.maTour,
    phuongTien: item.phuongTien ?? 'Oto',
    diemDen: item.diemDen,
    diemDi:item.diemDi,
    gia:item.gia,
    time:item.loaiTour.tenLoaiTour,
    ngayBatDau:item.ngayBatDau,
    moTa:item.moTa,
    image:item.image,
  };
}


export function convertDateFormat(dateString) {
  const parts = dateString.split('/');
  const day = parts[0];
  const month = parts[1];
  const year = parts[2];
  const isoDate = year + '-' + month + '-' + day + 'T00:00:00Z';
  return isoDate;
}