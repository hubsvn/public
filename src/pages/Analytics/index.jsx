import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";

import { CloseSVG } from "../../assets/images";

import "react-circular-progressbar/dist/styles.css";
import "react-tabs/style/react-tabs.css";

const todayOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const AnalyticsPage = () => {
  const navigate = useNavigate();

  const [searchvalue, setSearchvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-roboto sm:gap-5 md:gap-5 items-start mx-auto w-full">
        <Sidebar className="!sticky !w-[250px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
          <div className="flex flex-col items-start justify-start mb-[93px] mt-6 w-full">
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
              <div
                className="common-pointer flex flex-col items-center justify-start p-2 w-full"
                onClick={() => navigate("/orderlist")}
              >
                <div className="flex flex-row items-start justify-between w-4/5 md:w-full">
                  <div className="flex flex-row gap-2 items-start justify-start mt-[3px]">
                    <Img
                      className="h-4 mt-0.5 w-4"
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
                    src="images/img_arrowright_bluegray_400.svg"
                    alt="arrowright"
                  />
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
                    alt="arrowright One"
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
                    alt="arrowright Two"
                  />
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-10 items-start justify-start p-2.5 w-full"
                style={{ backgroundImage: "url('images/img_group18478.svg')" }}
              >
                <div className="flex flex-row gap-2 items-start justify-start ml-5 md:ml-[0] w-2/5 md:w-full">
                  <Img
                    className="h-4 w-4"
                    src="images/img_vector.svg"
                    alt="Vector"
                  />
                  <Text
                    className="text-base text-blue-A201"
                    size="txtRobotoRegular16BlueA201"
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
                    alt="arrowright Three"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[30px] mt-[260px] w-[76%] md:w-full">
              <Img
                className="h-[186px] md:h-auto object-cover w-full"
                src="images/img_group18692_4.png"
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
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-[99%] md:w-full">
              <Input
                name="Search"
                placeholder="Search here"
                value={searchvalue}
                onChange={(e) => setSearchvalue(e)}
                className="!placeholder:text-bluegray-400 !text-bluegray-400 leading-[normal] p-0 text-left text-xs w-full"
                wrapClassName="border border-gray-50 border-solid flex sm:mt-0 my-0.5 sm:w-full"
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
              <div className="flex flex-row gap-[25px] items-center justify-between w-[15%] sm:w-full">
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
          </div>
          <div className="flex flex-col items-center justify-start w-[94%] md:w-full">
            <div className="flex flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex flex-col gap-1.5 items-start justify-start">
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-700"
                  size="txtRobotoMedium25"
                >
                  Analytics
                </Text>
                <Text
                  className="text-base text-bluegray-400"
                  size="txtRobotoRegular16"
                >
                  Analytics / Analytics
                </Text>
              </div>
              <SelectBox
                className="border border-blue-A201 border-solid sm:flex-1 leading-[normal] my-3 text-left text-xs w-[9%] sm:w-full"
                placeholderClassName="text-white-A700"
                isSearchable={false}
                placeholder="Today"
                isMulti={false}
                options={todayOptionsList}
                name="group18155"
                shape="round"
                color="blue_A201"
                size="xs"
                variant="fill"
              />
            </div>
            <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between mt-10 w-full">
              <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-1.5 rounded-[15px] shadow-bs3 w-[66%] md:w-full">
                <div className="flex flex-col gap-6 items-center justify-start my-[25px] w-[99%] md:w-full">
                  <Tabs
                    selectedTabClassName="!text-white-A700 font-roboto font-normal !opacity-100 !bg-blue-A201 leading-[normal] rounded-[10px]"
                    selectedTabPanelClassName="relative tab-panel--selected"
                    className="flex flex-col gap-6 items-center relative w-full"
                  >
                    <div className="flex flex-row sm:gap-10 items-center justify-between w-[99%] md:w-full">
                      <Text
                        className="text-base text-gray-700"
                        size="txtRobotoMedium16Gray700"
                      >
                        Most Favorites Item{" "}
                      </Text>
                      <TabList className="border border-blue-50 border-solid flex flex-row rounded-[15px]">
                        <Tab
                          className="ml-[19px] mr-[180px] mt-[9px] text-[10px] text-gray-700"
                          data-path={`Row.1.Column.1.Column.1.Row.0.Column.0.Column.0.Row.1.Tab.0.Text`}
                          data-compid="195:2500"
                          data-comptype="Text"
                        >
                          <Text size="txtRobotoRegular10">All</Text>
                        </Tab>
                        <Tab
                          className="ml-[55px] mr-[131px] text-[10px] text-gray-700"
                          data-path={`Row.1.Column.1.Column.1.Row.0.Column.0.Column.0.Row.1.Tab.1.Text`}
                          data-compid="195:2497"
                          data-comptype="Text"
                        >
                          <Text size="txtRobotoRegular10">Pizza</Text>
                        </Tab>
                        <Tab
                          className="ml-[106px] mr-[91px] text-[10px] text-gray-700"
                          data-path={`Row.1.Column.1.Column.1.Row.0.Column.0.Column.0.Row.1.Tab.2.Text`}
                          data-compid="195:2498"
                          data-comptype="Text"
                        >
                          <Text size="txtRobotoRegular10">Drink</Text>
                        </Tab>
                        <Tab
                          className="ml-[120px] mr-[71px] text-[10px] text-white-A700"
                          data-path={`Row.1.Column.1.Column.1.Row.0.Column.0.Column.0.Row.1.Tab.3.Text`}
                          data-compid="195:2495"
                          data-comptype="Text"
                        >
                          <Text size="txtRobotoRegular10WhiteA700">Month</Text>
                        </Tab>
                        <Tab
                          className="ml-[156px] mr-5 text-[10px] text-gray-700"
                          data-path={`Row.1.Column.1.Column.1.Row.0.Column.0.Column.0.Row.1.Tab.4.Text`}
                          data-compid="195:2499"
                          data-comptype="Text"
                        >
                          <Text size="txtRobotoRegular10">Dessert</Text>
                        </Tab>
                      </TabList>
                    </div>
                    <div className="w-full">
                      {[...Array(5)].map((_, index) => {
                        return (
                          <TabPanel
                            key={"tab-content-" + index}
                            className="absolute w-full"
                          >
                            <div className="flex md:flex-col flex-row md:gap-[41px] items-center justify-between w-full">
                              <div className="flex md:flex-1 flex-col gap-3 items-center justify-start w-[48%] md:w-full">
                                <div className="flex flex-row items-center justify-between w-[97%] md:w-full">
                                  <div className="flex flex-row gap-[13px] items-center justify-between pr-1.5 w-[71%]">
                                    <Img
                                      className="h-[60px] md:h-auto object-cover rounded-sm w-[60px]"
                                      src="images/img_rectangle4126_5.png"
                                      alt="Rectangle4126"
                                    />
                                    <div className="flex flex-col gap-1.5 items-start justify-start">
                                      <Text
                                        className="text-gray-700 text-sm"
                                        size="txtRobotoMedium14"
                                      >
                                        Sweet cheezy pizza{" "}
                                      </Text>
                                      <div className="flex flex-row gap-2.5 items-center justify-between w-full">
                                        <Img
                                          className="h-2.5"
                                          src="images/img_trash_10X66.svg"
                                          alt="trash"
                                        />
                                        <Text
                                          className="text-bluegray-400 text-xs"
                                          size="txtRobotoMedium12Bluegray400"
                                        >
                                          (Review 4.5 )
                                        </Text>
                                      </div>
                                      <div className="flex flex-row items-center justify-start w-[70%] md:w-full">
                                        <Img
                                          className="h-3 w-3"
                                          src="images/img_frame14.svg"
                                          alt="FrameFourteen"
                                        />
                                        <Text
                                          className="ml-[5px] text-gray-700 text-xs"
                                          size="txtRobotoMedium12"
                                        >
                                          3,35 Total Sales
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="h-[50px] relative w-[50px]">
                                    <div className="!w-[50px] h-[50px] m-auto overflow-visible">
                                      <CircularProgressbar
                                        className="!w-[50px] h-[50px] m-auto overflow-visible"
                                        value={51}
                                        counterClockwise
                                        strokeWidth={10}
                                        styles={{
                                          trail: {
                                            strokeWidth: 10,
                                            stroke: "#c4c4c4",
                                          },
                                          path: {
                                            strokeLinecap: "square",
                                            height: "100%",
                                            transformOrigin: "center",
                                            transform: "rotate(161deg)",
                                            stroke: "#438ffe",
                                          },
                                        }}
                                      ></CircularProgressbar>
                                    </div>
                                    <Text
                                      className="absolute inset-x-[0] mx-auto text-gray-700 text-xs top-[34%] w-max"
                                      size="txtRobotoMedium12"
                                    >
                                      45%
                                    </Text>
                                  </div>
                                </div>
                                <Line className="bg-blue-50 h-px w-full" />
                                <div className="flex flex-row items-center justify-between w-[97%] md:w-full">
                                  <div className="flex flex-row gap-[13px] items-center justify-between pr-1.5 w-[71%]">
                                    <Img
                                      className="h-[60px] md:h-auto object-cover rounded-sm w-[60px]"
                                      src="images/img_rectangle4126_6.png"
                                      alt="Rectangle4126 One"
                                    />
                                    <div className="flex flex-col gap-1.5 items-start justify-start">
                                      <Text
                                        className="text-gray-700 text-sm"
                                        size="txtRobotoMedium14"
                                      >
                                        Beezy pizza for kids
                                      </Text>
                                      <div className="flex flex-row gap-2.5 items-center justify-between w-full">
                                        <Img
                                          className="h-2.5"
                                          src="images/img_trash_10X66.svg"
                                          alt="trash One"
                                        />
                                        <Text
                                          className="text-bluegray-400 text-xs"
                                          size="txtRobotoMedium12Bluegray400"
                                        >
                                          (Review 4.5 )
                                        </Text>
                                      </div>
                                      <div className="flex flex-row items-center justify-start w-[70%] md:w-full">
                                        <Img
                                          className="h-3 w-3"
                                          src="images/img_frame14.svg"
                                          alt="FrameFourteen One"
                                        />
                                        <Text
                                          className="ml-[5px] text-gray-700 text-xs"
                                          size="txtRobotoMedium12"
                                        >
                                          3,35 Total Sales
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="h-[50px] relative w-[50px]">
                                    <div className="!w-[50px] h-[50px] m-auto overflow-visible">
                                      <CircularProgressbar
                                        className="!w-[50px] h-[50px] m-auto overflow-visible"
                                        value={51}
                                        counterClockwise
                                        strokeWidth={10}
                                        styles={{
                                          trail: {
                                            strokeWidth: 10,
                                            stroke: "#c4c4c4",
                                          },
                                          path: {
                                            strokeLinecap: "square",
                                            height: "100%",
                                            transformOrigin: "center",
                                            transform: "rotate(161deg)",
                                            stroke: "#438ffe",
                                          },
                                        }}
                                      ></CircularProgressbar>
                                    </div>
                                    <Text
                                      className="absolute inset-x-[0] mx-auto text-gray-700 text-xs top-[34%] w-max"
                                      size="txtRobotoMedium12"
                                    >
                                      45%
                                    </Text>
                                  </div>
                                </div>
                                <Line className="bg-blue-50 h-px w-full" />
                                <div className="flex flex-row items-center justify-between w-[97%] md:w-full">
                                  <div className="flex flex-row gap-[13px] items-center justify-between pr-1.5 w-[71%]">
                                    <Img
                                      className="h-[60px] md:h-auto object-cover rounded-sm w-[60px]"
                                      src="images/img_rectangle4126_7.png"
                                      alt="Rectangle4126 Two"
                                    />
                                    <div className="flex flex-col gap-1.5 items-start justify-start">
                                      <Text
                                        className="text-gray-700 text-sm"
                                        size="txtRobotoMedium14"
                                      >
                                        Juice for kids
                                      </Text>
                                      <div className="flex flex-row gap-2.5 items-center justify-between w-full">
                                        <Img
                                          className="h-2.5"
                                          src="images/img_trash_10X66.svg"
                                          alt="trash Two"
                                        />
                                        <Text
                                          className="text-bluegray-400 text-xs"
                                          size="txtRobotoMedium12Bluegray400"
                                        >
                                          (Review 4.5 )
                                        </Text>
                                      </div>
                                      <div className="flex flex-row items-center justify-start w-[70%] md:w-full">
                                        <Img
                                          className="h-3 w-3"
                                          src="images/img_frame14.svg"
                                          alt="FrameFourteen Two"
                                        />
                                        <Text
                                          className="ml-[5px] text-gray-700 text-xs"
                                          size="txtRobotoMedium12"
                                        >
                                          3,35 Total Sales
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="h-[50px] relative w-[50px]">
                                    <div className="!w-[50px] h-[50px] m-auto overflow-visible">
                                      <CircularProgressbar
                                        className="!w-[50px] h-[50px] m-auto overflow-visible"
                                        value={51}
                                        counterClockwise
                                        strokeWidth={10}
                                        styles={{
                                          trail: {
                                            strokeWidth: 10,
                                            stroke: "#c4c4c4",
                                          },
                                          path: {
                                            strokeLinecap: "square",
                                            height: "100%",
                                            transformOrigin: "center",
                                            transform: "rotate(161deg)",
                                            stroke: "#438ffe",
                                          },
                                        }}
                                      ></CircularProgressbar>
                                    </div>
                                    <Text
                                      className="absolute inset-x-[0] mx-auto text-gray-700 text-xs top-[34%] w-max"
                                      size="txtRobotoMedium12"
                                    >
                                      45%
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="flex md:flex-1 flex-col gap-3 items-center justify-start w-[48%] md:w-full">
                                <div className="flex flex-row items-center justify-between w-[97%] md:w-full">
                                  <div className="flex flex-row gap-[13px] items-center justify-between pr-1.5 w-[71%]">
                                    <Img
                                      className="h-[60px] md:h-auto object-cover rounded-sm w-[60px]"
                                      src="images/img_rectangle4126_8.png"
                                      alt="Rectangle4126 Three"
                                    />
                                    <div className="flex flex-col gap-1.5 items-start justify-start">
                                      <Text
                                        className="text-gray-700 text-sm"
                                        size="txtRobotoMedium14"
                                      >
                                        Cheesy desert kids
                                      </Text>
                                      <div className="flex flex-row gap-2.5 items-center justify-between w-full">
                                        <Img
                                          className="h-2.5"
                                          src="images/img_trash_10X66.svg"
                                          alt="trash Three"
                                        />
                                        <Text
                                          className="text-bluegray-400 text-xs"
                                          size="txtRobotoMedium12Bluegray400"
                                        >
                                          (Review 4.5 )
                                        </Text>
                                      </div>
                                      <div className="flex flex-row items-center justify-start w-[70%] md:w-full">
                                        <Img
                                          className="h-3 w-3"
                                          src="images/img_frame14.svg"
                                          alt="FrameFourteen Three"
                                        />
                                        <Text
                                          className="ml-[5px] text-gray-700 text-xs"
                                          size="txtRobotoMedium12"
                                        >
                                          3,35 Total Sales
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="h-[50px] relative w-[50px]">
                                    <div className="!w-[50px] h-[50px] m-auto overflow-visible">
                                      <CircularProgressbar
                                        className="!w-[50px] h-[50px] m-auto overflow-visible"
                                        value={51}
                                        counterClockwise
                                        strokeWidth={10}
                                        styles={{
                                          trail: {
                                            strokeWidth: 10,
                                            stroke: "#c4c4c4",
                                          },
                                          path: {
                                            strokeLinecap: "square",
                                            height: "100%",
                                            transformOrigin: "center",
                                            transform: "rotate(161deg)",
                                            stroke: "#438ffe",
                                          },
                                        }}
                                      ></CircularProgressbar>
                                    </div>
                                    <Text
                                      className="absolute inset-x-[0] mx-auto text-gray-700 text-xs top-[34%] w-max"
                                      size="txtRobotoMedium12"
                                    >
                                      45%
                                    </Text>
                                  </div>
                                </div>
                                <Line className="bg-blue-50 h-px w-full" />
                                <div className="flex flex-row items-center justify-between w-[97%] md:w-full">
                                  <div className="flex flex-row gap-[13px] items-center justify-between pr-1.5 w-[71%]">
                                    <Img
                                      className="h-[60px] md:h-auto object-cover rounded-sm w-[60px]"
                                      src="images/img_rectangle4126_9.png"
                                      alt="Rectangle4126 Four"
                                    />
                                    <div className="flex flex-col gap-1.5 items-start justify-start">
                                      <Text
                                        className="text-gray-700 text-sm"
                                        size="txtRobotoMedium14"
                                      >
                                        Sweet cheezy pizza{" "}
                                      </Text>
                                      <div className="flex flex-row gap-2.5 items-center justify-between w-full">
                                        <Img
                                          className="h-2.5"
                                          src="images/img_trash_10X66.svg"
                                          alt="trash Four"
                                        />
                                        <Text
                                          className="text-bluegray-400 text-xs"
                                          size="txtRobotoMedium12Bluegray400"
                                        >
                                          (Review 4.5 )
                                        </Text>
                                      </div>
                                      <div className="flex flex-row items-center justify-start w-[70%] md:w-full">
                                        <Img
                                          className="h-3 w-3"
                                          src="images/img_frame14.svg"
                                          alt="FrameFourteen Four"
                                        />
                                        <Text
                                          className="ml-[5px] text-gray-700 text-xs"
                                          size="txtRobotoMedium12"
                                        >
                                          3,35 Total Sales
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="h-[50px] relative w-[50px]">
                                    <div className="!w-[50px] h-[50px] m-auto overflow-visible">
                                      <CircularProgressbar
                                        className="!w-[50px] h-[50px] m-auto overflow-visible"
                                        value={51}
                                        counterClockwise
                                        strokeWidth={10}
                                        styles={{
                                          trail: {
                                            strokeWidth: 10,
                                            stroke: "#c4c4c4",
                                          },
                                          path: {
                                            strokeLinecap: "square",
                                            height: "100%",
                                            transformOrigin: "center",
                                            transform: "rotate(161deg)",
                                            stroke: "#438ffe",
                                          },
                                        }}
                                      ></CircularProgressbar>
                                    </div>
                                    <Text
                                      className="absolute inset-x-[0] mx-auto text-gray-700 text-xs top-[34%] w-max"
                                      size="txtRobotoMedium12"
                                    >
                                      45%
                                    </Text>
                                  </div>
                                </div>
                                <Line className="bg-blue-50 h-px w-full" />
                                <div className="flex flex-row items-center justify-between w-[97%] md:w-full">
                                  <div className="flex flex-row gap-[13px] items-center justify-between pr-1.5 w-[71%]">
                                    <Img
                                      className="h-[60px] md:h-auto object-cover rounded-sm w-[60px]"
                                      src="images/img_rectangle4126_10.png"
                                      alt="Rectangle4126 Five"
                                    />
                                    <div className="flex flex-col gap-1.5 items-start justify-start">
                                      <Text
                                        className="text-gray-700 text-sm"
                                        size="txtRobotoMedium14"
                                      >
                                        Sweet cheezy pizza{" "}
                                      </Text>
                                      <div className="flex flex-row gap-2.5 items-center justify-between w-full">
                                        <Img
                                          className="h-2.5"
                                          src="images/img_trash_10X66.svg"
                                          alt="trash Five"
                                        />
                                        <Text
                                          className="text-bluegray-400 text-xs"
                                          size="txtRobotoMedium12Bluegray400"
                                        >
                                          (Review 4.5 )
                                        </Text>
                                      </div>
                                      <div className="flex flex-row items-center justify-start w-[70%] md:w-full">
                                        <Img
                                          className="h-3 w-3"
                                          src="images/img_frame14.svg"
                                          alt="FrameFourteen Five"
                                        />
                                        <Text
                                          className="ml-[5px] text-gray-700 text-xs"
                                          size="txtRobotoMedium12"
                                        >
                                          3,35 Total Sales
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="h-[50px] relative w-[50px]">
                                    <div className="!w-[50px] h-[50px] m-auto overflow-visible">
                                      <CircularProgressbar
                                        className="!w-[50px] h-[50px] m-auto overflow-visible"
                                        value={51}
                                        counterClockwise
                                        strokeWidth={10}
                                        styles={{
                                          trail: {
                                            strokeWidth: 10,
                                            stroke: "#c4c4c4",
                                          },
                                          path: {
                                            strokeLinecap: "square",
                                            height: "100%",
                                            transformOrigin: "center",
                                            transform: "rotate(161deg)",
                                            stroke: "#438ffe",
                                          },
                                        }}
                                      ></CircularProgressbar>
                                    </div>
                                    <Text
                                      className="absolute inset-x-[0] mx-auto text-gray-700 text-xs top-[34%] w-max"
                                      size="txtRobotoMedium12"
                                    >
                                      45%
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </TabPanel>
                        );
                      })}
                    </div>
                  </Tabs>
                  <div className="flex flex-row sm:gap-10 items-start justify-between w-[98%] md:w-full">
                    <Text
                      className="mt-[3px] text-gray-700 text-xs"
                      size="txtPoppinsMedium12"
                    >
                      Dispalying 6 Out of 25
                    </Text>
                    <Button
                      className="bg-transparent cursor-pointer flex items-center justify-center mb-0.5 min-w-[67px]"
                      rightIcon={
                        <Img
                          className="mt-2 mb-[7px] ml-[5px]"
                          src="images/img_arrow_1.svg"
                          alt="Arrow 1"
                        />
                      }
                    >
                      <div className="font-roboto leading-[normal] text-blue-A201 text-left text-sm">
                        Viwe All
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-5 rounded-[15px] shadow-bs3 w-[32%] md:w-full">
                <div className="flex flex-col gap-6 items-start justify-start mb-[9px] mt-1 rounded w-[97%] md:w-full">
                  <Text
                    className="text-base text-gray-700"
                    size="txtRobotoMedium16Gray700"
                  >
                    Daily Trending Menus
                  </Text>
                  <List
                    className="flex flex-col gap-3 items-center rounded w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-row gap-3.5 items-center justify-between rounded w-full">
                      <Img
                        className="h-12 md:h-auto object-cover rounded"
                        src="images/img_rectangle4144_9.png"
                        alt="Rectangle4144"
                      />
                      <div className="flex flex-col gap-2 items-center justify-start">
                        <div className="flex flex-row items-start justify-between w-[99%] md:w-full">
                          <Text
                            className="leading-[16.00px] text-gray-700 text-sm"
                            size="txtRobotoMedium14"
                          >
                            <>
                              Sweet cheezy pizza for kids <br />
                              Meal (smail )
                            </>
                          </Text>
                          <Text
                            className="text-blue-A201 text-sm"
                            size="txtRobotoMedium14BlueA201"
                          >
                            #1
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-between w-[99%] md:w-full">
                          <Text
                            className="text-gray-700 text-sm"
                            size="txtRobotoBold14"
                          >
                            $5.6
                          </Text>
                          <Text
                            className="text-bluegray-400 text-xs"
                            size="txtRobotoMedium12Bluegray400"
                          >
                            Order 56x{" "}
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Line className="self-center h-px bg-blue-50 w-[99%]" />
                    <div className="flex flex-1 flex-row gap-3.5 items-center justify-between rounded w-full">
                      <Img
                        className="h-12 md:h-auto object-cover rounded"
                        src="images/img_rectangle4144_10.png"
                        alt="Rectangle4144 One"
                      />
                      <div className="flex flex-col gap-2 items-center justify-start">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Text
                            className="leading-[16.00px] text-gray-700 text-sm"
                            size="txtRobotoMedium14"
                          >
                            <>
                              Sweet cheezy pizza for kids <br />
                              Meal (smail )
                            </>
                          </Text>
                          <Text
                            className="text-blue-A201 text-sm"
                            size="txtRobotoMedium14BlueA201"
                          >
                            #2
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-between w-[99%] md:w-full">
                          <Text
                            className="text-gray-700 text-sm"
                            size="txtRobotoBold14"
                          >
                            $5.6
                          </Text>
                          <Text
                            className="text-bluegray-400 text-xs"
                            size="txtRobotoMedium12Bluegray400"
                          >
                            Order 56x{" "}
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Line className="self-center h-px bg-blue-50 w-[99%]" />
                    <div className="flex flex-1 flex-row gap-3.5 items-center justify-between rounded w-full">
                      <Img
                        className="h-12 md:h-auto object-cover rounded"
                        src="images/img_rectangle4144_11.png"
                        alt="Rectangle4144 Two"
                      />
                      <div className="flex flex-col gap-2 items-center justify-start">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Text
                            className="leading-[16.00px] text-gray-700 text-sm"
                            size="txtRobotoMedium14"
                          >
                            <>
                              Sweet cheezy pizza for kids <br />
                              Meal (smail )
                            </>
                          </Text>
                          <Text
                            className="text-blue-A201 text-sm"
                            size="txtRobotoMedium14BlueA201"
                          >
                            #3
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-between w-[99%] md:w-full">
                          <Text
                            className="text-gray-700 text-sm"
                            size="txtRobotoBold14"
                          >
                            $5.6
                          </Text>
                          <Text
                            className="text-bluegray-400 text-xs"
                            size="txtRobotoMedium12Bluegray400"
                          >
                            Order 56x{" "}
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Line className="self-center h-px bg-blue-50 w-[99%]" />
                    <div className="flex flex-1 flex-row gap-3.5 items-center justify-between rounded w-full">
                      <Img
                        className="h-12 md:h-auto object-cover rounded"
                        src="images/img_rectangle4144_12.png"
                        alt="Rectangle4144 Three"
                      />
                      <div className="flex flex-col gap-2 items-center justify-start">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Text
                            className="leading-[16.00px] text-gray-700 text-sm"
                            size="txtRobotoMedium14"
                          >
                            <>
                              Sweet cheezy pizza for kids <br />
                              Meal (smail )
                            </>
                          </Text>
                          <Text
                            className="text-blue-A201 text-sm"
                            size="txtRobotoMedium14BlueA201"
                          >
                            #4
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-between w-[99%] md:w-full">
                          <Text
                            className="text-gray-700 text-sm"
                            size="txtRobotoBold14"
                          >
                            $5.6
                          </Text>
                          <Text
                            className="text-bluegray-400 text-xs"
                            size="txtRobotoMedium12Bluegray400"
                          >
                            Order 56x{" "}
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[30px] items-start justify-between mt-[30px] w-full">
              <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-[18px] rounded-[15px] shadow-bs3 w-[49%] md:w-full">
                <div className="flex flex-col gap-6 items-center justify-start my-0.5 w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="text-base text-gray-700"
                      size="txtRobotoMedium16Gray700"
                    >
                      Most Selling Items
                    </Text>
                    <div className="border border-blue-50 border-solid flex flex-col items-center justify-start p-[5px] rounded-[15px]">
                      <div className="flex flex-row items-center justify-between rounded-[10px] w-[92%] md:w-full">
                        <Text
                          className="text-[10px] text-gray-700"
                          size="txtRobotoRegular10"
                        >
                          Today
                        </Text>
                        <Button
                          className="cursor-pointer leading-[normal] min-w-[57px] rounded-[10px] text-[10px] text-center"
                          color="blue_A201"
                          size="xs"
                          variant="fill"
                        >
                          Month
                        </Button>
                        <Text
                          className="text-[10px] text-gray-700"
                          size="txtRobotoRegular10"
                        >
                          Weekly
                        </Text>
                      </div>
                    </div>
                  </div>
                  <List
                    className="flex flex-col gap-3 items-center w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                      <div className="flex sm:flex-1 flex-row gap-4 items-center justify-between rounded-sm w-[44%] sm:w-full">
                        <Img
                          className="h-[50px] md:h-auto object-cover rounded-sm w-[50px]"
                          src="images/img_rectangle4127.png"
                          alt="Rectangle4127"
                        />
                        <div className="flex flex-col gap-1.5 items-start justify-start pb-0.5">
                          <Text
                            className="text-gray-700 text-sm"
                            size="txtRobotoMedium14"
                          >
                            Sweet cheezy pizza kids
                          </Text>
                          <Text
                            className="text-[10px] text-blue-A201"
                            size="txtRobotoMedium10"
                          >
                            BURGER
                          </Text>
                          <div className="flex flex-row gap-[11px] items-center justify-start w-[94%] md:w-full">
                            <Text
                              className="text-bluegray-400 text-xs"
                              size="txtRobotoRegular12Bluegray400"
                            >
                              Serves for 4 Person
                            </Text>
                            <Text
                              className="text-bluegray-400 text-xs"
                              size="txtRobotoRegular12Bluegray400"
                            >
                              4 min
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="sm:ml-[0] ml-[85px] text-base text-gray-700"
                        size="txtRobotoBold16"
                      >
                        <>$12.56</>
                      </Text>
                      <Img
                        className="h-5 sm:ml-[0] ml-[126px] w-5"
                        src="images/img_frame13.svg"
                        alt="FrameTwelve"
                      />
                    </div>
                    <Line className="self-center h-px bg-blue-50 w-full" />
                    <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                      <div className="flex sm:flex-1 flex-row gap-4 items-center justify-between rounded-sm w-[44%] sm:w-full">
                        <Img
                          className="h-[50px] md:h-auto object-cover rounded-sm w-[50px]"
                          src="images/img_rectangle4127_50X50.png"
                          alt="Rectangle4127 One"
                        />
                        <div className="flex flex-col gap-1.5 items-start justify-start pb-0.5">
                          <Text
                            className="text-gray-700 text-sm"
                            size="txtRobotoMedium14"
                          >
                            Sweet cheezy pizza kids
                          </Text>
                          <Text
                            className="text-[10px] text-blue-A201"
                            size="txtRobotoMedium10"
                          >
                            BURGER
                          </Text>
                          <div className="flex flex-row gap-[11px] items-center justify-start w-[94%] md:w-full">
                            <Text
                              className="text-bluegray-400 text-xs"
                              size="txtRobotoRegular12Bluegray400"
                            >
                              Serves for 4 Person
                            </Text>
                            <Text
                              className="text-bluegray-400 text-xs"
                              size="txtRobotoRegular12Bluegray400"
                            >
                              4 min
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="sm:ml-[0] ml-[85px] text-base text-gray-700"
                        size="txtRobotoBold16"
                      >
                        <>$12.56</>
                      </Text>
                      <Img
                        className="h-5 sm:ml-[0] ml-[126px] w-5"
                        src="images/img_frame13.svg"
                        alt="FrameTwelve One"
                      />
                    </div>
                    <Line className="self-center h-px bg-blue-50 w-full" />
                    <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                      <div className="flex sm:flex-1 flex-row gap-4 items-center justify-between rounded-sm w-[44%] sm:w-full">
                        <Img
                          className="h-[50px] md:h-auto object-cover rounded-sm w-[50px]"
                          src="images/img_rectangle4127_1.png"
                          alt="Rectangle4127 Two"
                        />
                        <div className="flex flex-col gap-1.5 items-start justify-start pb-0.5">
                          <Text
                            className="text-gray-700 text-sm"
                            size="txtRobotoMedium14"
                          >
                            Sweet cheezy pizza kids
                          </Text>
                          <Text
                            className="text-[10px] text-blue-A201"
                            size="txtRobotoMedium10"
                          >
                            BURGER
                          </Text>
                          <div className="flex flex-row gap-[11px] items-center justify-start w-[94%] md:w-full">
                            <Text
                              className="text-bluegray-400 text-xs"
                              size="txtRobotoRegular12Bluegray400"
                            >
                              Serves for 4 Person
                            </Text>
                            <Text
                              className="text-bluegray-400 text-xs"
                              size="txtRobotoRegular12Bluegray400"
                            >
                              4 min
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="sm:ml-[0] ml-[85px] text-base text-gray-700"
                        size="txtRobotoBold16"
                      >
                        <>$12.56</>
                      </Text>
                      <Img
                        className="h-5 sm:ml-[0] ml-[126px] w-5"
                        src="images/img_frame13.svg"
                        alt="FrameTwelve Two"
                      />
                    </div>
                  </List>
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text
                      className="mt-0.5 text-gray-700 text-xs"
                      size="txtPoppinsMedium12"
                    >
                      Dispalying 3 Out of 25
                    </Text>
                    <Button
                      className="bg-transparent cursor-pointer flex items-center justify-center min-w-[67px]"
                      rightIcon={
                        <Img
                          className="mt-2 mb-[7px] ml-[5px]"
                          src="images/img_arrow_1.svg"
                          alt="Arrow 1"
                        />
                      }
                    >
                      <div className="font-roboto leading-[normal] text-blue-A201 text-left text-sm">
                        Viwe All
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start mb-[17px] p-[18px] rounded-[15px] shadow-bs3 w-[49%] md:w-full">
                <div className="flex flex-col gap-6 items-center justify-start my-1.5 w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="text-base text-gray-700"
                      size="txtRobotoMedium16Gray700"
                    >
                      Customer Map
                    </Text>
                    <div className="border border-blue-50 border-solid flex flex-col items-center justify-start p-[5px] rounded-[15px]">
                      <div className="flex flex-row items-center justify-between rounded-[10px] w-[94%] md:w-full">
                        <Text
                          className="text-gray-700 text-xs"
                          size="txtRobotoRegular12Gray700"
                        >
                          Today
                        </Text>
                        <Text
                          className="bg-blue-A201 h-5 justify-center px-[11px] py-[3px] rounded-[10px] text-white-A700 text-xs w-[57px]"
                          size="txtRobotoRegular12"
                        >
                          Month
                        </Text>
                        <Text
                          className="text-gray-700 text-xs"
                          size="txtRobotoRegular12Gray700"
                        >
                          Weekly
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[232px] sm:h-[413px] relative w-full">
                    <div className="absolute flex flex-col gap-2.5 inset-x-[0] items-center justify-start mx-auto py-0.5 top-[2%] w-[99%]">
                      <div className="flex sm:flex-col flex-row gap-[17px] items-end justify-between w-full">
                        <Text
                          className="text-bluegray-400 text-xs"
                          size="txtRobotoRegular12Bluegray400"
                        >
                          500
                        </Text>
                        <Line className="bg-blue-50 h-px sm:mt-0 my-[5px] w-[93%]" />
                      </div>
                      <div className="flex sm:flex-col flex-row gap-[17px] items-end justify-between w-full">
                        <Text
                          className="text-bluegray-400 text-xs"
                          size="txtRobotoRegular12Bluegray400"
                        >
                          400
                        </Text>
                        <Line className="bg-blue-50 h-px sm:mt-0 my-[5px] w-[93%]" />
                      </div>
                      <div className="flex sm:flex-col flex-row gap-[17px] items-end justify-between w-full">
                        <Text
                          className="text-bluegray-400 text-xs"
                          size="txtRobotoRegular12Bluegray400"
                        >
                          300
                        </Text>
                        <Line className="bg-blue-50 h-px sm:mt-0 my-[5px] w-[93%]" />
                      </div>
                      <div className="flex sm:flex-col flex-row gap-[17px] items-end justify-between w-full">
                        <Text
                          className="text-bluegray-400 text-xs"
                          size="txtRobotoRegular12Bluegray400"
                        >
                          200
                        </Text>
                        <Line className="bg-blue-50 h-px sm:mt-0 my-[5px] w-[93%]" />
                      </div>
                      <div className="flex sm:flex-col flex-row gap-[17px] items-end justify-between w-full">
                        <Text
                          className="text-bluegray-400 text-xs"
                          size="txtRobotoRegular12Bluegray400"
                        >
                          100
                        </Text>
                        <Line className="bg-blue-50 h-px sm:mt-0 my-[5px] w-[93%]" />
                      </div>
                      <div className="flex sm:flex-col flex-row gap-[21px] items-end justify-between w-full">
                        <Text
                          className="text-bluegray-400 text-xs"
                          size="txtRobotoRegular12Bluegray400"
                        >
                          90
                        </Text>
                        <Line className="bg-blue-50 h-px sm:mt-0 my-[5px] w-[93%]" />
                      </div>
                      <div className="flex sm:flex-col flex-row gap-[21px] items-end justify-between w-full">
                        <Text
                          className="text-bluegray-400 text-xs"
                          size="txtRobotoRegular12Bluegray400"
                        >
                          70
                        </Text>
                        <Line className="bg-blue-50 h-px sm:mt-0 my-[5px] w-[93%]" />
                      </div>
                      <div className="flex sm:flex-col flex-row gap-5 items-end justify-between w-full">
                        <Text
                          className="text-bluegray-400 text-xs"
                          size="txtRobotoRegular12Bluegray400"
                        >
                          60
                        </Text>
                        <Line className="bg-blue-50 h-px sm:mt-0 my-[5px] w-[94%]" />
                      </div>
                      <div className="flex sm:flex-col flex-row gap-5 items-end justify-between w-full">
                        <Text
                          className="text-bluegray-400 text-xs"
                          size="txtRobotoRegular12Bluegray400"
                        >
                          50
                        </Text>
                        <Line className="bg-blue-50 h-px sm:mt-0 my-[5px] w-[94%]" />
                      </div>
                    </div>
                    <div className="absolute flex flex-row gap-6 h-full inset-y-[0] items-end justify-between my-auto right-[0] w-[94%]">
                      <div className="flex flex-col items-center justify-start mb-[3px] mt-[42px] w-[5%]">
                        <div className="bg-blue-A201 h-[78px] rounded-tl-md rounded-tr-md w-3/5"></div>
                        <div className="bg-orange-300 h-[34px] mt-[9px] rounded-tl-md rounded-tr-md w-3/5"></div>
                        <Text
                          className="mt-[51px] text-bluegray-400 text-xs"
                          size="txtRobotoRegular12Bluegray400"
                        >
                          Jan
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start mb-[3px] w-[5%]">
                        <div className="bg-blue-A201 h-[117px] rounded-tl-md rounded-tr-md w-3/5"></div>
                        <div className="bg-orange-300 h-6 mt-3 rounded-tl-md rounded-tr-md w-3/5"></div>
                        <Text
                          className="mt-[61px] text-bluegray-400 text-xs"
                          size="txtRobotoRegular12Bluegray400"
                        >
                          Feb
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start mb-[3px] mt-3 w-[5%]">
                        <div className="bg-blue-A201 h-[105px] rounded-tl-md rounded-tr-md w-[55%]"></div>
                        <div className="bg-orange-300 h-[73px] mt-2.5 rounded-tl-md rounded-tr-md w-[55%]"></div>
                        <Text
                          className="mt-[13px] text-bluegray-400 text-xs"
                          size="txtRobotoRegular12Bluegray400"
                        >
                          Mar
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start mt-[73px] w-[5%]">
                        <div className="bg-blue-A201 h-[46px] md:ml-[0] ml-[3px] rounded-tl-md rounded-tr-md w-[64%]"></div>
                        <div className="bg-orange-300 h-11 md:ml-[0] ml-[3px] mt-[9px] rounded-tl-md rounded-tr-md w-[64%]"></div>
                        <Text
                          className="mt-[43px] text-bluegray-400 text-xs"
                          size="txtRobotoRegular12Bluegray400"
                        >
                          Apr
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start mt-[92px] w-[5%]">
                        <div className="bg-blue-A201 h-[25px] md:ml-[0] ml-[5px] rounded-tl-md rounded-tr-md w-[53%]"></div>
                        <div className="bg-orange-300 h-6 md:ml-[0] ml-[5px] mt-[11px] rounded-tl-md rounded-tr-md w-[53%]"></div>
                        <Text
                          className="mt-[63px] text-bluegray-400 text-xs"
                          size="txtRobotoRegular12Bluegray400"
                        >
                          May
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start mb-0.5 mt-11 w-[5%]">
                        <div className="bg-blue-A201 h-[75px] rounded-tl-md rounded-tr-md w-3/5"></div>
                        <div className="bg-orange-300 h-[39px] mt-2 rounded-tl-md rounded-tr-md w-3/5"></div>
                        <Text
                          className="mt-[49px] text-bluegray-400 text-xs"
                          size="txtRobotoRegular12Bluegray400"
                        >
                          Jun
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start mt-[21px] w-[5%]">
                        <div className="bg-blue-A201 h-[97px] rounded-tl-md rounded-tr-md w-[55%]"></div>
                        <div className="bg-orange-300 h-8 mt-2.5 rounded-tl-md rounded-tr-md w-[55%]"></div>
                        <Text
                          className="mt-[55px] text-bluegray-400 text-xs"
                          size="txtRobotoRegular12Bluegray400"
                        >
                          July
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start mt-[84px] w-[5%]">
                        <div className="bg-blue-A201 h-8 rounded-tl-md rounded-tr-md w-[55%]"></div>
                        <div className="bg-orange-300 h-[45px] mt-[11px] rounded-tl-md rounded-tr-md w-[55%]"></div>
                        <Text
                          className="mt-[43px] text-bluegray-400 text-xs"
                          size="txtRobotoRegular12Bluegray400"
                        >
                          Aug
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start mt-6 w-[5%]">
                        <div className="bg-blue-A201 h-[97px] ml-1 md:ml-[0] rounded-tl-md rounded-tr-md w-[58%]"></div>
                        <div className="bg-orange-300 h-8 ml-1 md:ml-[0] mt-2.5 rounded-tl-md rounded-tr-md w-[58%]"></div>
                        <Text
                          className="mt-[52px] text-bluegray-400 text-xs"
                          size="txtRobotoRegular12Bluegray400"
                        >
                          Sep
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start mb-[3px] mt-[74px] w-[5%]">
                        <div className="bg-blue-A201 h-[46px] md:ml-[0] ml-[3px] rounded-tl-md rounded-tr-md w-[64%]"></div>
                        <div className="bg-orange-300 h-11 md:ml-[0] ml-[3px] mt-[9px] rounded-tl-md rounded-tr-md w-[64%]"></div>
                        <Text
                          className="mt-[41px] text-bluegray-400 text-xs"
                          size="txtRobotoRegular12Bluegray400"
                        >
                          Oct
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start mb-[3px] mt-2.5 w-[5%]">
                        <div className="bg-blue-A201 h-[105px] rounded-tl-md rounded-tr-md w-[55%]"></div>
                        <div className="bg-orange-300 h-[73px] mt-2.5 rounded-tl-md rounded-tr-md w-[55%]"></div>
                        <Text
                          className="mt-[15px] text-bluegray-400 text-xs"
                          size="txtRobotoRegular12Bluegray400"
                        >
                          Nov
                        </Text>
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

export default AnalyticsPage;
