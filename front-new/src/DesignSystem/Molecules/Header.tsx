import { useState } from "react";
import clsx from "clsx";
import StaycationLogo from "../Atoms/StaycationLogo";
import "./Header.scss";
import { Typography } from "../Atoms/Typography";

// interface User {
//   firstName?: string;
// }

export interface HeaderProps {
  className?: string;
  classNameCenterWrapper?: string;
  classNameUserHello?: string;
}

const Header = ({
  className: classNameProps,
  classNameCenterWrapper: classNameCenterWrapperProps,
  classNameUserHello: classNameUserHelloProps,
}: HeaderProps) => {
  // const [user, setUser] = useState<User>();

  // useEffect(() => {
  //   fetch("http://localhost:9000/users/1")
  //     .then(async (res: any) => {
  //       const result = await res.json();
  //       setUser(result);
  //     })
  //     .catch((e: any) => console.warn("Error: ", e));
  // }, []);

  // {user && <div className="header__user">Welcome, {user.firstName}!</div>}

  const className = clsx("ds-c-header", classNameProps);
  const classNameUserHello = clsx(
    "ds-c-header--user-hello",
    classNameUserHelloProps
  );
  const classNameCenterWrapper = clsx(
    "ds-c-header--center-wrapper",
    classNameCenterWrapperProps
  );

  return (
    <div className={className}>
      <div className={classNameCenterWrapper}>
        <StaycationLogo />
        <Typography isBold size="S" className={classNameUserHello}>
          Welcome, fabien!
        </Typography>
      </div>
    </div>
  );
};

export default Header;
