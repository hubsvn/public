import React from "react";

import { Button, Img, Input, Line, List, Slider, Text } from "components";

import { CloseSVG } from "../../assets/images";

const TableIdPage = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  const sliderRef1 = React.useRef(null);
  const [sliderState1, setsliderState1] = React.useState(0);
  const [searchonevalue, setSearchonevalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 font-roboto h-[1024px] mx-auto relative w-full">
        <Slider
          activeIndex={sliderState1}
          responsive={{
            0: { items: 1 },
            550: { items: 1 },
            1050: { items: 2 },
          }}
          onSlideChanged={(e) => {
            setsliderState1(e?.item);
          }}
          activeSlideCSS="scale-[1.00] absolute"
          ref={sliderRef1}
          className="absolute inset-[0] justify-center m-auto max-w-[1400px] md:px-5 w-full"
          items={[...Array(6)].map(() => (
            <React.Fragment key={Math.random()}>
              <div className="flex flex-col gap-[35px] items-center justify-start mx-2.5">
                <div className="flex md:flex-col flex-row gap-8 items-center justify-between w-full">
                  <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-3 rounded-[10px] shadow-bs3 w-[66%] md:w-full">
                    <div className="flex flex-col gap-[30px] items-center justify-start mb-[18px] mt-2.5 w-full">
                      <div className="flex flex-col gap-4 items-start justify-start w-[98%] md:w-full">
                        <Text
                          className="text-base text-gray-700"
                          size="txtRobotoMedium16Gray700"
                        >
                          Current Booking
                        </Text>
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                          <div className="flex md:flex-1 flex-row gap-2.5 items-center justify-between w-[35%] md:w-full">
                            <Button
                              className="flex h-[60px] items-center justify-center rounded-[50%] w-[60px]"
                              shape="circle"
                              color="blue_A201"
                              size="lg"
                              variant="fill"
                            >
                              <Img
                                className="h-[30px]"
                                src="images/img_arrowdown.svg"
                                alt="arrowdown"
                              />
                            </Button>
                            <div className="flex flex-col gap-3 items-start justify-start">
                              <Text
                                className="text-base text-blue-A201"
                                size="txtRobotoMedium16"
                              >
                                Booking ID #01236556
                              </Text>
                              <Text
                                className="text-base text-gray-700"
                                size="txtRobotoRegular16Gray700"
                              >
                                Queen Table
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col gap-3 items-start justify-start ml-7 md:ml-[0]">
                            <Text
                              className="text-base text-gray-700"
                              size="txtRobotoMedium16Gray700"
                            >
                              Table Capacity
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[3px] text-base text-gray-700"
                              size="txtRobotoRegular16Gray700"
                            >
                              3-5 Person
                            </Text>
                          </div>
                          <div className="flex flex-col gap-[15px] items-start justify-start md:ml-[0] ml-[71px]">
                            <Text
                              className="text-gray-700 text-sm"
                              size="txtRobotoMedium14"
                            >
                              Table Type
                            </Text>
                            <Text
                              className="text-base text-gray-700"
                              size="txtRobotoRegular16Gray700"
                            >
                              Spcial table
                            </Text>
                          </div>
                          <div className="flex flex-col gap-3 items-start justify-start md:ml-[0] ml-[65px]">
                            <Text
                              className="text-base text-gray-700"
                              size="txtRobotoMedium16Gray700"
                            >
                              Date Book
                            </Text>
                            <Text
                              className="text-base text-gray-700"
                              size="txtRobotoRegular16Gray700"
                            >
                              2 Oct - 28 oct{" "}
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-4 justify-start w-full">
                        <Text
                          className="ml-2 md:ml-[0] text-base text-gray-700"
                          size="txtRobotoMedium16Gray700"
                        >
                          Table Facilitics
                        </Text>
                        <div className="flex h-[134px] justify-end relative w-full">
                          <Button
                            className="absolute bottom-[36%] flex h-[30px] items-center justify-center right-[0] rounded-[50%] shadow-bs6 w-[30px]"
                            shape="circle"
                            color="blue_A201"
                            size="xs"
                            variant="fill"
                          >
                            <Img
                              className="h-6"
                              src="images/img_arrowright_white_A700.svg"
                              alt="groupNine"
                            />
                          </Button>
                          <Button
                            className="flex h-[30px] items-center justify-center mb-12 mt-auto rotate-[180deg] rounded-[50%] shadow-bs6 w-[30px]"
                            shape="circle"
                            color="blue_A201"
                            size="xs"
                            variant="fill"
                          >
                            <Img
                              className="h-6"
                              src="images/img_arrowright_white_A700.svg"
                              alt="group381"
                            />
                          </Button>
                          <Slider
                            autoPlay
                            autoPlayInterval={2000}
                            activeIndex={sliderState}
                            responsive={{
                              0: { items: 1 },
                              550: { items: 1 },
                              1050: { items: 1 },
                            }}
                            onSlideChanged={(e) => {
                              setsliderState(e?.item);
                            }}
                            ref={sliderRef}
                            className="absolute inset-[0] justify-center m-auto w-full"
                            items={[...Array(3)].map(() => (
                              <React.Fragment key={Math.random()}>
                                <div className="gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between mx-2.5 rounded">
                                  <Img
                                    className="h-[134px] md:h-auto object-cover rounded w-full"
                                    src="images/img_rectangle4146.png"
                                    alt="Rectangle4146"
                                  />
                                  <Img
                                    className="h-[134px] md:h-auto object-cover rounded w-full"
                                    src="images/img_rectangle4147.png"
                                    alt="Rectangle4147"
                                  />
                                  <Img
                                    className="h-[134px] md:h-auto object-cover rounded w-full"
                                    src="images/img_rectangle4148.png"
                                    alt="Rectangle4148"
                                  />
                                  <Img
                                    className="h-[134px] md:h-auto object-cover rounded w-full"
                                    src="images/img_rectangle4149.png"
                                    alt="Rectangle4149"
                                  />
                                </div>
                              </React.Fragment>
                            ))}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-5 rounded-[15px] shadow-bs3 w-[32%] md:w-full">
                    <div className="flex flex-col gap-[15px] items-center justify-start my-[5px] w-full">
                      <div className="flex flex-col gap-[13px] items-center justify-start w-[44%] md:w-full">
                        <Img
                          className="h-[120px] md:h-auto rounded-[50%] w-[120px]"
                          src="images/img_ellipse48_120X120.png"
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
                      <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                        <div className="flex flex-row items-center justify-start w-full">
                          <Button
                            className="flex h-[35px] items-center justify-center rounded-[50%] w-[35px]"
                            color="blue_A201"
                            size="sm"
                            variant="fill"
                          >
                            <Img
                              className="h-5"
                              src="images/img_search_white_A700.svg"
                              alt="search"
                            />
                          </Button>
                          <Text
                            className="ml-[15px] text-bluegray-400 text-sm"
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
                        <div className="flex flex-row gap-[15px] items-center justify-start w-3/5 md:w-full">
                          <Button
                            className="flex h-[35px] items-center justify-center rounded-[50%] w-[35px]"
                            color="blue_A201"
                            size="md"
                            variant="fill"
                          >
                            <Img
                              className="h-3.5"
                              src="images/img_call.svg"
                              alt="call"
                            />
                          </Button>
                          <Text
                            className="text-bluegray-400 text-sm"
                            size="txtRobotoMedium14Bluegray400"
                          >
                            +99 01 2365 5698 23
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col items-center justify-start p-[17px] rounded-[15px] shadow-bs3 w-full">
                  <div className="flex flex-col gap-[26px] justify-start my-[13px] w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[7px] w-[86%] md:w-full">
                      <Text
                        className="text-gray-700 text-sm"
                        size="txtRobotoMedium14"
                      >
                        Items
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[187px] text-gray-700 text-sm"
                        size="txtRobotoMedium14"
                      >
                        Table Type
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[114px] text-gray-700 text-sm"
                        size="txtRobotoMedium14"
                      >
                        Table Capacity
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[101px] text-gray-700 text-sm"
                        size="txtRobotoMedium14"
                      >
                        Table Faciliticstal{" "}
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[145px] text-gray-700 text-sm"
                        size="txtRobotoMedium14"
                      >
                        Book Date
                      </Text>
                    </div>
                    <List
                      className="flex flex-col gap-3 items-center pr-0.5 w-full"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                        <div className="flex md:flex-1 flex-row gap-3 items-center justify-start sm:pr-5 pr-[21px] rounded w-[16%] md:w-full">
                          <Img
                            className="h-[50px] md:h-auto object-cover rounded w-[50px]"
                            src="images/img_rectangle4144_48X50.png"
                            alt="Rectangle4150"
                          />
                          <div className="flex flex-col gap-1.5 items-start justify-start">
                            <Text
                              className="text-gray-700 text-sm"
                              size="txtRobotoMedium14"
                            >
                              Sweet 05641
                            </Text>
                            <Text
                              className="text-blue-A201 text-xs"
                              size="txtRobotoMedium12BlueA201"
                            >
                              #45612
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="md:ml-[0] ml-[59px] text-gray-700 text-sm"
                          size="txtRobotoMedium14"
                        >
                          Special Table
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[98px] text-gray-700 text-sm"
                          size="txtRobotoMedium14"
                        >
                          3-5 Person
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[125px] text-gray-700 text-sm"
                          size="txtRobotoMedium14"
                        >
                          Ac, Double Table, Wifi
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[120px] text-gray-700 text-sm"
                          size="txtRobotoMedium14"
                        >
                          2 Oct - 28 oct{" "}
                        </Text>
                        <Img
                          className="h-5 md:ml-[0] ml-[110px] w-5"
                          src="images/img_frame13.svg"
                          alt="FrameTwelve"
                        />
                      </div>
                      <Line className="self-center h-px bg-blue-50 w-full" />
                      <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                        <div className="flex md:flex-1 flex-row gap-3 items-center justify-start sm:pr-5 pr-[21px] rounded w-[16%] md:w-full">
                          <Img
                            className="h-[50px] md:h-auto object-cover rounded w-[50px]"
                            src="images/img_rectangle4144.png"
                            alt="Rectangle4151"
                          />
                          <div className="flex flex-col gap-1.5 items-start justify-start">
                            <Text
                              className="text-gray-700 text-sm"
                              size="txtRobotoMedium14"
                            >
                              Sweet 05641
                            </Text>
                            <Text
                              className="text-blue-A201 text-xs"
                              size="txtRobotoMedium12BlueA201"
                            >
                              #45612
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="md:ml-[0] ml-[59px] text-gray-700 text-sm"
                          size="txtRobotoMedium14"
                        >
                          Double Table
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[100px] text-gray-700 text-sm"
                          size="txtRobotoMedium14"
                        >
                          3-5 Person
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[125px] text-gray-700 text-sm"
                          size="txtRobotoMedium14"
                        >
                          Ac, Double Table, Wifi
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[127px] text-gray-700 text-sm"
                          size="txtRobotoMedium14"
                        >
                          3 Oct - 28 oct{" "}
                        </Text>
                        <Img
                          className="h-5 md:ml-[0] ml-[103px] w-5"
                          src="images/img_frame13.svg"
                          alt="FrameTwelve One"
                        />
                      </div>
                      <Line className="self-center h-px bg-blue-50 w-full" />
                      <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                        <div className="flex md:flex-1 flex-row gap-3 items-center justify-start sm:pr-5 pr-[21px] rounded w-[16%] md:w-full">
                          <Img
                            className="h-[50px] md:h-auto object-cover rounded w-[50px]"
                            src="images/img_rectangle4152.png"
                            alt="Rectangle4152"
                          />
                          <div className="flex flex-col gap-1.5 items-start justify-start">
                            <Text
                              className="text-gray-700 text-sm"
                              size="txtRobotoMedium14"
                            >
                              Sweet 05641
                            </Text>
                            <Text
                              className="text-blue-A201 text-xs"
                              size="txtRobotoMedium12BlueA201"
                            >
                              #45612
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="md:ml-[0] ml-[59px] text-gray-700 text-sm"
                          size="txtRobotoMedium14"
                        >
                          Single Table
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[105px] text-gray-700 text-sm"
                          size="txtRobotoMedium14"
                        >
                          1-2 Person
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[125px] text-gray-700 text-sm"
                          size="txtRobotoMedium14"
                        >
                          Ac, Double Table, Wifi
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[120px] text-gray-700 text-sm"
                          size="txtRobotoMedium14"
                        >
                          4 Oct - 28 oct{" "}
                        </Text>
                        <Img
                          className="h-5 md:ml-[0] ml-[110px] w-5"
                          src="images/img_frame13.svg"
                          alt="FrameTwelve Two"
                        />
                      </div>
                    </List>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        />
        <div className="absolute bg-white-A700 flex flex-col items-center justify-start p-[15px] md:px-5 right-[0] shadow-bs2 top-[0] w-[83%]">
          <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between mb-[5px] w-[98%] md:w-full">
            <Input
              name="Search One"
              placeholder="Search here"
              value={searchonevalue}
              onChange={(e) => setSearchonevalue(e)}
              className="!placeholder:text-bluegray-400 !text-bluegray-400 leading-[normal] p-0 text-left text-xs w-full"
              wrapClassName="border border-gray-50 border-solid flex sm:mt-0 my-0.5 sm:w-full"
              suffix={
                searchonevalue?.length > 0 ? (
                  <CloseSVG
                    className="mt-2.5 mb-[9px] cursor-pointer h-4 ml-[35px] mr-4"
                    onClick={() => setSearchonevalue("")}
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
        <div className="absolute bottom-[6%] flex flex-col md:gap-10 gap-[763px] items-start justify-start md:px-5 right-[3%] w-[78%]">
          <div className="flex flex-col gap-1.5 items-start justify-start">
            <Text
              className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-700"
              size="txtRobotoMedium25"
            >
              Table ID
            </Text>
            <Text
              className="text-base text-bluegray-400"
              size="txtRobotoRegular16"
            >
              Table List /Table ID
            </Text>
          </div>
          <div className="flex flex-row font-poppins md:gap-10 items-center justify-between w-full">
            <Text className="text-gray-700 text-sm" size="txtPoppinsMedium14">
              Dispalying 10 Out of 250
            </Text>
            <div className="flex flex-row font-roboto gap-[18px] items-center justify-between w-[11%]">
              <Text className="text-gray-700 text-sm" size="txtRobotoMedium14">
                10-250
              </Text>
              <div className="flex flex-row items-center justify-start">
                <Button
                  className="cursor-pointer flex h-[30px] items-center justify-center rotate-[180deg] rounded-br-[5px] rounded-tr-[5px] w-[30px]"
                  onClick={() => sliderRef1.current?.slidePrev?.()}
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
                  className="cursor-pointer flex h-[30px] items-center justify-center rounded-br-[5px] rounded-tr-[5px] w-[30px]"
                  onClick={() => sliderRef1.current?.slideNext?.()}
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
    </>
  );
};

export default TableIdPage;
