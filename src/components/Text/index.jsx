import React from "react";

const sizeClasses = {
  txtSalsaRegular30: "font-normal font-salsa",
  txtRobotoMedium12Bluegray400: "font-medium font-roboto",
  txtRobotoMedium6: "font-medium font-roboto",
  txtPoppinsMedium14: "font-medium font-poppins",
  txtRobotoRegular16BlueA201: "font-normal font-roboto",
  txtPoppinsMedium12: "font-medium font-poppins",
  txtMontserratRegular12: "font-montserrat font-normal",
  txtRobotoBold22: "font-bold font-roboto",
  txtRobotoMedium25: "font-medium font-roboto",
  txtRobotoRegular16BlueA200: "font-normal font-roboto",
  txtRobotoBold20: "font-bold font-roboto",
  txtRobotoMedium14Gray501: "font-medium font-roboto",
  txtRobotoMedium14Bluegray400: "font-medium font-roboto",
  txtRobotoMedium14Green50: "font-medium font-roboto",
  txtRobotoRegular12Gray700a2: "font-normal font-roboto",
  txtRobotoRegular12Blue100: "font-normal font-roboto",
  txtRobotoMedium16Gray701: "font-medium font-roboto",
  txtRobotoMedium16Gray700: "font-medium font-roboto",
  txtRobotoRegular12Bluegray400: "font-normal font-roboto",
  txtRobotoRegular10WhiteA700: "font-normal font-roboto",
  txtRobotoRegular12: "font-normal font-roboto",
  txtRobotoMedium12BlueA201: "font-medium font-roboto",
  txtRobotoRegular14: "font-normal font-roboto",
  txtRobotoRegular16: "font-normal font-roboto",
  txtRobotoMedium16WhiteA700: "font-medium font-roboto",
  txtRobotoMedium14BlueA201: "font-medium font-roboto",
  txtRobotoRegular14Gray700: "font-normal font-roboto",
  txtRobotoMedium10: "font-medium font-roboto",
  txtRobotoBold16: "font-bold font-roboto",
  txtRobotoMedium12: "font-medium font-roboto",
  txtRobotoBold14: "font-bold font-roboto",
  txtRobotoBold12: "font-bold font-roboto",
  txtRobotoRegular12Gray700: "font-normal font-roboto",
  txtRobotoMedium14: "font-medium font-roboto",
  txtRobotoMedium14Green500: "font-medium font-roboto",
  txtRobotoRegular10: "font-normal font-roboto",
  txtRobotoMedium12Orange301: "font-medium font-roboto",
  txtRobotoRegular16Gray700: "font-normal font-roboto",
  txtRobotoMedium16: "font-medium font-roboto",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
