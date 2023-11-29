import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import {
  Button,
  GoogleMap,
  Img,
  Input,
  Line,
  List,
  SelectBox,
  Text,
} from "components";

import { CloseSVG } from "../../assets/images";

const groupTwentySevenOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const groupTwentySevenOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const monthlyOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const monthlyOptionsList1 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DashboardPage = () => {
  const navigate = useNavigate();

  const [searchvalue, setSearchvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-50 flex sm:flex-col md:flex-col flex-row font-roboto sm:gap-5 md:gap-5 items-start mx-auto pb-[68px] w-full">
        <Sidebar className="!sticky !w-[250px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
          <div className="flex flex-col items-start justify-start mb-[85px] mt-6 w-full">
            <Img
              className="h-[30px] ml-7 md:ml-[0] w-1/2"
              src="images/img_group18298.svg"
              alt="Group18298"
            />
            <div className="flex flex-col gap-3 items-center justify-start mt-[65px] w-full">
              <div className="bg-blue-50 flex flex-row gap-[26px] items-center justify-start md:pr-10 pr-28 sm:pr-5 w-full">
                <Line className="bg-blue-A201 h-10 w-0.5" />
                <div className="flex flex-row gap-3 items-start justify-center w-4/5">
                  <Img
                    className="h-5 w-5"
                    src="images/img_circlesfour.svg"
                    alt="CirclesFour"
                  />
                  <Text
                    className="text-base text-blue-A201"
                    size="txtRobotoMedium16"
                  >
                    Dashboard
                  </Text>
                </div>
              </div>
              <div
                className="common-pointer flex flex-col items-center justify-start p-2 w-full"
                onClick={() => navigate("/orderlist")}
              >
                <div className="flex flex-row items-center justify-between w-4/5 md:w-full">
                  <div className="flex flex-row gap-3 items-start justify-start">
                    <Img
                      className="h-5 w-5"
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
                  <div className="flex flex-row gap-3 items-start justify-start mt-[3px]">
                    <Img
                      className="h-5 w-5"
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
                  <div className="flex flex-row gap-3 items-start justify-start mt-[3px]">
                    <Img
                      className="h-5 w-5"
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
                className="common-pointer flex flex-col items-start justify-start p-2.5 w-full"
                onClick={() => navigate("/analytics")}
              >
                <div className="flex flex-row gap-3 items-start justify-start md:ml-[0] ml-[18px] w-[43%] md:w-full">
                  <Img
                    className="h-5 w-5"
                    src="images/img_frame20.svg"
                    alt="FrameTwenty"
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
                  <div className="flex flex-row gap-3 items-start justify-start mt-[3px]">
                    <Img
                      className="h-5 w-5"
                      src="images/img_frame21.svg"
                      alt="FrameTwentyOne"
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
                src="images/img_group18692.png"
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
        <div className="flex flex-1 flex-col gap-[39px] items-center justify-start md:px-5 w-full">
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
          <div className="flex flex-col items-start justify-start w-[94%] md:w-full">
            <div className="flex flex-col gap-1.5 items-start justify-start">
              <Text
                className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-700"
                size="txtRobotoMedium25"
              >
                Dashboard
              </Text>
              <Text
                className="text-base text-bluegray-400"
                size="txtRobotoRegular16"
              >
                Wellcome to Lojusa Admin
              </Text>
            </div>
            <List
              className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center mt-9 w-full"
              orientation="horizontal"
            >
              <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start p-[30px] sm:px-5 rounded-[10px] shadow-bs3 w-full">
                <div className="flex flex-row gap-6 items-center justify-start w-[89%] md:w-full">
                  <Button
                    className="flex h-[70px] items-center justify-center w-[70px]"
                    shape="circle"
                    color="blue_50"
                    size="xl"
                    variant="fill"
                  >
                    <Img
                      className="h-[30px]"
                      src="images/img_menu.svg"
                      alt="menu"
                    />
                  </Button>
                  <div className="flex flex-col gap-2 items-start justify-start">
                    <Text
                      className="text-[22px] text-gray-700 sm:text-lg md:text-xl"
                      size="txtRobotoBold22"
                    >
                      2560
                    </Text>
                    <Text
                      className="text-bluegray-400 text-sm"
                      size="txtRobotoRegular14"
                    >
                      Total Menus
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[30px] sm:px-5 rounded-[10px] shadow-bs3 w-full">
                <div className="flex flex-row gap-6 items-center justify-start w-[95%] md:w-full">
                  <Button
                    className="flex h-[70px] items-center justify-center w-[70px]"
                    shape="circle"
                    color="blue_50"
                    size="xl"
                    variant="fill"
                  >
                    <Img className="h-8" src="images/img_file.svg" alt="file" />
                  </Button>
                  <div className="flex flex-col gap-2 items-start justify-start">
                    <Text
                      className="text-[22px] text-gray-700 sm:text-lg md:text-xl"
                      size="txtRobotoBold22"
                    >
                      $87,256
                    </Text>
                    <Text
                      className="text-bluegray-400 text-sm"
                      size="txtRobotoRegular14"
                    >
                      Total Revenew
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[30px] sm:px-5 rounded-[10px] shadow-bs3 w-full">
                <div className="flex flex-row gap-6 items-center justify-start w-[98%] md:w-full">
                  <Button
                    className="flex h-[70px] items-center justify-center w-[70px]"
                    shape="circle"
                    color="blue_50"
                    size="xl"
                    variant="fill"
                  >
                    <Img
                      className="h-[33px]"
                      src="images/img_search_blue_A201.svg"
                      alt="search One"
                    />
                  </Button>
                  <div className="flex flex-col gap-2 items-start justify-start">
                    <Text
                      className="text-[22px] text-gray-700 sm:text-lg md:text-xl"
                      size="txtRobotoBold22"
                    >
                      2560k
                    </Text>
                    <Text
                      className="text-bluegray-400 text-sm"
                      size="txtRobotoRegular14"
                    >
                      Total Customer
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start p-[30px] sm:px-5 rounded-[10px] shadow-bs3 w-full">
                <div className="flex flex-row gap-6 items-center justify-start w-[86%] md:w-full">
                  <Button
                    className="flex h-[70px] items-center justify-center w-[70px]"
                    shape="circle"
                    color="blue_50"
                    size="xl"
                    variant="fill"
                  >
                    <Img
                      className="h-[30px]"
                      src="images/img_airplane_70X70.svg"
                      alt="airplane One"
                    />
                  </Button>
                  <div className="flex flex-col gap-2 items-start justify-start">
                    <Text
                      className="text-[22px] text-gray-700 sm:text-lg md:text-xl"
                      size="txtRobotoBold22"
                    >
                      2560
                    </Text>
                    <Text
                      className="text-bluegray-400 text-sm"
                      size="txtRobotoRegular14"
                    >
                      Total Oders
                    </Text>
                  </div>
                </div>
              </div>
            </List>
            <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between mt-[30px] w-full">
              <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start w-[49%] md:w-full">
                <div className="bg-white-A700 flex flex-col items-center justify-start p-4 rounded-[15px] shadow-bs3 w-full">
                  <div className="flex flex-col items-center justify-start mb-[5px] mt-[9px] w-full">
                    <div className="flex flex-row items-center justify-between w-[99%] md:w-full">
                      <Text
                        className="text-base text-gray-700"
                        size="txtRobotoMedium16Gray700"
                      >
                        Revenue
                      </Text>
                      <SelectBox
                        className="leading-[normal] text-left text-xs w-[21%] sm:w-full"
                        placeholderClassName="text-blue-A201"
                        indicator={
                          <Img
                            className="h-3 mr-[21px] w-3"
                            src="images/img_frame_11.svg"
                            alt="Frame 11"
                          />
                        }
                        isMulti={false}
                        name="GroupTwentySeven"
                        options={groupTwentySevenOptionsList}
                        isSearchable={false}
                        placeholder="Monthly"
                        shape="round"
                        color="blue_50"
                        size="xs"
                        variant="outline"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-between mt-[19px] w-[99%] md:w-full">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-blue-A201 text-xs"
                          size="txtRobotoBold12"
                        >
                          Income
                        </Text>
                        <Text
                          className="mt-[5px] text-gray-700 text-xs"
                          size="txtRobotoMedium12"
                        >
                          $1236598
                        </Text>
                      </div>
                      <div className="border border-blue-50 border-solid flex flex-col items-center justify-start p-[5px] rounded-[14px] w-[38%]">
                        <div className="flex flex-row items-center justify-between rounded-[10px] w-[95%] md:w-full">
                          <Text
                            className="bg-blue-A201 h-5 justify-center px-2.5 py-[3px] rounded-[10px] text-white-A700 text-xs w-[35px]"
                            size="txtRobotoRegular12"
                          >
                            All
                          </Text>
                          <Text
                            className="text-gray-700 text-xs"
                            size="txtRobotoRegular12Gray700"
                          >
                            Food
                          </Text>
                          <Text
                            className="text-gray-700 text-xs"
                            size="txtRobotoRegular12Gray700"
                          >
                            Beverages
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="h-[194px] md:h-[210px] mt-6 pl-[3px] relative w-full">
                      <div className="absolute flex flex-col gap-[26px] items-start justify-start left-[2%] top-[0]">
                        <Text
                          className="text-bluegray-400 text-xs tracking-[0.40px]"
                          size="txtRobotoRegular12Bluegray400"
                        >
                          $40k
                        </Text>
                        <Text
                          className="text-bluegray-400 text-xs tracking-[0.40px]"
                          size="txtRobotoRegular12Bluegray400"
                        >
                          $30k
                        </Text>
                        <Text
                          className="text-bluegray-400 text-xs tracking-[0.40px]"
                          size="txtRobotoRegular12Bluegray400"
                        >
                          $20k
                        </Text>
                        <Text
                          className="text-bluegray-400 text-xs tracking-[0.40px]"
                          size="txtRobotoRegular12Bluegray400"
                        >
                          $10k
                        </Text>
                        <Text
                          className="ml-5 md:ml-[0] text-gray-500 text-xs tracking-[0.40px]"
                          size="txtMontserratRegular12"
                        >
                          0
                        </Text>
                      </div>
                      <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[0] w-[94%]">
                        <div className="md:h-[186px] h-[187px] relative w-full">
                          <div className="md:h-[186px] h-[187px] m-auto w-full">
                            <div className="absolute flex flex-col h-max inset-[0] justify-center m-auto w-full">
                              <Line className="bg-blue-50 h-[163px] ml-3 md:ml-[0] mr-[463px] w-px" />
                              <div className="flex flex-col items-start justify-start mt-[3px] w-full">
                                <Line className="bg-gray-301 h-[0.82px] w-full" />
                                <Text
                                  className="mt-[3px] text-bluegray-400 text-xs"
                                  size="txtRobotoRegular12Bluegray400"
                                >
                                  Mon
                                </Text>
                              </div>
                            </div>
                            <div className="absolute flex flex-col gap-2 h-full inset-y-[0] items-center justify-start left-[16%] my-auto w-[6%]">
                              <Line className="bg-blue-50 h-[163px] w-px" />
                              <Text
                                className="text-bluegray-400 text-xs"
                                size="txtRobotoRegular12Bluegray400"
                              >
                                Tue
                              </Text>
                            </div>
                            <div className="absolute flex flex-col gap-2 h-full inset-y-[0] items-center justify-start left-[32%] my-auto w-[6%]">
                              <Line className="bg-blue-50 h-[163px] w-px" />
                              <Text
                                className="mb-0.5 text-bluegray-400 text-xs"
                                size="txtRobotoRegular12Bluegray400"
                              >
                                Wed
                              </Text>
                            </div>
                            <div className="absolute flex flex-col gap-2 h-full inset-[0] items-center justify-center m-auto w-[6%]">
                              <Line className="bg-blue-50 h-[163px] w-px" />
                              <Text
                                className="text-bluegray-400 text-xs"
                                size="txtRobotoRegular12Bluegray400"
                              >
                                Thu
                              </Text>
                            </div>
                            <div className="absolute flex flex-col gap-2 h-full inset-y-[0] items-center justify-start my-auto pb-0.5 px-0.5 right-[32%] w-[6%]">
                              <Line className="bg-blue-50 h-[163px] w-px" />
                              <Text
                                className="h-[13px] text-bluegray-400 text-xs"
                                size="txtRobotoRegular12Bluegray400"
                              >
                                Fri
                              </Text>
                            </div>
                            <div className="absolute flex flex-col gap-2 h-full inset-y-[0] items-center justify-start my-auto pb-0.5 px-0.5 right-[16%] w-[6%]">
                              <Line className="bg-blue-50 h-[163px] w-px" />
                              <Text
                                className="text-bluegray-400 text-xs"
                                size="txtRobotoRegular12Bluegray400"
                              >
                                Sat
                              </Text>
                            </div>
                            <div className="absolute flex flex-col gap-2 h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[6%]">
                              <Line className="bg-blue-50 h-[163px] w-px" />
                              <Text
                                className="text-bluegray-400 text-xs"
                                size="txtRobotoRegular12Bluegray400"
                              >
                                Sun
                              </Text>
                            </div>
                          </div>
                          <Img
                            className="absolute bottom-[11%] h-[135px] inset-x-[0] mx-auto object-cover w-[95%]"
                            src="images/img_group18304.png"
                            alt="Group18304"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col items-center justify-start p-[18px] rounded-[15px] shadow-bs3 w-full">
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
              <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start w-[49%] md:w-full">
                <div className="bg-white-A700 flex flex-col items-center justify-start p-5 rounded-[15px] shadow-bs3 w-full">
                  <div className="flex flex-col items-center justify-start my-1.5 w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="mt-[3px] text-base text-gray-700"
                        size="txtRobotoMedium16Gray700"
                      >
                        Order Summary
                      </Text>
                      <SelectBox
                        className="sm:flex-1 leading-[normal] text-left text-xs w-[21%] sm:w-full"
                        placeholderClassName="text-blue-A201"
                        indicator={
                          <Img
                            className="h-3 mr-[21px] w-3"
                            src="images/img_frame_11.svg"
                            alt="Frame 11"
                          />
                        }
                        isMulti={false}
                        name="GroupTwentySeven One"
                        options={groupTwentySevenOneOptionsList}
                        isSearchable={false}
                        placeholder="Monthly"
                        shape="round"
                        color="blue_50"
                        size="xs"
                        variant="outline"
                      />
                    </div>
                    <div className="border border-blue-50 border-solid flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-[23px] rounded-[5px] w-full">
                      <div className="flex flex-col items-start justify-start sm:ml-[0] ml-[19px]">
                        <Text
                          className="text-base text-gray-700"
                          size="txtRobotoMedium16Gray700"
                        >
                          1256K
                        </Text>
                        <Text
                          className="mt-1 text-bluegray-400 text-sm"
                          size="txtRobotoRegular14"
                        >
                          On Delivery{" "}
                        </Text>
                      </div>
                      <Line className="bg-blue-50 h-[59px] sm:h-px sm:ml-[0] ml-[35px] sm:w-full w-px" />
                      <div className="flex flex-col items-start justify-start ml-5 sm:ml-[0]">
                        <Text
                          className="text-base text-gray-700"
                          size="txtRobotoMedium16Gray700"
                        >
                          452K
                        </Text>
                        <Text
                          className="mt-1 text-bluegray-400 text-sm"
                          size="txtRobotoRegular14"
                        >
                          Total Delivered
                        </Text>
                      </div>
                      <Line className="bg-blue-50 h-[59px] sm:h-px sm:ml-[0] ml-[11px] sm:w-full w-px" />
                      <div className="flex flex-col items-start justify-start sm:ml-[0] ml-[19px]">
                        <Text
                          className="text-base text-gray-700"
                          size="txtRobotoMedium16Gray700"
                        >
                          25K
                        </Text>
                        <Text
                          className="mt-1 text-bluegray-400 text-sm"
                          size="txtRobotoRegular14"
                        >
                          Canceled
                        </Text>
                      </div>
                      <Line className="bg-blue-50 h-[59px] sm:h-px sm:ml-[0] ml-[47px] sm:w-full w-px" />
                      <div className="flex flex-col items-start justify-start sm:ml-[0] ml-[19px]">
                        <Text
                          className="text-base text-gray-700"
                          size="txtRobotoMedium16Gray700"
                        >
                          2256K
                        </Text>
                        <Text
                          className="mt-1 text-bluegray-400 text-sm"
                          size="txtRobotoRegular14"
                        >
                          Total Proses
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray-100 flex flex-col items-center justify-start mt-5 p-2.5 rounded-[5px] w-full">
                      <div className="flex flex-row items-center justify-between w-[98%] md:w-full">
                        <Text
                          className="text-gray-700 text-sm"
                          size="txtRobotoMedium14"
                        >
                          New Order
                        </Text>
                        <Button
                          className="cursor-pointer font-medium leading-[normal] min-w-[78px] text-center text-sm"
                          shape="round"
                          color="green_500"
                          size="sm"
                          variant="fill"
                        >
                          2512k
                        </Button>
                        <Button
                          className="bg-transparent cursor-pointer flex items-center justify-center min-w-[67px]"
                          rightIcon={
                            <Img
                              className="h-3 ml-1 my-0.5"
                              src="images/img_arrowright.svg"
                              alt="arrow_right"
                            />
                          }
                        >
                          <div className="font-medium leading-[normal] text-blue-A201 text-left text-sm">
                            Viwe All
                          </div>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col items-center justify-start py-[21px] rounded-[15px] shadow-bs3 w-full">
                  <div className="flex flex-col gap-6 items-center justify-start w-full">
                    <div className="flex flex-row items-center justify-between rounded-[15px] w-[93%] md:w-full">
                      <Text
                        className="text-base text-gray-701"
                        size="txtRobotoMedium16Gray701"
                      >
                        Deliyvery Map
                      </Text>
                      <SelectBox
                        className="leading-[normal] text-left text-xs w-[21%] sm:w-full"
                        placeholderClassName="text-blue-A201"
                        indicator={
                          <Img
                            className="h-4 mr-[22px] w-2.5"
                            src="images/img_caretdown.svg"
                            alt="caret-down"
                          />
                        }
                        isMulti={false}
                        name="groupTwentySeven Two"
                        options={monthlyOptionsList}
                        isSearchable={false}
                        placeholder="Monthly"
                        shape="round"
                        color="blue_50"
                        size="xs"
                        variant="outline"
                      />
                    </div>
                    <div className="flex flex-col gap-6 items-center justify-start w-full">
                      <div className="h-[189px] sm:h-[377px] relative w-full">
                        <GoogleMap
                          className="h-[189px] m-auto w-full"
                          showMarker={false}
                        ></GoogleMap>
                        <div className="absolute flex h-[137px] sm:h-[377px] inset-y-[0] justify-end left-[9%] my-auto w-[76%] sm:w-full">
                          <Img
                            className="h-[86px] mb-[17px] mt-auto mx-auto w-[93%]"
                            src="images/img_group18766.svg"
                            alt="Group18766"
                          />
                          <div className="absolute flex sm:flex-col flex-row sm:gap-5 h-full inset-[0] items-start justify-center m-auto w-full">
                            <div
                              className="bg-cover bg-no-repeat flex sm:flex-1 flex-col h-10 items-center justify-start sm:mt-0 mt-[97px] p-1.5 w-[9%] sm:w-full"
                              style={{
                                backgroundImage:
                                  "url('images/img_group18767.svg')",
                              }}
                            >
                              <Img
                                className="h-[23px] md:h-auto mb-1 rounded-[50%] w-6"
                                src="images/img_ellipse.png"
                                alt="Ellipse"
                              />
                            </div>
                            <Img
                              className="h-[92px] md:h-auto mb-[45px] ml-7 sm:ml-[0] object-cover w-[92px]"
                              src="images/img_marker1.png"
                              alt="MarkerOne"
                            />
                            <div
                              className="bg-cover bg-no-repeat flex sm:flex-1 flex-col h-10 items-center justify-start sm:ml-[0] ml-[45px] sm:mt-0 mt-[17px] p-1.5 w-[9%] sm:w-full"
                              style={{
                                backgroundImage:
                                  "url('images/img_group18767.svg')",
                              }}
                            >
                              <Img
                                className="h-[23px] md:h-auto mb-1 rounded-[50%] w-6"
                                src="images/img_ellipse_23X24.png"
                                alt="Ellipse One"
                              />
                            </div>
                            <Img
                              className="h-[43px] sm:mt-0 mt-[57px] w-[43px]"
                              src="images/img_ticket.svg"
                              alt="ticket"
                            />
                            <div
                              className="bg-cover bg-no-repeat flex sm:flex-1 flex-col h-10 items-center justify-start sm:ml-[0] ml-[87px] sm:mt-0 mt-[97px] p-1.5 w-[9%] sm:w-full"
                              style={{
                                backgroundImage:
                                  "url('images/img_group18767.svg')",
                              }}
                            >
                              <Img
                                className="h-[23px] md:h-auto mb-1 rounded-[50%] w-6"
                                src="images/img_ellipse_2.png"
                                alt="Ellipse Two"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-6 items-start justify-start w-[93%] md:w-full">
                        <Text
                          className="ml-0.5 md:ml-[0] text-base text-gray-700"
                          size="txtRobotoMedium16Gray700"
                        >
                          Upcomming Sehedule
                        </Text>
                        <List
                          className="flex flex-col gap-3 items-center w-full"
                          orientation="vertical"
                        >
                          <div className="flex flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                            <div className="flex sm:flex-1 flex-row gap-1.5 items-center justify-between rounded-sm w-2/5 sm:w-full">
                              <Img
                                className="h-[30px] md:h-auto object-cover rounded-sm w-[30px]"
                                src="images/img_rectangle4099.png"
                                alt="Rectangle4099"
                              />
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-gray-700 text-sm"
                                  size="txtRobotoRegular14Gray700"
                                >
                                  <span className="text-gray-700 font-roboto text-left font-normal">
                                    Mohan Cudhidi
                                  </span>
                                  <span className="text-blue-A201 font-roboto text-left font-medium">
                                    {" "}
                                    (4 Iteam )
                                  </span>
                                </Text>
                                <Text
                                  className="mt-0.5 text-bluegray-400 text-xs"
                                  size="txtRobotoRegular12Bluegray400"
                                >
                                  Will be shipping on 11 : 24 Am
                                </Text>
                              </div>
                            </div>
                            <div className="flex sm:flex-1 flex-row items-start justify-evenly w-[41%] sm:w-full">
                              <div className="flex flex-col items-end justify-start mt-0.5">
                                <Text
                                  className="text-gray-700 text-xs"
                                  size="txtRobotoRegular12Gray700"
                                >
                                  2340 Hex Parker Rd. Allentown,
                                </Text>
                                <Text
                                  className="mt-0.5 text-gray-700 text-xs"
                                  size="txtRobotoRegular12Gray700"
                                >
                                  South Africa
                                </Text>
                              </div>
                              <Button
                                className="flex h-[30px] items-center justify-center mb-0.5 rounded-[50%] w-[30px]"
                                shape="circle"
                                color="blue_A201"
                                size="sm"
                                variant="fill"
                              >
                                <Img
                                  className="h-4"
                                  src="images/img_search_white_A700.svg"
                                  alt="search Two"
                                />
                              </Button>
                            </div>
                          </div>
                          <Line className="self-center h-px bg-blue-50 w-[99%]" />
                          <div className="flex flex-1 sm:flex-col flex-row sm:gap-10 items-end justify-between w-full">
                            <div className="flex sm:flex-1 flex-row gap-1.5 items-start justify-between mb-[5px] rounded-sm w-2/5 sm:w-full">
                              <Img
                                className="h-[30px] md:h-auto mt-0.5 object-cover rounded-sm w-[30px]"
                                src="images/img_rectangle4099_30X30.png"
                                alt="Rectangle4099 One"
                              />
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-gray-700 text-sm"
                                  size="txtRobotoRegular14Gray700"
                                >
                                  <span className="text-gray-700 font-roboto text-left font-normal">
                                    Nohan Cudhidi
                                  </span>
                                  <span className="text-blue-A201 font-roboto text-left font-normal">
                                    {" "}
                                  </span>
                                  <span className="text-blue-A201 font-roboto text-left font-medium">
                                    (2 Iteam )
                                  </span>
                                </Text>
                                <Text
                                  className="text-bluegray-400 text-xs"
                                  size="txtRobotoRegular12Bluegray400"
                                >
                                  Will be shipping on 12 : 24 Am
                                </Text>
                              </div>
                            </div>
                            <div className="flex sm:flex-1 flex-row gap-[7px] items-start justify-between sm:mt-0 mt-1.5 w-[42%] sm:w-full">
                              <div className="flex flex-col items-end justify-start mt-0.5">
                                <Text
                                  className="text-gray-700 text-xs"
                                  size="txtRobotoRegular12Gray700"
                                >
                                  4140 Parker Rd. Allentown, New{" "}
                                </Text>
                                <Text
                                  className="text-gray-700 text-xs"
                                  size="txtRobotoRegular12Gray700"
                                >
                                  United states
                                </Text>
                              </div>
                              <Button
                                className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
                                shape="circle"
                                color="blue_A201"
                                size="sm"
                                variant="fill"
                              >
                                <Img
                                  className="h-4"
                                  src="images/img_search_white_A700.svg"
                                  alt="search Three"
                                />
                              </Button>
                            </div>
                          </div>
                        </List>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between mt-[30px] w-full">
              <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-5 rounded-[15px] shadow-bs3 w-[66%] md:w-full">
                <div className="flex flex-col gap-6 items-center justify-start my-2 w-full">
                  <div className="flex flex-row sm:gap-10 items-center justify-between rounded-[15px] w-full">
                    <Text
                      className="text-base text-gray-700"
                      size="txtRobotoMedium16Gray700"
                    >
                      Recent Oder Request
                    </Text>
                    <SelectBox
                      className="sm:flex-1 leading-[normal] text-left text-xs w-[16%] sm:w-full"
                      placeholderClassName="text-blue-A201"
                      indicator={
                        <Img
                          className="h-4 mr-[22px] w-2.5"
                          src="images/img_caretdown.svg"
                          alt="caret-down"
                        />
                      }
                      isMulti={false}
                      name="group18140"
                      options={monthlyOptionsList1}
                      isSearchable={false}
                      placeholder="Monthly"
                      shape="round"
                      color="blue_50"
                      size="xs"
                      variant="outline"
                    />
                  </div>
                  <List
                    className="flex flex-col gap-3 items-center pl-[3px] w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                      <div className="flex sm:flex-1 flex-row gap-[9px] items-start justify-between pb-0.5 rounded w-[35%] sm:w-full">
                        <Img
                          className="h-12 md:h-auto mt-0.5 object-cover rounded"
                          src="images/img_rectangle4144.png"
                          alt="Rectangle4144"
                        />
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="ml-0.5 md:ml-[0] text-gray-700 text-sm"
                            size="txtRobotoMedium14"
                          >
                            <>
                              Sweet cheezy pizza for kids <br />
                              Meal (smail )
                            </>
                          </Text>
                          <Text
                            className="mt-1 text-blue-A201 text-xs"
                            size="txtRobotoMedium12BlueA201"
                          >
                            #012365
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-gray-700 text-sm"
                          size="txtRobotoMedium14"
                        >
                          Marvin McKinney
                        </Text>
                        <Text
                          className="leading-[16.00px] mt-1 text-bluegray-400 text-xs w-full"
                          size="txtRobotoRegular12Bluegray400"
                        >
                          3891 Ranchview Dr. California 62639
                        </Text>
                      </div>
                      <Text
                        className="text-gray-700 text-sm"
                        size="txtRobotoMedium14"
                      >
                        $12.5
                      </Text>
                      <Text
                        className="text-gray-700 text-sm"
                        size="txtRobotoMedium14"
                      >
                        X2
                      </Text>
                      <Button
                        className="cursor-pointer font-medium min-w-[100px] sm:mt-0 my-2.5 text-center text-sm"
                        shape="round"
                        color="blue_50"
                        size="sm"
                        variant="fill"
                      >
                        Pending
                      </Button>
                    </div>
                    <Line className="self-center h-px bg-blue-50 w-full" />
                    <div className="flex flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                      <div className="flex sm:flex-1 flex-row gap-[9px] items-start justify-between pb-0.5 rounded w-[35%] sm:w-full">
                        <Img
                          className="h-12 md:h-auto mt-0.5 object-cover rounded"
                          src="images/img_rectangle4144_48X50.png"
                          alt="Rectangle4144 One"
                        />
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="ml-0.5 md:ml-[0] text-gray-700 text-sm"
                            size="txtRobotoMedium14"
                          >
                            <>
                              Sweet cheezy pizza for kids <br />
                              Meal (smail )
                            </>
                          </Text>
                          <Text
                            className="mt-1 text-blue-A201 text-xs"
                            size="txtRobotoMedium12BlueA201"
                          >
                            #012365
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-gray-700 text-sm"
                          size="txtRobotoMedium14"
                        >
                          Jacob Jones
                        </Text>
                        <Text
                          className="leading-[16.00px] mt-[5px] text-bluegray-400 text-xs w-full"
                          size="txtRobotoRegular12Bluegray400"
                        >
                          3891 Ranchview Dr. California 62639
                        </Text>
                      </div>
                      <Text
                        className="text-gray-700 text-sm"
                        size="txtRobotoMedium14"
                      >
                        $11.5
                      </Text>
                      <Text
                        className="text-gray-700 text-sm"
                        size="txtRobotoMedium14"
                      >
                        X2
                      </Text>
                      <Button
                        className="!text-green-400 cursor-pointer font-medium min-w-[100px] sm:mt-0 my-[11px] text-center text-sm"
                        shape="round"
                        color="green_50"
                        size="sm"
                        variant="fill"
                      >
                        Delivered
                      </Button>
                    </div>
                    <Line className="self-center h-px bg-blue-50 w-full" />
                    <div className="flex flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                      <div className="flex sm:flex-1 flex-row gap-[9px] items-start justify-between pb-0.5 rounded w-[35%] sm:w-full">
                        <Img
                          className="h-12 md:h-auto mt-0.5 object-cover rounded"
                          src="images/img_rectangle4144_1.png"
                          alt="Rectangle4144 Two"
                        />
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="ml-0.5 md:ml-[0] text-gray-700 text-sm"
                            size="txtRobotoMedium14"
                          >
                            <>
                              Sweet cheezy pizza for kids <br />
                              Meal (smail )
                            </>
                          </Text>
                          <Text
                            className="mt-1 text-blue-A201 text-xs"
                            size="txtRobotoMedium12BlueA201"
                          >
                            #012365
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-gray-700 text-sm"
                          size="txtRobotoMedium14"
                        >
                          Cody Fisher
                        </Text>
                        <Text
                          className="leading-[16.00px] mt-[5px] text-bluegray-400 text-xs w-full"
                          size="txtRobotoRegular12Bluegray400"
                        >
                          3891 Ranchview Dr. California 62639
                        </Text>
                      </div>
                      <Text
                        className="text-gray-700 text-sm"
                        size="txtRobotoMedium14"
                      >
                        $42.5
                      </Text>
                      <Text
                        className="text-gray-700 text-sm"
                        size="txtRobotoMedium14"
                      >
                        X2
                      </Text>
                      <Button
                        className="cursor-pointer font-medium min-w-[100px] sm:mt-0 my-[11px] text-center text-sm"
                        shape="round"
                        color="blue_50"
                        size="sm"
                        variant="fill"
                      >
                        Pending
                      </Button>
                    </div>
                    <Line className="self-center h-px bg-blue-50 w-full" />
                    <div className="flex flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                      <div className="flex sm:flex-1 flex-row gap-[9px] items-start justify-between pb-0.5 rounded w-[35%] sm:w-full">
                        <Img
                          className="h-12 md:h-auto mt-0.5 object-cover rounded"
                          src="images/img_rectangle4144_2.png"
                          alt="Rectangle4144 Three"
                        />
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="ml-0.5 md:ml-[0] text-gray-700 text-sm"
                            size="txtRobotoMedium14"
                          >
                            <>
                              Sweet cheezy pizza for kids <br />
                              Meal (smail )
                            </>
                          </Text>
                          <Text
                            className="mt-1 text-blue-A201 text-xs"
                            size="txtRobotoMedium12BlueA201"
                          >
                            #012365
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-gray-700 text-sm"
                          size="txtRobotoMedium14"
                        >
                          Esther Howard
                        </Text>
                        <Text
                          className="leading-[16.00px] mt-[5px] text-bluegray-400 text-xs w-full"
                          size="txtRobotoRegular12Bluegray400"
                        >
                          3891 Ranchview Dr. California 62639
                        </Text>
                      </div>
                      <Text
                        className="text-gray-700 text-sm"
                        size="txtRobotoMedium14"
                      >
                        $92.5
                      </Text>
                      <Text
                        className="text-gray-700 text-sm"
                        size="txtRobotoMedium14"
                      >
                        X2
                      </Text>
                      <Button
                        className="!text-green-400 cursor-pointer font-medium min-w-[100px] sm:mt-0 my-[11px] text-center text-sm"
                        shape="round"
                        color="green_50"
                        size="sm"
                        variant="fill"
                      >
                        Delivered
                      </Button>
                    </div>
                  </List>
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
                    <div className="flex flex-1 flex-row gap-3.5 items-center justify-between pr-0.5 rounded w-full">
                      <Img
                        className="h-12 md:h-auto object-cover rounded"
                        src="images/img_rectangle4144_3.png"
                        alt="Rectangle4144 Four"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <div className="flex flex-row items-start justify-evenly w-full">
                          <div className="flex flex-col gap-1.5 items-start justify-start mt-0.5">
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
                              className="text-gray-700 text-sm"
                              size="txtRobotoBold14"
                            >
                              $5.6
                            </Text>
                          </div>
                          <div className="flex flex-col gap-6 items-end justify-start w-[54px]">
                            <Text
                              className="text-blue-A201 text-sm"
                              size="txtRobotoMedium14BlueA201"
                            >
                              #1
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
                    </div>
                    <Line className="self-center h-px bg-blue-50 w-[99%]" />
                    <div className="flex flex-1 flex-row gap-3.5 items-center justify-between rounded w-full">
                      <Img
                        className="h-12 md:h-auto object-cover rounded"
                        src="images/img_rectangle4144_4.png"
                        alt="Rectangle4144 Five"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <div className="flex flex-row items-start justify-evenly w-full">
                          <div className="flex flex-col gap-1.5 items-start justify-start mt-0.5">
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
                              className="text-gray-700 text-sm"
                              size="txtRobotoBold14"
                            >
                              $5.6
                            </Text>
                          </div>
                          <div className="flex flex-col gap-6 items-end justify-start">
                            <Text
                              className="text-blue-A201 text-sm"
                              size="txtRobotoMedium14BlueA201"
                            >
                              #2
                            </Text>
                            <Text
                              className="mr-1 text-bluegray-400 text-xs"
                              size="txtRobotoMedium12Bluegray400"
                            >
                              Order 56x{" "}
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Line className="self-center h-px bg-blue-50 w-[99%]" />
                    <div className="flex flex-1 flex-row gap-3.5 items-center justify-between rounded w-full">
                      <Img
                        className="h-12 md:h-auto object-cover rounded"
                        src="images/img_rectangle4144_5.png"
                        alt="Rectangle4144 Six"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <div className="flex flex-row items-start justify-evenly w-full">
                          <div className="flex flex-col gap-1.5 items-start justify-start mt-0.5">
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
                              className="text-gray-700 text-sm"
                              size="txtRobotoBold14"
                            >
                              $5.6
                            </Text>
                          </div>
                          <div className="flex flex-col gap-6 items-end justify-start">
                            <Text
                              className="text-blue-A201 text-sm"
                              size="txtRobotoMedium14BlueA201"
                            >
                              #3
                            </Text>
                            <Text
                              className="mr-1 text-bluegray-400 text-xs"
                              size="txtRobotoMedium12Bluegray400"
                            >
                              Order 56x{" "}
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Line className="self-center h-px bg-blue-50 w-[99%]" />
                    <div className="flex flex-1 flex-row gap-3.5 items-center justify-between rounded w-full">
                      <Img
                        className="h-12 md:h-auto object-cover rounded"
                        src="images/img_rectangle4144_6.png"
                        alt="Rectangle4144 Seven"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <div className="flex flex-row items-start justify-evenly w-full">
                          <div className="flex flex-col gap-1.5 items-start justify-start mt-0.5">
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
                              className="text-gray-700 text-sm"
                              size="txtRobotoBold14"
                            >
                              $5.6
                            </Text>
                          </div>
                          <div className="flex flex-col gap-6 items-end justify-start">
                            <Text
                              className="text-blue-A201 text-sm"
                              size="txtRobotoMedium14BlueA201"
                            >
                              #4
                            </Text>
                            <Text
                              className="mr-1 text-bluegray-400 text-xs"
                              size="txtRobotoMedium12Bluegray400"
                            >
                              Order 56x{" "}
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
