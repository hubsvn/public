import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Img, Radio, Text } from "components";

const Sidebar1 = (props) => {
  return (
    <>
      <Sidebar className={props.className}>
        <div className="bg-white-A700 flex flex-col items-start justify-start py-[35px] shadow-bs w-full">
          <div className="flex flex-row gap-4 items-center justify-start md:ml-[0] ml-[25px] w-[52%] md:w-full">
            <Img
              className="h-[30px] w-[30px]"
              src="images/img_volume.svg"
              alt="volume"
            />
            <Text
              className="text-3xl sm:text-[26px] md:text-[28px] text-blue-A201"
              size="txtSalsaRegular30"
            >
              Bistro
            </Text>
          </div>
          <div className="flex flex-col gap-[22px] items-center justify-start mt-[53px] w-full">
            <div className="flex flex-col gap-[30px] items-start justify-start w-[74%] md:w-full">
              <div className="flex flex-row gap-[7px] items-start justify-start w-[57%] md:w-full">
                <Img
                  className="h-5 w-5"
                  src="defaultNoData.png"
                  alt="videocamera"
                />
                <Text
                  className="text-base text-bluegray-400"
                  size="txtRobotoRegular16"
                >
                  Dashboard
                </Text>
              </div>
              <div className="flex flex-row items-start justify-between w-full">
                <div className="flex flex-row gap-2 items-start justify-start mt-0.5">
                  <Img
                    className="h-4 w-4"
                    src="images/img_airplane.svg"
                    alt="airplane"
                  />
                  <Text
                    className="text-base text-bluegray-400"
                    size="txtRobotoRegular16"
                  >
                    Orders
                  </Text>
                </div>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowright.svg"
                  alt="arrowright"
                />
              </div>
            </div>
            <div className="flex flex-col gap-6 justify-start w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-row h-10 items-center justify-between p-2 w-full"
                style={{ backgroundImage: "url('images/defaultNoData.png')" }}
              >
                <div className="flex flex-row gap-2 items-center justify-center ml-[23px]">
                  <Img
                    className="h-4 w-4"
                    src="images/img_menu_16X16.svg"
                    alt="menu"
                  />
                  <Text
                    className="text-base text-blue-A200"
                    size="txtRobotoRegular16BlueA200"
                  >
                    Menus
                  </Text>
                </div>
                <Img
                  className="h-6 mr-[26px] w-6"
                  src="images/img_arrowup.svg"
                  alt="arrowup"
                />
              </div>
              <div className="flex flex-col gap-6 items-start justify-start md:ml-[0] ml-[54px]">
                <Text
                  className="text-base text-bluegray-400"
                  size="txtRobotoRegular16"
                >
                  Add Menu
                </Text>
                <Text
                  className="text-base text-blue-A200"
                  size="txtRobotoRegular16BlueA200"
                >
                  Menu List{" "}
                </Text>
                <Text
                  className="text-base text-bluegray-400"
                  size="txtRobotoRegular16"
                >
                  Categories
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-[30px] items-start justify-start w-[74%] md:w-full">
              <div className="flex flex-row items-center justify-between w-full">
                <div className="flex flex-row gap-[7px] items-start justify-start">
                  <Img className="h-4 w-4" src="defaultNoData.png" alt="user" />
                  <Text
                    className="text-base text-bluegray-400"
                    size="txtRobotoRegular16"
                  >
                    Customer
                  </Text>
                </div>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowright.svg"
                  alt="arrowright One"
                />
              </div>
              <div className="flex flex-row gap-2 items-start justify-start w-[49%] md:w-full">
                <Img
                  className="h-4 w-4"
                  src="images/img_vector.svg"
                  alt="Vector"
                />
                <Text
                  className="text-base text-bluegray-400"
                  size="txtRobotoRegular16"
                >
                  Analytics
                </Text>
              </div>
              <div className="flex flex-row items-start justify-between w-full">
                <div className="flex flex-row gap-[9px] items-start justify-start mt-[3px] pb-0.5">
                  <Img
                    className="h-4 w-4"
                    src="images/img_circlehalf.svg"
                    alt="CircleHalf"
                  />
                  <Text
                    className="text-base text-bluegray-400"
                    size="txtRobotoRegular16"
                  >
                    Table{" "}
                  </Text>
                </div>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowright.svg"
                  alt="arrowright Two"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-start justify-start mb-[59px] md:ml-[0] ml-[30px] mt-[143px] w-[76%] md:w-full">
            <div className="bg-colors flex flex-col gap-[9px] items-center justify-start p-[5px] rounded-[10px] shadow-bs1 w-full">
              <Text
                className="mt-1.5 text-base text-white-A700"
                size="txtRobotoMedium16WhiteA700"
              >
                Favourite Add Menus
              </Text>
              <div className="flex flex-row items-start justify-between mb-[5px] w-full">
                <Img
                  className="h-[17px] mt-[37px] w-[18px]"
                  src="defaultNoData.png"
                  alt="cart"
                />
                <div className="md:h-[108px] h-[133px] mb-1.5 relative w-[66%]">
                  <Img
                    className="absolute h-[102px] inset-[0] justify-center m-auto object-cover w-[102px]"
                    src="defaultNoData.png"
                    alt="imageEleven"
                  />
                  <Radio
                    value="group18283"
                    className="mx-auto"
                    inputClassName="absolute border border-dashed border-white-A700 h-5 mr-[5px] rounded-[10px] w-5"
                    checked={false}
                    name="group18283"
                    label="group18283"
                    id="group18283"
                  ></Radio>
                  <Text
                    className="absolute inset-x-[0] mx-auto text-colors1 text-xs top-[0] w-max"
                    size="txtRobotoRegular12Blue100"
                  >
                    It is a long established{" "}
                  </Text>
                </div>
                <Img
                  className="h-[17px] mt-[122px] w-[18px]"
                  src="defaultNoData.png"
                  alt="cart One"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5 items-start justify-start w-[70%] md:w-full">
              <Text className="text-gray-700 text-xs" size="txtRobotoMedium12">
                Bistro Restaurant Admin{" "}
              </Text>
              <Text
                className="text-[10px] text-gray-700"
                size="txtRobotoRegular10"
              >
                2021 All Rights
              </Text>
              <div className="h-3 relative w-[76%]">
                <Text
                  className="m-auto text-[10px] text-gray-700"
                  size="txtRobotoRegular10"
                >
                  Made with by Bistro
                </Text>
                <Img
                  className="absolute h-3 inset-y-[0] my-auto right-[41%] w-[10%]"
                  src="images/img_favorite.svg"
                  alt="favorite"
                />
              </div>
            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
