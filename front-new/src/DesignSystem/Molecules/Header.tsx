import { useEffect, useState } from "react";
import clsx from "clsx";
import StaycationLogo from "../Atoms/StaycationLogo";
import "./Header.scss";
import { Typography } from "../Atoms/Typography";
import { useAppDispatch } from "../../Stores/store";
import { getUserById } from "../../Thunks/userThunks";
import {
  useSelectorSingle,
  useSelectorSingleMetaData,
} from "../../Stores/selectors";
import { User } from "../../Stores/UserSlice";
import { NO_VALUES } from "../../Utils/formatReview";
import { ApiStatus } from "../../Types/ApiStatus";

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
  const dispatch = useAppDispatch();

  const user = useSelectorSingle<User>("user");
  const useMetaData = useSelectorSingleMetaData<User>("user");

  useEffect(() => {
    dispatch(getUserById(1));
  }, []);

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
        {/* LOGO */}
        <StaycationLogo />

        {/* USER DISPLAY */}
        {useMetaData.apiStatus === ApiStatus.LOADING ? (
          <Typography isBold size="S" className={classNameUserHello}>
            {`Loading...`}
          </Typography>
        ) : null}
        {useMetaData.apiStatus === ApiStatus.FAILED ? (
          <Typography isBold size="S" className={classNameUserHello}>
            {`Failed...`}
          </Typography>
        ) : null}
        {useMetaData.apiStatus === ApiStatus.SUCCEEDED ? (
          <Typography isBold size="S" className={classNameUserHello}>
            {`Welcome, ${user.first_name ?? NO_VALUES}!`}
          </Typography>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
