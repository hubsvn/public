import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, GoogleMap, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

import "react-circular-progressbar/dist/styles.css";

const OrderIdPage = () => {
  const navigate = useNavigate();

  const [searchvalue, setSearchvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-roboto sm:gap-5 md:gap-5 items-start mx-auto pb-[53px] w-full">
        <Sidebar className="!sticky !w-[250px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
          <div className="flex flex-col items-start justify-start mb-[85px] mt-6 w-full">
            <Img
              className="h-[30px] ml-7 md:ml-[0] w-1/2"
              src="images/img_group18298.svg"
              alt="Group18298"
            />
            <div className="flex flex-col gap-3 items-center justify-start mt-[65px] w-full">
              <div
                className="common-pointer flex flex-col items-start justify-end p-[9px] w-full"
                onClick={() => navigate("/")}
              >
                <div className="flex flex-row gap-2 items-start justify-start md:ml-[0] ml-[21px] mt-0.5 w-[46%] md:w-full">
                  <Img
                    className="h-5 w-5"
                    src="images/img_settings.svg"
                    alt="settings"
                  />
                  <Text
                    className="text-base text-bluegray-400"
                    size="txtRobotoRegular16"
                  >
                    Dashboard
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-10 items-center justify-start p-2 w-full"
                  style={{
                    backgroundImage: "url('images/img_group18478.svg')",
                  }}
                >
                  <div className="flex flex-row items-start justify-between w-4/5 md:w-full">
                    <div className="flex flex-row gap-2 items-start justify-start mt-[3px]">
                      <Img
                        className="h-4 w-4"
                        src="images/img_airplane_70X70.svg"
                        alt="airplane"
                      />
                      <Text
                        className="text-base text-blue-A201"
                        size="txtRobotoRegular16BlueA201"
                      >
                        Orders
                      </Text>
                    </div>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowup.svg"
                      alt="arrowup"
                    />
                  </div>
                </div>
                <div
                  className="common-pointer flex flex-col items-start justify-end p-2.5 w-full"
                  onClick={() => navigate("/orderlist")}
                >
                  <Text
                    className="ml-11 md:ml-[0] text-base text-bluegray-400"
                    size="txtRobotoRegular16"
                  >
                    Order list
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-end p-2.5 w-full">
                  <Text
                    className="ml-11 md:ml-[0] text-base text-blue-A201"
                    size="txtRobotoRegular16BlueA201"
                  >
                    Order ID
                  </Text>
                </div>
              </div>
              <div
                className="common-pointer flex flex-col items-center justify-start p-2 w-full"
                onClick={() => navigate("/addmenu")}
              >
                <div className="flex flex-row items-start justify-between w-4/5 md:w-full">
                  <div className="flex flex-row gap-2 items-start justify-start mt-[3px]">
                    <Img
                      className="h-4 mt-0.5 w-4"
                      src="images/img_minimize.svg"
                      alt="minimize"
                    />
                    <Text
                      className="text-base text-bluegray-400"
                      size="txtRobotoRegular16"
                    >
                      Menus
                    </Text>
                  </div>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowright_bluegray_400.svg"
                    alt="arrowright"
                  />
                </div>
              </div>
              <div
                className="common-pointer flex flex-col items-center justify-start p-2 w-full"
                onClick={() => navigate("/customer")}
              >
                <div className="flex flex-row items-start justify-between w-4/5 md:w-full">
                  <div className="flex flex-row gap-2 items-start justify-start mt-[3px]">
                    <Img
                      className="h-4 mt-0.5 w-4"
                      src="images/img_user.svg"
                      alt="user"
                    />
                    <Text
                      className="text-base text-bluegray-400"
                      size="txtRobotoRegular16"
                    >
                      Customer
                    </Text>
                  </div>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowright_bluegray_400.svg"
                    alt="arrowright One"
                  />
                </div>
              </div>
              <div
                className="common-pointer flex flex-col items-start justify-end p-2.5 w-full"
                onClick={() => navigate("/analytics")}
              >
                <div className="flex flex-row gap-2 items-start justify-start ml-5 md:ml-[0] w-2/5 md:w-full">
                  <Img
                    className="h-4 w-4"
                    src="images/img_frame20.svg"
                    alt="Vector"
                  />
                  <Text
                    className="text-base text-bluegray-400"
                    size="txtRobotoRegular16"
                  >
                    Analytics
                  </Text>
                </div>
              </div>
              <div
                className="common-pointer flex flex-col items-center justify-start p-2 w-full"
                onClick={() => navigate("/addtable")}
              >
                <div className="flex flex-row items-start justify-between w-4/5 md:w-full">
                  <div className="flex flex-row gap-2 items-start justify-start mt-[3px]">
                    <Img
                      className="h-4 mt-0.5 w-4"
                      src="images/img_frame21.svg"
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
                    src="images/img_arrowright_bluegray_400.svg"
                    alt="arrowright Two"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[30px] mt-[170px] w-[76%] md:w-full">
              <Img
                className="h-[186px] md:h-auto object-cover w-full"
                src="images/img_group18692_1.png"
                alt="group18692"
              />
              <Text
                className="mt-6 text-gray-700 text-xs"
                size="txtRobotoMedium12"
              >
                Bistro Restaurant Admin{" "}
              </Text>
              <Text
                className="mt-1.5 text-[10px] text-gray-700"
                size="txtRobotoRegular10"
              >
                2021 All Rights
              </Text>
              <div className="flex flex-row items-center justify-start mt-1.5 w-[54%] md:w-full">
                <Text
                  className="text-[10px] text-gray-700"
                  size="txtRobotoRegular10"
                >
                  Made with
                </Text>
                <Img
                  className="h-3 ml-0.5 w-[10%]"
                  src="images/img_favorite.svg"
                  alt="favorite"
                />
                <Text
                  className="ml-0.5 text-[10px] text-gray-700"
                  size="txtRobotoRegular10"
                >
                  by Bistro
                </Text>
              </div>
            </div>
          </div>
        </Sidebar>
        <div className="flex flex-1 flex-col gap-[37px] items-center justify-start md:px-5 w-full">
          <div className="bg-white-A700 flex flex-col items-center justify-start p-5 shadow-bs2 w-full">
            <header className="flex items-center justify-center w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <Input
                  name="Search"
                  placeholder="Search here"
                  value={searchvalue}
                  onChange={(e) => setSearchvalue(e)}
                  className="!placeholder:text-bluegray-400 !text-bluegray-400 leading-[normal] p-0 text-left text-xs w-full"
                  wrapClassName="border border-gray-50 border-solid flex sm:flex-1 sm:mt-0 my-0.5 sm:w-full"
                  suffix={
                    searchvalue?.length > 0 ? (
                      <CloseSVG
                        className="mt-2.5 mb-[9px] cursor-pointer h-4 ml-[35px] mr-4"
                        onClick={() => setSearchvalue("")}
                        fillColor="#8c8787"
                        height={16}
                        width={16}
                        viewBox="0 0 16 16"
                      />
                    ) : (
                      <Img
                        className="mt-2.5 mb-[9px] cursor-pointer h-4 ml-[35px] mr-4"
                        src="images/img_search.svg"
                        alt="search"
                      />
                    )
                  }
                  shape="round"
                ></Input>
                <div className="flex sm:flex-1 flex-row gap-[25px] items-center justify-between w-[15%] sm:w-full">
                  <List
                    className="sm:flex-col flex-row gap-6 grid grid-cols-2"
                    orientation="horizontal"
                  >
                    <div className="bg-gray-50 flex flex-col h-[35px] items-end justify-start rounded-[50%] w-full">
                      <div className="md:h-[25px] h-[29px] mb-[5px] relative w-[78%]">
                        <Img
                          className="absolute bottom-[0] h-5 left-[0] w-5"
                          src="images/img_lock.svg"
                          alt="lock"
                        />
                        <Text
                          className="absolute bg-blue-A201 flex h-3 items-center justify-center right-[0] rounded-[50%] text-[6px] text-center text-white-A700 top-[0] w-3"
                          size="txtRobotoMedium6"
                        >
                          5
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray-50 flex flex-col h-[35px] items-end justify-start rounded-[50%] w-full">
                      <div className="h-7 md:h-[26px] mb-1.5 relative w-[27px]">
                        <Img
                          className="absolute bottom-[0] h-5 left-[0] w-5"
                          src="images/img_user_20X20.svg"
                          alt="user One"
                        />
                        <Text
                          className="absolute bg-blue-A201 flex h-3 items-center justify-center right-[0] rounded-[50%] text-[6px] text-center text-white-A700 top-[0] w-3"
                          size="txtRobotoMedium6"
                        >
                          5
                        </Text>
                      </div>
                    </div>
                  </List>
                  <Img
                    className="h-10 md:h-auto rounded-[50%] w-10"
                    src="images/img_ellipse1.png"
                    alt="EllipseOne"
                  />
                </div>
              </div>
            </header>
          </div>
          <div className="flex flex-col gap-[34px] items-start justify-start w-[94%] md:w-full">
            <div className="flex flex-col gap-1.5 items-start justify-start">
              <Text
                className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-700"
                size="txtRobotoMedium25"
              >
                Order ID #5552351
              </Text>
              <Text
                className="text-base text-bluegray-400"
                size="txtRobotoRegular16"
              >
                Dashboard / Order Details
              </Text>
            </div>
            <div className="flex md:flex-col flex-row gap-[29px] items-center justify-between w-full">
              <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start w-[66%] md:w-full">
                <div className="bg-white-A700 flex flex-col items-center justify-start p-[25px] sm:px-5 rounded-[10px] shadow-bs3 w-full">
                  <div className="flex flex-col gap-[13px] items-start justify-start w-[98%] md:w-full">
                    <Img
                      className="h-[26px] w-[94%]"
                      src="images/img_group18804.svg"
                      alt="Group18804"
                    />
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                      <div className="flex flex-col gap-[7px] items-start justify-start">
                        <Text
                          className="text-base text-gray-700"
                          size="txtRobotoMedium16Gray700"
                        >
                          Order Created
                        </Text>
                        <Text
                          className="text-bluegray-400 text-xs"
                          size="txtRobotoMedium12Bluegray400"
                        >
                          Thu, 21 jul 2020{" "}
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[7px] items-start justify-start">
                        <Text
                          className="text-base text-gray-700"
                          size="txtRobotoMedium16Gray700"
                        >
                          Payment Succcess
                        </Text>
                        <Text
                          className="text-bluegray-400 text-xs"
                          size="txtRobotoMedium12Bluegray400"
                        >
                          Thu, 21 jul 2020
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[7px] items-start justify-start">
                        <Text
                          className="text-base text-gray-700"
                          size="txtRobotoMedium16Gray700"
                        >
                          On Delivery
                        </Text>
                        <Text
                          className="text-bluegray-400 text-xs"
                          size="txtRobotoMedium12Bluegray400"
                        >
                          Thu, 21 jul 2020
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[7px] items-start justify-start">
                        <Text
                          className="text-base text-gray-700"
                          size="txtRobotoMedium16Gray700"
                        >
                          Order Delivered
                        </Text>
                        <Text
                          className="text-bluegray-400 text-xs"
                          size="txtRobotoMedium12Bluegray400"
                        >
                          Thu, 21 jul 2020{" "}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col items-center justify-start p-[25px] sm:px-5 rounded-[15px] shadow-bs3 w-full">
                  <div className="h-[281px] md:h-[298px] relative w-full">
                    <GoogleMap
                      className="h-[281px] m-auto rounded-md w-full"
                      showMarker={false}
                    ></GoogleMap>
                    <div className="absolute flex md:flex-col flex-row gap-[34px] h-max inset-[0] items-start justify-between m-auto w-[93%]">
                      <div className="md:h-[215px] h-[239px] relative w-[89%] md:w-full">
                        <div className="absolute flex flex-col gap-3 h-max inset-[0] justify-center m-auto w-full">
                          <div className="md:h-[163px] h-[183px] relative w-full">
                            <div
                              className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[164px] inset-x-[0] items-end justify-start mx-auto p-8 sm:px-5 w-full"
                              style={{
                                backgroundImage:
                                  "url('images/img_group2450.svg')",
                              }}
                            >
                              <div
                                className="bg-cover bg-no-repeat flex flex-col h-[41px] items-center justify-end mb-[59px] mr-[185px] p-[3px]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group18406.svg')",
                                }}
                              >
                                <Text
                                  className="mt-1.5 text-blue-A201 text-xs"
                                  size="txtRobotoMedium12BlueA201"
                                >
                                  <>
                                    1-2
                                    <br />
                                    min
                                  </>
                                </Text>
                              </div>
                            </div>
                            <div
                              className="absolute bg-cover bg-no-repeat flex flex-col h-10 items-center justify-start p-1.5 right-[12%] top-[0] w-[7%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group18767.svg')",
                              }}
                            >
                              <Img
                                className="h-[23px] md:h-auto mb-1 rounded-[50%] w-6"
                                src="images/img_ellipse_2.png"
                                alt="Ellipse"
                              />
                            </div>
                          </div>
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-10 items-center justify-end ml-36 md:ml-[0] p-1.5 w-[7%] md:w-full"
                            style={{
                              backgroundImage:
                                "url('images/img_group18761.svg')",
                            }}
                          >
                            <Img
                              className="h-6 md:h-auto mt-1 rounded-[50%] w-6"
                              src="images/img_ellipse.png"
                              alt="Ellipse One"
                            />
                          </div>
                        </div>
                        <div className="absolute flex flex-col items-start justify-start left-[8%] top-[0]">
                          <Text
                            className="text-base text-gray-700"
                            size="txtRobotoMedium16Gray700"
                          >
                            Tark Order
                          </Text>
                          <Text
                            className="mt-1 text-bluegray-400 text-xs"
                            size="txtRobotoRegular12Bluegray400"
                          >
                            Nor again is For
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="flex h-10 items-center justify-center mb-[9px] md:mt-0 mt-[190px] rounded-[5px] w-10"
                        color="bluegray_800"
                        size="sm"
                        variant="fill"
                      >
                        <Img
                          className="h-[26px]"
                          src="images/img_minimize_40X40.svg"
                          alt="minimize One"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col items-center justify-start p-5 rounded-[15px] shadow-bs3 w-full">
                  <div className="flex flex-col gap-[30px] items-center justify-start mb-[15px] mt-[3px] w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                      <Text
                        className="text-gray-700 text-sm"
                        size="txtRobotoMedium14"
                      >
                        Items
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[249px] text-gray-700 text-sm"
                        size="txtRobotoMedium14"
                      >
                        Oty
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[102px] text-gray-700 text-sm"
                        size="txtRobotoMedium14"
                      >
                        Price
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[73px] text-gray-700 text-sm"
                        size="txtRobotoMedium14"
                      >
                        Total Price
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[72px] text-gray-700 text-sm"
                        size="txtRobotoMedium14"
                      >
                        Clear
                      </Text>
                    </div>
                    <List
                      className="flex flex-col gap-[12.5px] items-center pr-1.5 w-full"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                        <div className="flex md:flex-1 flex-row gap-3.5 items-center justify-between w-[36%] md:w-full">
                          <Img
                            className="h-12 md:h-auto object-cover rounded"
                            src="images/img_rectangle4144_6.png"
                            alt="Rectangle4144"
                          />
                          <div className="flex flex-col gap-1.5 items-start justify-start">
                            <Text
                              className="leading-[16.00px] text-gray-700 text-sm"
                              size="txtRobotoMedium14"
                            >
                              <>
                                Sweet cheezy pizza for kids <br />
                                Meal (smail )
                              </>
                            </Text>
                            <div className="flex flex-row gap-[7px] items-center justify-start w-[58%] md:w-full">
                              <Img
                                className="h-2.5 w-[72%]"
                                src="images/img_group18706.svg"
                                alt="Group18706"
                              />
                              <Text
                                className="text-orange-301 text-xs"
                                size="txtRobotoMedium12Orange301"
                              >
                                (45)
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Text
                          className="md:ml-[0] ml-[43px] text-gray-700 text-sm"
                          size="txtRobotoMedium14"
                        >
                          1x
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[109px] text-gray-700 text-sm"
                          size="txtRobotoMedium14"
                        >
                          $12.5
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[70px] text-gray-700 text-sm"
                          size="txtRobotoMedium14"
                        >
                          $456
                        </Text>
                        <Img
                          className="h-[30px] md:ml-[0] ml-[107px] w-[30px]"
                          src="images/img_trash.svg"
                          alt="trash"
                        />
                      </div>
                      <Line className="self-center h-px bg-blue-50 w-full" />
                      <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                        <div className="flex md:flex-1 flex-row gap-3.5 items-center justify-between w-[36%] md:w-full">
                          <Img
                            className="h-12 md:h-auto object-cover rounded"
                            src="images/img_rectangle4144_7.png"
                            alt="Rectangle4144 One"
                          />
                          <div className="flex flex-col gap-1.5 items-start justify-start">
                            <Text
                              className="leading-[16.00px] text-gray-700 text-sm"
                              size="txtRobotoMedium14"
                            >
                              <>
                                Sweet cheezy pizza for kids <br />
                                Meal (smail )
                              </>
                            </Text>
                            <div className="flex flex-row gap-[7px] items-center justify-start w-[58%] md:w-full">
                              <Img
                                className="h-2.5 w-[72%]"
                                src="images/img_group18706.svg"
                                alt="Group18706 One"
                              />
                              <Text
                                className="text-orange-301 text-xs"
                                size="txtRobotoMedium12Orange301"
                              >
                                (45)
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Text
                          className="md:ml-[0] ml-[43px] text-gray-700 text-sm"
                          size="txtRobotoMedium14"
                        >
                          3x
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[109px] text-gray-700 text-sm"
                          size="txtRobotoMedium14"
                        >
                          $12.5
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[70px] text-gray-700 text-sm"
                          size="txtRobotoMedium14"
                        >
                          $456
                        </Text>
                        <Img
                          className="h-[30px] md:ml-[0] ml-[107px] w-[30px]"
                          src="images/img_trash_30X30.svg"
                          alt="trash One"
                        />
                      </div>
                      <Line className="self-center h-px bg-blue-50 w-full" />
                      <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                        <div className="flex md:flex-1 flex-row gap-3.5 items-center justify-between w-[36%] md:w-full">
                          <Img
                            className="h-12 md:h-auto object-cover rounded"
                            src="images/img_rectangle4144_8.png"
                            alt="Rectangle4144 Two"
                          />
                          <div className="flex flex-col gap-1.5 items-start justify-start">
                            <Text
                              className="leading-[16.00px] text-gray-700 text-sm"
                              size="txtRobotoMedium14"
                            >
                              <>
                                Sweet cheezy pizza for kids <br />
                                Meal (smail )
                              </>
                            </Text>
                            <div className="flex flex-row gap-[7px] items-center justify-start w-[58%] md:w-full">
                              <Img
                                className="h-2.5 w-[72%]"
                                src="images/img_group18706.svg"
                                alt="Group18706 Two"
                              />
                              <Text
                                className="text-orange-301 text-xs"
                                size="txtRobotoMedium12Orange301"
                              >
                                (45)
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Text
                          className="md:ml-[0] ml-[43px] text-gray-700 text-sm"
                          size="txtRobotoMedium14"
                        >
                          5x
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[109px] text-gray-700 text-sm"
                          size="txtRobotoMedium14"
                        >
                          $12.5
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[70px] text-gray-700 text-sm"
                          size="txtRobotoMedium14"
                        >
                          $456
                        </Text>
                        <Img
                          className="h-[30px] md:ml-[0] ml-[107px] w-[30px]"
                          src="images/img_trash.svg"
                          alt="trash Two"
                        />
                      </div>
                    </List>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start w-[32%] md:w-full">
                <div className="h-[479px] relative w-full">
                  <div className="absolute bg-white-A700 h-[479px] inset-[0] justify-center m-auto rounded-[15px] shadow-bs3 w-full"></div>
                  <div className="absolute bottom-[0] flex flex-col gap-[17px] inset-x-[0] items-center justify-start mx-auto w-full">
                    <div className="flex flex-col gap-[13px] items-center justify-start w-[39%] md:w-full">
                      <Img
                        className="h-[120px] md:h-auto rounded-[50%] w-[120px]"
                        src="images/img_ellipse48.png"
                        alt="EllipseFortyEight"
                      />
                      <Text
                        className="text-base text-gray-700"
                        size="txtRobotoMedium16Gray700"
                      >
                        Darlene Robertson
                      </Text>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[119px] rounded-[15px] text-center text-xs"
                        color="blue_A201"
                        size="sm"
                        variant="fill"
                      >
                        Customer
                      </Button>
                    </div>
                    <div className="flex flex-col gap-[18px] items-center justify-start w-full">
                      <div className="flex flex-row items-center justify-start w-[89%] md:w-full">
                        <Button
                          className="flex h-10 items-center justify-center rounded-[50%] w-10"
                          shape="circle"
                          color="blue_A201"
                          size="md"
                          variant="fill"
                        >
                          <Img
                            className="h-5"
                            src="images/img_search_white_A700.svg"
                            alt="search One"
                          />
                        </Button>
                        <Text
                          className="ml-2.5 text-bluegray-400 text-sm"
                          size="txtRobotoMedium14Bluegray400"
                        >
                          Parker Rd. 12Allentown, New
                        </Text>
                        <Text
                          className="ml-[59px] text-bluegray-400 text-xs"
                          size="txtRobotoMedium12Bluegray400"
                        >
                          02 Items
                        </Text>
                      </div>
                      <div className="bg-gray-101 flex flex-col gap-[15px] items-center justify-end pt-[17px] w-full">
                        <div className="flex flex-col gap-2.5 items-center justify-start w-[90%] md:w-full">
                          <div className="flex flex-row items-start justify-between w-[99%] md:w-full">
                            <Text
                              className="text-base text-blue-A201"
                              size="txtRobotoMedium16"
                            >
                              Note Order
                            </Text>
                            <Img
                              className="h-4 mt-0.5"
                              src="images/img_volume.svg"
                              alt="volume"
                            />
                          </div>
                          <Text
                            className="leading-[20.00px] text-bluegray-400 text-xs w-full"
                            size="txtRobotoRegular12Bluegray400"
                          >
                            Nor again is there anyone who loves or pursues or
                            desires to obtain pain of itself, because it is
                            pain, but because occasionally circumstances occur
                            in which toil{" "}
                          </Text>
                        </div>
                        <Input
                          name="language Four"
                          placeholder=" Parker Rd. Allentown, New"
                          className="font-medium leading-[normal] p-0 placeholder:text-white-A700 text-base text-left w-full"
                          wrapClassName="flex rounded-bl-[15px] rounded-br-[15px] w-full"
                          prefix={
                            <div className="h-10 ml-[21px] mr-[35px] pt-[9px] pb-[7px] pl-[9px] pr-[7px] w-10 bg-white-A700 rounded-[50%] my-2.5 flex justify-center items-center">
                              <Img
                                className="h-6 my-auto"
                                src="images/img_megaphone.svg"
                                alt="megaphone"
                              />
                            </div>
                          }
                          color="blue_A201"
                          size="md"
                        ></Input>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col items-center justify-end p-[18px] rounded-[15px] shadow-bs3 w-full">
                  <div className="flex flex-col items-start justify-start mt-1 w-[97%] md:w-full">
                    <Text
                      className="text-base text-gray-700"
                      size="txtRobotoMedium16Gray700"
                    >
                      Order Summary
                    </Text>
                    <div className="h-[139px] md:h-[158px] md:ml-[0] ml-[85px] mt-[19px] relative shadow-bs4 w-[139px]">
                      <div className="!w-[139px] h-[139px] m-auto overflow-visible">
                        <CircularProgressbar
                          className="!w-[139px] h-[139px] m-auto overflow-visible"
                          value={44}
                          counterClockwise
                          strokeWidth={16}
                          styles={{
                            trail: { strokeWidth: 16, stroke: "#ffa41d" },
                            path: {
                              strokeLinecap: "square",
                              height: "100%",
                              transformOrigin: "center",
                              transform: "rotate(90deg)",
                              stroke: "#fe4242",
                            },
                          }}
                        ></CircularProgressbar>
                      </div>
                      <div className="!w-[139px] absolute h-[139px] inset-[0] justify-center m-auto overflow-visible rounded-[50%] shadow-bs5">
                        <CircularProgressbar
                          className="!w-[139px] absolute h-[139px] inset-[0] justify-center m-auto overflow-visible rounded-[50%] shadow-bs5"
                          value={22}
                          counterClockwise
                          strokeWidth={16}
                          styles={{
                            trail: { strokeWidth: 16, stroke: "#ffa41d" },
                            path: {
                              strokeLinecap: "square",
                              height: "100%",
                              transformOrigin: "center",
                              transform: "rotate(246deg)",
                              stroke: "#72c1e2",
                            },
                          }}
                        ></CircularProgressbar>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start mt-[34px] rounded-[5px] w-full">
                      <div className="flex flex-row gap-[38px] items-center justify-between rounded-[5px] w-full">
                        <div className="flex flex-col gap-2 items-start justify-start rounded-[5px] w-[44%]">
                          <Text
                            className="text-gray-700 text-sm"
                            size="txtRobotoMedium14"
                          >
                            Piza (40%)
                          </Text>
                          <div className="h-[3px] overflow-hidden relative w-full">
                            <div className="w-full h-full absolute bg-undefined"></div>
                            <div
                              className="h-full absolute"
                              style={{ width: "0%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 items-start justify-start rounded-[5px] w-[44%]">
                          <Text
                            className="text-gray-700 text-sm"
                            size="txtRobotoMedium14"
                          >
                            Dessert (40%)
                          </Text>
                          <div className="h-[3px] overflow-hidden relative w-full">
                            <div className="w-full h-full absolute bg-undefined"></div>
                            <div
                              className="h-full absolute"
                              style={{ width: "0%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 items-start justify-start rounded-[5px] w-[44%] md:w-full">
                        <Text
                          className="text-gray-700 text-sm"
                          size="txtRobotoMedium14"
                        >
                          juice (20%)
                        </Text>
                        <div className="h-[3px] overflow-hidden relative w-full">
                          <div className="w-full h-full absolute bg-undefined"></div>
                          <div
                            className="h-full absolute"
                            style={{ width: "0%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderIdPage;
