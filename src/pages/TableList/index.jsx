import React from "react";

import { Button, Img, Input, Line, List, Slider, Text } from "components";

import { CloseSVG } from "../../assets/images";

const TableListPage = () => {
  const [searchvalue, setSearchvalue] = React.useState("");
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-white-A700 font-roboto h-[1024px] mx-auto relative w-full">
        <div className="absolute flex flex-col items-center justify-start md:px-5 right-[0] top-[0] w-[83%]">
          <div className="flex flex-col gap-[37px] items-center justify-start w-full">
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
            <div className="flex flex-col md:gap-10 gap-[743px] items-start justify-start w-[94%] md:w-full">
              <div className="flex flex-col gap-1.5 items-start justify-start">
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-700"
                  size="txtRobotoMedium25"
                >
                  Table List
                </Text>
                <Text
                  className="text-base text-bluegray-400"
                  size="txtRobotoRegular16"
                >
                  Add Table /Table List
                </Text>
              </div>
              <div className="flex flex-row font-poppins md:gap-10 items-center justify-between w-full">
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
              <div className="bg-white-A700 flex flex-col items-center justify-start mx-2.5 p-[25px] sm:px-5 rounded-[15px] shadow-bs3">
                <div className="flex flex-col gap-9 items-start justify-start my-[3px] w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[88%] md:w-full">
                    <Text
                      className="text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      Table ID{" "}
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[60px] text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      Book Date
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[148px] text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      Table Type
                    </Text>
                    <Text
                      className="ml-32 md:ml-[0] text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      Table Floor
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[121px] text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      Amount
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[87px] text-gray-700 text-sm"
                      size="txtRobotoMedium14"
                    >
                      Satus Order
                    </Text>
                  </div>
                  <List
                    className="flex flex-col gap-[14.485px] items-center w-full"
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
                        className="md:ml-[0] ml-[38px] text-gray-700 text-sm"
                        size="txtRobotoMedium14"
                      >
                        21 June 2020, 12:42 AM
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[60px] text-gray-700 text-sm"
                        size="txtRobotoMedium14"
                      >
                        Double Table
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[114px] text-gray-700 text-sm"
                        size="txtRobotoMedium14"
                      >
                        Floor G-05
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[125px] text-gray-700 text-sm"
                        size="txtRobotoMedium14"
                      >
                        $82.48
                      </Text>
                      <Button
                        className="cursor-pointer font-medium min-w-[99px] md:ml-[0] ml-[93px] text-center text-sm"
                        shape="round"
                        color="green_50"
                        size="sm"
                        variant="fill"
                      >
                        Available
                      </Button>
                      <Img
                        className="h-5 md:ml-[0] ml-[90px] w-5"
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
                        className="md:ml-[0] ml-[38px] text-gray-700 text-sm"
                        size="txtRobotoMedium14"
                      >
                        21 June 2020, 12:42 AM
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[59px] text-gray-700 text-sm"
                        size="txtRobotoMedium14"
                      >
                        Single Table
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[119px] text-gray-700 text-sm"
                        size="txtRobotoMedium14"
                      >
                        Floor G-04
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[125px] text-gray-700 text-sm"
                        size="txtRobotoMedium14"
                      >
                        $83.48
                      </Text>
                      <Button
                        className="cursor-pointer font-medium min-w-[99px] md:ml-[0] ml-[94px] text-center text-sm"
                        shape="round"
                        color="blue_50"
                        size="sm"
                        variant="fill"
                      >
                        Booked
                      </Button>
                      <Img
                        className="h-5 md:ml-[0] ml-[90px] w-5"
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
                        className="md:ml-[0] ml-[60px] text-gray-700 text-sm"
                        size="txtRobotoMedium14"
                      >
                        Spcial Table
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[120px] text-gray-700 text-sm"
                        size="txtRobotoMedium14"
                      >
                        Floor S-03
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[126px] text-gray-700 text-xs"
                        size="txtRobotoMedium12"
                      >
                        $82.46{" "}
                      </Text>
                      <Button
                        className="cursor-pointer font-medium min-w-[99px] md:ml-[0] ml-[100px] text-center text-sm"
                        shape="round"
                        color="green_50"
                        size="sm"
                        variant="fill"
                      >
                        Available
                      </Button>
                      <Img
                        className="h-5 md:ml-[0] ml-[90px] w-5"
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
                        className="md:ml-[0] ml-[60px] text-gray-700 text-sm"
                        size="txtRobotoMedium14"
                      >
                        Spcial Table
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[120px] text-gray-700 text-sm"
                        size="txtRobotoMedium14"
                      >
                        Floor S-02
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[126px] text-gray-700 text-sm"
                        size="txtRobotoMedium14"
                      >
                        $87.46
                      </Text>
                      <Button
                        className="cursor-pointer font-medium min-w-[99px] md:ml-[0] ml-[93px] text-center text-sm"
                        shape="round"
                        color="blue_50"
                        size="sm"
                        variant="fill"
                      >
                        Booked
                      </Button>
                      <Img
                        className="h-5 md:ml-[0] ml-[90px] w-5"
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
                        className="md:ml-[0] ml-[60px] text-gray-700 text-sm"
                        size="txtRobotoMedium14"
                      >
                        Single Table
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[120px] text-gray-700 text-sm"
                        size="txtRobotoMedium14"
                      >
                        Floor G-05
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[125px] text-gray-700 text-sm"
                        size="txtRobotoMedium14"
                      >
                        $82.46
                      </Text>
                      <Button
                        className="cursor-pointer font-medium min-w-[99px] md:ml-[0] ml-[93px] text-center text-sm"
                        shape="round"
                        color="green_50"
                        size="sm"
                        variant="fill"
                      >
                        Available
                      </Button>
                      <Img
                        className="h-5 md:ml-[0] ml-[90px] w-5"
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
                        className="md:ml-[0] ml-[60px] text-gray-700 text-sm"
                        size="txtRobotoMedium14"
                      >
                        Spcial Table
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[120px] text-gray-700 text-sm"
                        size="txtRobotoMedium14"
                      >
                        Floor G-05
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[125px] text-gray-700 text-sm"
                        size="txtRobotoMedium14"
                      >
                        $90.46
                      </Text>
                      <Button
                        className="cursor-pointer font-medium min-w-[99px] md:ml-[0] ml-[93px] text-center text-sm"
                        shape="round"
                        color="green_50"
                        size="sm"
                        variant="fill"
                      >
                        Available
                      </Button>
                      <Img
                        className="h-5 md:ml-[0] ml-[90px] w-5"
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
                        className="md:ml-[0] ml-[60px] text-gray-700 text-sm"
                        size="txtRobotoMedium14"
                      >
                        Double Table{" "}
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[115px] text-gray-700 text-sm"
                        size="txtRobotoMedium14"
                      >
                        Floor S-03
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[126px] text-gray-700 text-sm"
                        size="txtRobotoMedium14"
                      >
                        $12.46
                      </Text>
                      <Text
                        className="bg-blue-50 h-[31px] justify-center md:ml-[0] ml-[93px] sm:px-5 px-[25px] py-[7px] rounded-sm text-green-50 text-sm"
                        size="txtRobotoMedium14Green50"
                      >
                        <span className="text-blue-A201 font-roboto text-left font-medium">
                          <>
                            Booked
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
                        className="h-5 md:ml-[0] ml-[90px] w-5"
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
                        className="md:ml-[0] ml-[60px] text-gray-700 text-sm"
                        size="txtRobotoMedium14"
                      >
                        Single Table
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[120px] text-gray-700 text-sm"
                        size="txtRobotoMedium14"
                      >
                        Floor S-01
                      </Text>
                      <Text
                        className="ml-32 md:ml-[0] text-gray-700 text-sm"
                        size="txtRobotoMedium14"
                      >
                        $92.46
                      </Text>
                      <Text
                        className="bg-green-50 h-[31px] justify-center md:ml-[0] ml-[93px] px-5 py-[7px] rounded-sm text-gray-501 text-sm"
                        size="txtRobotoMedium14Gray501"
                      >
                        <span className="text-green-500 font-roboto text-left font-medium">
                          <>
                            Available
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
                        className="h-5 md:ml-[0] ml-[90px] w-5"
                        src="images/img_frame13.svg"
                        alt="FrameTwelve Seven"
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
                        23 June 2020, 12:42 AM
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[60px] text-gray-700 text-sm"
                        size="txtRobotoMedium14"
                      >
                        Spcial Table
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[120px] text-gray-700 text-sm"
                        size="txtRobotoMedium14"
                      >
                        Floor S-03
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[126px] text-gray-700 text-sm"
                        size="txtRobotoMedium14"
                      >
                        $32.46
                      </Text>
                      <Button
                        className="cursor-pointer font-medium min-w-[99px] md:ml-[0] ml-[93px] text-center text-sm"
                        shape="round"
                        color="blue_50"
                        size="sm"
                        variant="fill"
                      >
                        Booked
                      </Button>
                      <Img
                        className="h-5 md:ml-[0] ml-[90px] w-5"
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
                        218 June 2020, 12:42 AM
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[52px] text-gray-700 text-sm"
                        size="txtRobotoMedium14"
                      >
                        Brooklyn Simmons
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[78px] text-gray-700 text-sm"
                        size="txtRobotoMedium14"
                      >
                        Floor G-05
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[125px] text-gray-700 text-sm"
                        size="txtRobotoMedium14"
                      >
                        $82.46
                      </Text>
                      <Button
                        className="cursor-pointer font-medium min-w-[99px] md:ml-[0] ml-[93px] text-center text-sm"
                        shape="round"
                        color="blue_50"
                        size="sm"
                        variant="fill"
                      >
                        Booked
                      </Button>
                      <Img
                        className="h-5 md:ml-[0] ml-[90px] w-5"
                        src="images/img_frame13.svg"
                        alt="FrameTwelve Nine"
                      />
                    </div>
                  </List>
                </div>
              </div>
            </React.Fragment>
          ))}
        />
      </div>
    </>
  );
};

export default TableListPage;
