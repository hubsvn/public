import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import {
  Button,
  CheckBox,
  Img,
  Input,
  Line,
  List,
  SelectBox,
  Text,
} from "components";

import { CloseSVG } from "../../assets/images";

const filterOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const newestOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ReviewPage = () => {
  const navigate = useNavigate();

  const [searchvalue, setSearchvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
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
                <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-10 items-center justify-start p-2 w-full"
                    style={{
                      backgroundImage: "url('images/img_group18478.svg')",
                    }}
                  >
                    <div className="flex flex-row items-start justify-between w-4/5 md:w-full">
                      <div className="flex flex-row gap-[7px] items-center justify-start mt-[3px]">
                        <Img
                          className="h-[15px] w-4"
                          src="images/img_file_15X16.svg"
                          alt="file"
                        />
                        <Text
                          className="text-base text-blue-A201"
                          size="txtRobotoRegular16BlueA201"
                        >
                          Customer
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
                    onClick={() => navigate("/customer")}
                  >
                    <Text
                      className="ml-11 md:ml-[0] text-base text-bluegray-400"
                      size="txtRobotoRegular16"
                    >
                      Coustomer List
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-end p-2.5 w-full">
                    <Text
                      className="ml-11 md:ml-[0] text-base text-blue-A201"
                      size="txtRobotoRegular16BlueA201"
                    >
                      Review
                    </Text>
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
                  src="images/img_group18692_3.png"
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
                            alt="user"
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
            <div className="flex flex-col items-center justify-start w-[94%] md:w-full">
              <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex flex-col gap-[9px] items-start justify-start">
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-700"
                    size="txtRobotoMedium25"
                  >
                    Review
                  </Text>
                  <Text
                    className="text-base text-bluegray-400"
                    size="txtRobotoRegular16"
                  >
                    Customer / Review
                  </Text>
                </div>
                <div className="flex sm:flex-1 flex-row gap-[25px] items-center justify-between w-[21%] sm:w-full">
                  <SelectBox
                    className="leading-[normal] text-left text-white-A700 text-xs w-[44%] sm:w-full"
                    placeholderClassName="text-white-A700"
                    indicator={
                      <Img
                        className="h-3 mr-[17px] w-3"
                        src="images/img_frame_11_white_A700.svg"
                        alt="Frame 11"
                      />
                    }
                    isSearchable={false}
                    placeholder="Filter"
                    getOptionLabel={(e) => (
                      <div className="flex items-center">
                        <Img
                          className="h-4 mr-[-62px] pl-4 pr-[35px] sm:pr-5 border-blue-A201 border border-solid w-4 rounded-[50%] py-[7px]"
                          src="images/img_settings_16X16.svg"
                          alt="settings"
                        />
                        <span>{e.label}</span>
                      </div>
                    )}
                    name="group18179"
                    isMulti={false}
                    options={filterOptionsList}
                    size="xs"
                  />
                  <SelectBox
                    className="leading-[normal] text-left text-xs w-[46%] sm:w-full"
                    placeholderClassName="text-blue-A201"
                    indicator={
                      <Img
                        className="h-3 mr-6 w-3"
                        src="images/img_frame_11.svg"
                        alt="Frame 11"
                      />
                    }
                    isMulti={false}
                    name="group18140"
                    options={newestOptionsList}
                    isSearchable={false}
                    placeholder="Newest"
                    shape="round"
                    color="blue_50"
                    size="xs"
                    variant="outline"
                  />
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-start mt-[37px] p-[30px] sm:px-5 rounded-[15px] shadow-bs3 w-full">
                <div className="flex flex-col gap-[38px] items-start justify-start my-1.5 w-full">
                  <div className="flex md:flex-col flex-row gap-[27px] items-center justify-start rounded-[1px] w-[94%] md:w-full">
                    <CheckBox
                      className=""
                      inputClassName="mr-[5px]"
                      name="rectangle4125"
                      id="rectangle4125"
                    ></CheckBox>
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[96%] md:w-full">
                      <Text
                        className="text-gray-700 text-sm"
                        size="txtRobotoMedium14"
                      >
                        Customer Profile
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[119px] text-gray-700 text-sm"
                        size="txtRobotoMedium14"
                      >
                        Review
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[406px] text-gray-700 text-sm"
                        size="txtRobotoMedium14"
                      >
                        Total Spent
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[139px] text-gray-700 text-sm"
                        size="txtRobotoMedium14"
                      >
                        Update
                      </Text>
                    </div>
                  </div>
                  <List
                    className="flex flex-col gap-3 items-center w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                      <CheckBox
                        className=""
                        inputClassName="mr-[5px]"
                        name="rectangle4126"
                        id="rectangle4126"
                      ></CheckBox>
                      <div className="flex md:flex-1 flex-row gap-[13px] items-center justify-center md:ml-[0] ml-[27px] rounded-sm w-1/5 md:w-full">
                        <Img
                          className="h-[60px] md:h-auto object-cover rounded-sm w-[60px]"
                          src="images/img_rectangle4126.png"
                          alt="Rectangle4126 One"
                        />
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-gray-700 text-sm"
                            size="txtRobotoMedium14"
                          >
                            Kristin Watson
                          </Text>
                          <Text
                            className="mt-2 text-blue-A201 text-xs"
                            size="txtRobotoMedium12BlueA201"
                          >
                            #C01256
                          </Text>
                          <Text
                            className="mt-[11px] text-bluegray-400 text-xs"
                            size="txtRobotoRegular12Bluegray400"
                          >
                            21 June 2020, 12:42 AM
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="sm:flex-1 leading-[22.00px] md:ml-[0] ml-[22px] text-gray-700_a2 text-xs w-[37%] sm:w-full"
                        size="txtRobotoRegular12Gray700a2"
                      >
                        Internet tend to repeat predefined chunks as necessary,
                        making this the first true generator on the Internet It
                        uses a dictionary of over 200 Latin words, combined
                        with!
                      </Text>
                      <div className="flex md:flex-1 flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[63px] w-[10%] md:w-full">
                        <Text
                          className="text-gray-700 text-xl"
                          size="txtRobotoBold20"
                        >
                          4.2
                        </Text>
                        <Img
                          className="h-3 w-full"
                          src="images/img_group18195.svg"
                          alt="Group18195"
                        />
                      </div>
                      <div className="flex md:flex-1 flex-row gap-[29px] items-center justify-between md:ml-[0] ml-[114px] w-[12%] md:w-full">
                        <Text
                          className="text-blue-A201 text-sm"
                          size="txtRobotoMedium14BlueA201"
                        >
                          Delete
                        </Text>
                        <Text
                          className="text-green-500 text-sm"
                          size="txtRobotoMedium14Green500"
                        >
                          Publish
                        </Text>
                      </div>
                    </div>
                    <Line className="self-center h-px bg-blue-50 w-full" />
                    <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                      <CheckBox
                        className=""
                        inputClassName="mr-[5px]"
                        name="rectangle4126 One"
                        id="rectangle4126 One"
                      ></CheckBox>
                      <div className="flex md:flex-1 flex-row gap-[13px] items-center justify-center md:ml-[0] ml-[27px] rounded-sm w-1/5 md:w-full">
                        <Img
                          className="h-[60px] md:h-auto object-cover rounded-sm w-[60px]"
                          src="images/img_rectangle4126_60X60.png"
                          alt="Rectangle4126 One One"
                        />
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-gray-700 text-sm"
                            size="txtRobotoMedium14"
                          >
                            Kristin Watson
                          </Text>
                          <Text
                            className="mt-2 text-blue-A201 text-xs"
                            size="txtRobotoMedium12BlueA201"
                          >
                            #C01256
                          </Text>
                          <Text
                            className="mt-[11px] text-bluegray-400 text-xs"
                            size="txtRobotoRegular12Bluegray400"
                          >
                            21 June 2020, 12:42 AM
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="sm:flex-1 leading-[22.00px] md:ml-[0] ml-[22px] text-gray-700_a2 text-xs w-[37%] sm:w-full"
                        size="txtRobotoRegular12Gray700a2"
                      >
                        Internet tend to repeat predefined chunks as necessary,
                        making this the first true generator on the Internet It
                        uses a dictionary of over 200 Latin words, combined
                        with!
                      </Text>
                      <div className="flex md:flex-1 flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[63px] w-[10%] md:w-full">
                        <Text
                          className="text-gray-700 text-xl"
                          size="txtRobotoBold20"
                        >
                          4.2
                        </Text>
                        <Img
                          className="h-3 w-full"
                          src="images/img_group18195.svg"
                          alt="Group18195 One"
                        />
                      </div>
                      <div className="flex md:flex-1 flex-row gap-[29px] items-center justify-between md:ml-[0] ml-[114px] w-[12%] md:w-full">
                        <Text
                          className="text-blue-A201 text-sm"
                          size="txtRobotoMedium14BlueA201"
                        >
                          Delete
                        </Text>
                        <Text
                          className="text-green-500 text-sm"
                          size="txtRobotoMedium14Green500"
                        >
                          Publish
                        </Text>
                      </div>
                    </div>
                    <Line className="self-center h-px bg-blue-50 w-full" />
                    <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                      <CheckBox
                        className=""
                        inputClassName="mr-[5px]"
                        name="rectangle4126 Two"
                        id="rectangle4126 Two"
                      ></CheckBox>
                      <div className="flex md:flex-1 flex-row gap-[13px] items-center justify-center md:ml-[0] ml-[27px] rounded-sm w-1/5 md:w-full">
                        <Img
                          className="h-[60px] md:h-auto object-cover rounded-sm w-[60px]"
                          src="images/img_rectangle4126_1.png"
                          alt="Rectangle4126 One Two"
                        />
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-gray-700 text-sm"
                            size="txtRobotoMedium14"
                          >
                            Ralph Edwards
                          </Text>
                          <Text
                            className="mt-2 text-blue-A201 text-xs"
                            size="txtRobotoMedium12BlueA201"
                          >
                            #C01256
                          </Text>
                          <Text
                            className="mt-[11px] text-bluegray-400 text-xs"
                            size="txtRobotoRegular12Bluegray400"
                          >
                            21 June 2020, 12:42 AM
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="sm:flex-1 leading-[22.00px] md:ml-[0] ml-[22px] text-gray-700_a2 text-xs w-[37%] sm:w-full"
                        size="txtRobotoRegular12Gray700a2"
                      >
                        Generators on the Internet tend to repeat predefined
                        necessary, making this the first true generator on the
                        Internet It uses a dictionary of over 200 Latin words,
                        combined with!
                      </Text>
                      <div className="flex md:flex-1 flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[63px] w-[10%] md:w-full">
                        <Text
                          className="text-gray-700 text-xl"
                          size="txtRobotoBold20"
                        >
                          4.2
                        </Text>
                        <Img
                          className="h-3 w-full"
                          src="images/img_group18195.svg"
                          alt="Group18195 Two"
                        />
                      </div>
                      <div className="flex md:flex-1 flex-row gap-[29px] items-center justify-between md:ml-[0] ml-[114px] w-[12%] md:w-full">
                        <Text
                          className="text-blue-A201 text-sm"
                          size="txtRobotoMedium14BlueA201"
                        >
                          Delete
                        </Text>
                        <Text
                          className="text-green-500 text-sm"
                          size="txtRobotoMedium14Green500"
                        >
                          Publish
                        </Text>
                      </div>
                    </div>
                    <Line className="self-center h-px bg-blue-50 w-full" />
                    <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                      <CheckBox
                        className=""
                        inputClassName="mr-[5px]"
                        name="rectangle4126 Three"
                        id="rectangle4126 Three"
                      ></CheckBox>
                      <div className="flex md:flex-1 flex-row gap-[13px] items-center justify-center md:ml-[0] ml-[27px] rounded-sm w-1/5 md:w-full">
                        <Img
                          className="h-[60px] md:h-auto object-cover rounded-sm w-[60px]"
                          src="images/img_rectangle4126_2.png"
                          alt="Rectangle4126 One Three"
                        />
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-gray-700 text-sm"
                            size="txtRobotoMedium14"
                          >
                            Darrell Steward
                          </Text>
                          <Text
                            className="mt-[7px] text-blue-A201 text-xs"
                            size="txtRobotoMedium12BlueA201"
                          >
                            #C01256
                          </Text>
                          <Text
                            className="mt-[11px] text-bluegray-400 text-xs"
                            size="txtRobotoRegular12Bluegray400"
                          >
                            21 June 2020, 12:42 AM
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="sm:flex-1 leading-[22.00px] md:ml-[0] ml-[22px] text-gray-700_a2 text-xs w-[37%] sm:w-full"
                        size="txtRobotoRegular12Gray700a2"
                      >
                        All the Lorem Ipsum generators on the Internet tend to
                        repeat predefined chunks as necessary, making this the
                        first true generator on the Internet It uses a
                        dictionary of over 200 Latin words, combined with!
                      </Text>
                      <div className="flex md:flex-1 flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[63px] w-[10%] md:w-full">
                        <Text
                          className="text-gray-700 text-xl"
                          size="txtRobotoBold20"
                        >
                          4.2
                        </Text>
                        <Img
                          className="h-3 w-full"
                          src="images/img_group18195.svg"
                          alt="Group18195 Three"
                        />
                      </div>
                      <div className="flex md:flex-1 flex-row gap-[29px] items-center justify-between md:ml-[0] ml-[114px] w-[12%] md:w-full">
                        <Text
                          className="text-blue-A201 text-sm"
                          size="txtRobotoMedium14BlueA201"
                        >
                          Delete
                        </Text>
                        <Text
                          className="text-green-500 text-sm"
                          size="txtRobotoMedium14Green500"
                        >
                          Publish
                        </Text>
                      </div>
                    </div>
                    <Line className="self-center h-px bg-blue-50 w-full" />
                    <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                      <CheckBox
                        className=""
                        inputClassName="mr-[5px]"
                        name="rectangle4126 Four"
                        id="rectangle4126 Four"
                      ></CheckBox>
                      <div className="flex md:flex-1 flex-row gap-[13px] items-center justify-center md:ml-[0] ml-[27px] rounded-sm w-1/5 md:w-full">
                        <Img
                          className="h-[60px] md:h-auto object-cover rounded-sm w-[60px]"
                          src="images/img_rectangle4126_3.png"
                          alt="Rectangle4126 One Four"
                        />
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-gray-700 text-sm"
                            size="txtRobotoMedium14"
                          >
                            Jenny Wilson
                          </Text>
                          <Text
                            className="mt-[7px] text-blue-A201 text-xs"
                            size="txtRobotoMedium12BlueA201"
                          >
                            #C01256
                          </Text>
                          <Text
                            className="mt-[11px] text-bluegray-400 text-xs"
                            size="txtRobotoRegular12Bluegray400"
                          >
                            21 June 2020, 12:42 AM
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="sm:flex-1 leading-[22.00px] md:ml-[0] ml-[22px] text-gray-700_a2 text-xs w-[37%] sm:w-full"
                        size="txtRobotoRegular12Gray700a2"
                      >
                        Repeat predefined chunks as necessary, making this the
                        first true generator on the Internet It uses a
                        dictionary of over 200 Latin words, combined with!
                      </Text>
                      <div className="flex md:flex-1 flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[63px] w-[10%] md:w-full">
                        <Text
                          className="text-gray-700 text-xl"
                          size="txtRobotoBold20"
                        >
                          4.2
                        </Text>
                        <Img
                          className="h-3 w-full"
                          src="images/img_group18195.svg"
                          alt="Group18195 Four"
                        />
                      </div>
                      <div className="flex md:flex-1 flex-row gap-[29px] items-center justify-between md:ml-[0] ml-[114px] w-[12%] md:w-full">
                        <Text
                          className="text-blue-A201 text-sm"
                          size="txtRobotoMedium14BlueA201"
                        >
                          Delete
                        </Text>
                        <Text
                          className="text-green-500 text-sm"
                          size="txtRobotoMedium14Green500"
                        >
                          Publish
                        </Text>
                      </div>
                    </div>
                    <Line className="self-center h-px bg-blue-50 w-full" />
                    <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                      <CheckBox
                        className=""
                        inputClassName="mr-[5px]"
                        name="rectangle4126 Five"
                        id="rectangle4126 Five"
                      ></CheckBox>
                      <div className="flex md:flex-1 flex-row gap-[13px] items-center justify-center md:ml-[0] ml-[27px] rounded-sm w-1/5 md:w-full">
                        <Img
                          className="h-[60px] md:h-auto object-cover rounded-sm w-[60px]"
                          src="images/img_rectangle4126_4.png"
                          alt="Rectangle4126 One Five"
                        />
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-gray-700 text-sm"
                            size="txtRobotoMedium14"
                          >
                            Robert Fox
                          </Text>
                          <Text
                            className="mt-2 text-blue-A201 text-xs"
                            size="txtRobotoMedium12BlueA201"
                          >
                            #C01256
                          </Text>
                          <Text
                            className="mt-[11px] text-bluegray-400 text-xs"
                            size="txtRobotoRegular12Bluegray400"
                          >
                            21 June 2020, 12:42 AM
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="sm:flex-1 leading-[22.00px] md:ml-[0] ml-[22px] text-gray-700_a2 text-xs w-[37%] sm:w-full"
                        size="txtRobotoRegular12Gray700a2"
                      >
                        All the Lorem Ipsum generators on the Internet tend to
                        repeat predefined chunks as necessary, making this the
                        first true generator on the Internet It uses a
                        dictionary of over 200 Latin words, combined with!
                      </Text>
                      <div className="flex md:flex-1 flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[63px] w-[10%] md:w-full">
                        <Text
                          className="text-gray-700 text-xl"
                          size="txtRobotoBold20"
                        >
                          4.2
                        </Text>
                        <Img
                          className="h-3 w-full"
                          src="images/img_group18195.svg"
                          alt="Group18195 Five"
                        />
                      </div>
                      <div className="flex md:flex-1 flex-row gap-[29px] items-center justify-between md:ml-[0] ml-[114px] w-[12%] md:w-full">
                        <Text
                          className="text-blue-A201 text-sm"
                          size="txtRobotoMedium14BlueA201"
                        >
                          Delete
                        </Text>
                        <Text
                          className="text-green-500 text-sm"
                          size="txtRobotoMedium14Green500"
                        >
                          Publish
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
              <div className="flex flex-row font-poppins md:gap-10 items-center justify-between mt-[30px] w-full">
                <Text
                  className="text-gray-700 text-sm"
                  size="txtPoppinsMedium14"
                >
                  Dispalying 10 Out of 250
                </Text>
                <div className="flex flex-row font-roboto gap-[18px] items-center justify-between w-[11%]">
                  <Text
                    className="text-gray-700 text-sm"
                    size="txtRobotoMedium14"
                  >
                    10-250
                  </Text>
                  <div className="flex flex-row items-center justify-start">
                    <Button
                      className="flex h-[30px] items-center justify-center rotate-[180deg] rounded-br-[5px] rounded-tr-[5px] w-[30px]"
                      color="blue_A201"
                      size="xs"
                      variant="fill"
                    >
                      <Img
                        className="h-6"
                        src="images/img_arrowright_white_A700.svg"
                        alt="arrowright Three"
                      />
                    </Button>
                    <Button
                      className="flex h-[30px] items-center justify-center rounded-br-[5px] rounded-tr-[5px] w-[30px]"
                      color="blue_50"
                      size="xs"
                      variant="fill"
                    >
                      <Img
                        className="h-6"
                        src="images/img_arrowright_blue_A201.svg"
                        alt="arrowright Four"
                      />
                    </Button>
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

export default ReviewPage;
