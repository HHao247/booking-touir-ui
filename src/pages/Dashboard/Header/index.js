import { BiUserCircle } from 'react-icons/bi';

function HeaderAdmin() {
  return (
    <nav className="navbar navbar-light bg-red ">
      <div className="container-fluid">
        <div className="mr-auto"></div>
        <p className="navbar-brand">
          <BiUserCircle size={30} />
          Nguyễn Hoàng Hảo
        </p>
      </div>
    </nav>
  );
}

export default HeaderAdmin;
