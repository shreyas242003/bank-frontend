import Nav from "./components/nav";
const Header = ({ toggleMenu }) => {
  return (
    <header className="bg-[#004a8e] sticky top-0 z-40">
      <Nav toggleMenu={toggleMenu} />
    </header>
  );
};
export default Header;
