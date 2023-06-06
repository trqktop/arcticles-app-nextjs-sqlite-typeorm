import Profile from "../Profile";
import UserListLink from "../UserListLink";
import Logo from "../Logo";
import LoginMenu from "../LoginMenu";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        maxWidth: "1440px",
        width: "100%",
      }}
    >
      <Logo />
      <div style={{ display: "flex" }}>
        <UserListLink />
        <Profile />
        <LoginMenu />
      </div>
    </header>
  );
};

export default Header;
