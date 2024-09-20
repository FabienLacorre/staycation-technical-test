import { useEffect, useState } from "react";

import "./Header.scss";
import StaycationLogo from "./StaycationLogo";

interface User {
  firstName?: string;
}

const Header = () => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    fetch("http://localhost:9000/users/1")
      .then(async (res: any) => {
        const result = await res.json();
        setUser(result);
      })
      .catch((e: any) => console.warn("Error: ", e));
  }, []);

  return (
    <div className="header">
      <StaycationLogo />
      {user && <div className="header__user">Welcome, {user.firstName}!</div>}
    </div>
  );
};

export default Header;
