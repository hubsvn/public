import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  SelectBox,
  Slider,
  Text,
} from "components";

import { CloseSVG } from "../../assets/images";

const filterOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const CustomerPage = () => {
  const [searchvalue, setSearchvalue] = React.useState("");
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-white-A700 font-roboto h-[1024px] mx-auto relative w-full">
        <div className="absolute flex flex-col gap-[37px] items-center justify-start md:px-5 right-[0] top-[0] w-[83%]">
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
          <div className="flex flex-col gap-9 items-center justify-start w-[94%] md:w-full">
            <div className="flex flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex flex-col items-start justify-start">
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-700"
                  size="txtRobotoMedium25"
                >
                  Customer
                </Text>
                <Text
                  className="mt-[5px] text-base text-bluegray-400"
                  size="txtRobotoRegular16"
                >
                  Customer / Reviwe
                </Text>
              </div>
              <SelectBox
                className="sm:flex-1 leading-[normal] text-left text-white-A700 text-xs w-[10%] sm:w-full"
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
            </div>
            <div className="flex flex-col font-poppins items-center justify-end pt-[707px] w-full">
              <div className="flex flex-row md:gap-10 items-center justify-between w-full">
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
                      className="cursor-pointer flex h-[30px] items-center justify-center rotate-[180deg] rounded-br-[5px] rounded-tr-[5px] w-[30px]"
                      onClick={() => sliderRef.current?.slidePrev?.()}
                      color="blue_A201"
                      size="xs"
                      variant="fill"
                    >
                      <Img
                        className="h-6"
                        src="images/img_arrowright_white_A700.svg"
                        alt="arrowright"
                      />
                    </Button>
                    <Button
                      className="cursor-pointer flex h-[30px] items-center justify-center rounded-br-[5px] rounded-tr-[5px] w-[30px]"
                      onClick={() => sliderRef.current?.slideNext?.()}
                      color="blue_50"
                      size="xs"
                      variant="fill"
                    >
                      <Img
                        className="h-6"
                        src="images/img_arrowright_blue_A201.svg"
                        alt="arrowright One"
                      />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Slider
          activeIndex={sliderState}
          responsive={{
            0: { items: 1 },
            550: { items: 1 },
            1050: { items: 2 },
          }}
          onSlideChanged={(e) => {
            setsliderState(e?.item);
          }}
          activeSlideCSS="scale-[1.00] absolute"
          ref={sliderRef}
          className="absolute inset-[0] justify-center m-auto max-w-[1400px] md:px-5 w-full"
          items={[...Array(6)].map(() => (
            <React.Fragment key={Math.random()}>
              <div className="bg-white-A700 flex flex-col gap-6 items-start justify-start mx-2.5 p-6 sm:px-5 rounded-[15px] shadow-bs3">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[88%] md:w-full">
                  <Text
                    className="text-gray-700 text-sm"
                    size="txtRobotoMedium14"
                  >
                    Order ID{" "}
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[58px] text-gray-700 text-sm"
                    size="txtRobotoMedium14"
                  >
                    Date
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[180px] text-gray-700 text-sm"
                    size="txtRobotoMedium14"
                  >
                    Customer
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[108px] text-gray-700 text-sm"
                    size="txtRobotoMedium14"
                  >
                    Location
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[182px] text-gray-700 text-sm"
                    size="txtRobotoMedium14"
                  >
                    Total Spent
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[69px] text-gray-700 text-sm"
                    size="txtRobotoMedium14"
                  >
                    Last Order
                  </Text>
                </div>
                <List
                  className="flex flex-col gap-4 items-center mb-[17px] w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                    <Text
                      className="text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      #01236556
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[37px] text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      21 June 2020, 12:42 AM
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[57px] text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      Kathryn Murphy
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[70px] text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      35 Station Road London
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[85px] text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      $83.46
                    </Text>
                    <Text
                      className="ml-24 md:ml-[0] text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      $12.3
                    </Text>
                    <Img
                      className="h-5 md:ml-[0] ml-[138px] w-5"
                      src="images/img_frame13.svg"
                      alt="FrameTwelve"
                    />
                  </div>
                  <Line className="self-center h-px bg-blue-50 w-full" />
                  <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                    <Text
                      className="text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      #01236556
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[37px] text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      21 June 2020, 12:42 AM
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[57px] text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      Kathryn Murphy
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[70px] text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      35 Station Road London
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[85px] text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      $83.46
                    </Text>
                    <Text
                      className="ml-24 md:ml-[0] text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      $12.3
                    </Text>
                    <Img
                      className="h-5 md:ml-[0] ml-[138px] w-5"
                      src="images/img_frame13.svg"
                      alt="FrameTwelve One"
                    />
                  </div>
                  <Line className="self-center h-px bg-blue-50 w-full" />
                  <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                    <Text
                      className="text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      #01236556
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[37px] text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      24 June 2020, 12:42 AM
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[57px] text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      Kristin Watson
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[79px] text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      35 Station Road London
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[85px] text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      $82.46
                    </Text>
                    <Text
                      className="ml-24 md:ml-[0] text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      $45.36
                    </Text>
                    <Img
                      className="h-5 md:ml-[0] ml-[129px] w-5"
                      src="images/img_frame13.svg"
                      alt="FrameTwelve Two"
                    />
                  </div>
                  <Line className="self-center h-px bg-blue-50 w-full" />
                  <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                    <Text
                      className="text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      #01236556
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[37px] text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      21 June 2020, 12:42 AM
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[57px] text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      Darrell Steward
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[75px] text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      35 Station Road London
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[85px] text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      $87.46
                    </Text>
                    <Text
                      className="ml-24 md:ml-[0] text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      $8.36
                    </Text>
                    <Img
                      className="h-5 md:ml-[0] ml-[137px] w-5"
                      src="images/img_frame13.svg"
                      alt="FrameTwelve Three"
                    />
                  </div>
                  <Line className="self-center h-px bg-blue-50 w-full" />
                  <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                    <Text
                      className="text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      #01236556
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[37px] text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      24 June 2020, 12:42 AM
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[57px] text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      Jenny Wilson
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[87px] text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      35 Station Road London
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[85px] text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      $82.46
                    </Text>
                    <Text
                      className="ml-24 md:ml-[0] text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      $71.56
                    </Text>
                    <Img
                      className="h-5 md:ml-[0] ml-[129px] w-5"
                      src="images/img_frame13.svg"
                      alt="FrameTwelve Four"
                    />
                  </div>
                  <Line className="self-center h-px bg-blue-50 w-full" />
                  <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                    <Text
                      className="text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      #01236556
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[37px] text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      24 June 2020, 12:42 AM
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[57px] text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      Courtney Henry
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[72px] text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      35 Station Road London
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[85px] text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      $90.46
                    </Text>
                    <Text
                      className="ml-24 md:ml-[0] text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      $12.59
                    </Text>
                    <Img
                      className="h-5 md:ml-[0] ml-[130px] w-5"
                      src="images/img_frame13.svg"
                      alt="FrameTwelve Five"
                    />
                  </div>
                  <Line className="self-center h-px bg-blue-50 w-full" />
                  <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                    <Text
                      className="text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      #01236556
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[37px] text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      21 June 2020, 12:42 AM
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[57px] text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      Annette Black
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[82px] text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      35 Station Road London
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[85px] text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      $12.46
                    </Text>
                    <Text
                      className="ml-24 md:ml-[0] text-green-50 text-sm"
                      size="txtRobotoMedium14Green50"
                    >
                      <span className="text-gray-700 font-roboto text-left font-medium">
                        <>
                          $78.12
                          <br />
                        </>
                      </span>
                      <span className="text-green-50 font-roboto text-left font-medium">
                        <>
                          <br />
                        </>
                      </span>
                    </Text>
                    <Img
                      className="h-5 md:ml-[0] ml-[129px] w-5"
                      src="images/img_frame13.svg"
                      alt="FrameTwelve Six"
                    />
                  </div>
                  <Line className="self-center h-px bg-blue-50 w-full" />
                  <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                    <Text
                      className="text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      #01236556
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[37px] text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      21 June 2020, 12:42 AM
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[57px] text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      Eleanor Pena
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[88px] text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      35 Station Road London
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[85px] text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      $92.46
                    </Text>
                    <Text
                      className="ml-24 md:ml-[0] text-gray-501 text-sm"
                      size="txtRobotoMedium14Gray501"
                    >
                      <span className="text-gray-700 font-roboto text-left font-medium">
                        <>
                          $78.32
                          <br />
                        </>
                      </span>
                      <span className="text-gray-501 font-roboto text-left font-medium">
                        <>
                          <br />
                        </>
                      </span>
                    </Text>
                    <Img
                      className="h-5 md:ml-[0] ml-[129px] w-5"
                      src="images/img_frame13.svg"
                      alt="FrameTwelve Seven"
                    />
                  </div>
                  <Line className="self-center h-px bg-blue-50 w-full" />
                  <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                    <Text
                      className="md:mt-0 mt-0.5 text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      #01236556
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[37px] md:mt-0 mt-0.5 text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      23 June 2020, 12:42 AM
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[57px] md:mt-0 mt-0.5 text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      Wade Warren
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[87px] md:mt-0 mt-0.5 text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      35 Station Road London
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[85px] md:mt-0 mt-0.5 text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      $32.46
                    </Text>
                    <Text
                      className="ml-24 md:ml-[0] md:mt-0 mt-0.5 text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      $78.6
                    </Text>
                    <Img
                      className="h-5 md:ml-[0] ml-[137px] w-5"
                      src="images/img_frame13.svg"
                      alt="FrameTwelve Eight"
                    />
                  </div>
                  <Line className="self-center h-px bg-blue-50 w-full" />
                  <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                    <Text
                      className="text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      #01236556
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[37px] text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      21 June 2020, 12:42 AM
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[57px] text-gray-700 text-xs"
                      size="txtRobotoMedium12"
                    >
                      Brooklyn Simmons
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[69px] text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      35 Station Road London
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[85px] text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      $82.46
                    </Text>
                    <Text
                      className="ml-24 md:ml-[0] text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      $78.52
                    </Text>
                    <Img
                      className="h-5 md:ml-[0] ml-[129px] w-5"
                      src="images/img_frame13.svg"
                      alt="FrameTwelve Nine"
                    />
                  </div>
                  <Line className="self-center h-px bg-blue-50 w-full" />
                  <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                    <Text
                      className="text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      #01236556
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[37px] text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      21 June 2020, 12:42 AM
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[57px] text-gray-700 text-xs"
                      size="txtRobotoMedium12"
                    >
                      Brooklyn Simmons
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[69px] text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      35 Station Road London
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[85px] text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      $82.46
                    </Text>
                    <Text
                      className="ml-24 md:ml-[0] text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      $78.52
                    </Text>
                    <Img
                      className="h-5 md:ml-[0] ml-[129px] w-5"
                      src="images/img_frame13.svg"
                      alt="FrameTwelve Ten"
                    />
                  </div>
                  <Line className="self-center h-px bg-blue-50 w-full" />
                  <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                    <Text
                      className="text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      #01236556
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[37px] text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      21 June 2020, 12:42 AM
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[57px] text-gray-700 text-xs"
                      size="txtRobotoMedium12"
                    >
                      Brooklyn Simmons
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[69px] text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      35 Station Road London
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[85px] text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      $82.46
                    </Text>
                    <Text
                      className="ml-24 md:ml-[0] text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      $78.52
                    </Text>
                    <Img
                      className="h-5 md:ml-[0] ml-[129px] w-5"
                      src="images/img_frame13.svg"
                      alt="FrameTwelve Eleven"
                    />
                  </div>
                </List>
              </div>
            </React.Fragment>
          ))}
        />
      </div>
    </>
  );
};

export default CustomerPage;
