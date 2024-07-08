import { Link, useNavigate } from "react-router-dom";
import { User } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { handleLogout } from "../../pages/auth/common/store";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuItem,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
const NavLinks = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.auth);

  const handleLoginClick = () => {
    navigate("/login");
  };
  const handleLogOut = () => {
    dispatch(handleLogout());
    navigate("/");
  };

  return (
    <>
      <ul className="flex gap-x-32 text-[15px]">
        <Link to="/home-loan-product">
          <li>Home Loan Product</li>
        </Link>
        <Link to="/checklist-calculators">
          <li>Checklist & Calculators</li>
        </Link>
        <Link to="/banking-products" className="pr-32">
          <li>Banking Products</li>
        </Link>
      </ul>

      {isAuth ? (
        <Menu>
          <MenuButton
            as={Button}
            colorScheme="blue-50"
            className="border-1 border-white"
          >
            Profile
          </MenuButton>
          <MenuList className="text-black">
            <MenuGroup title="Profile">
              <MenuItem onClick={() => navigate("/profile")}>
                My Account
              </MenuItem>
              <MenuItem>Payments</MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Help">
              <MenuItem>Docs</MenuItem>
              <MenuItem>FAQ</MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuItem onClick={handleLogOut}>Logout</MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <Button
          colorScheme="blue-50"
          className="border-1 border-white"
          onClick={handleLoginClick}
        >
          <User size={20} className="mr-2" />
          LOGIN
        </Button>
      )}
    </>
  );
};

export default NavLinks;
