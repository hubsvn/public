import React from "react";

import { Button, Img, Input, List, SelectBox, Slider, Text } from "components";

import { CloseSVG } from "../../assets/images";

const todayOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const CategoriesPage = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  const [searchvalue, setSearchvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 font-roboto h-[1024px] mx-auto relative w-full">
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
              <div className="flex flex-col items-center justify-start mx-2.5">
                <div className="md:gap-5 gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                  <div className="bg-white-A700 flex flex-1 flex-col gap-2 items-center justify-start p-4 rounded-[15px] shadow-bs3 w-full">
                    <Img
                      className="h-[182px] md:h-auto object-cover rounded-[10px] w-full"
                      src="images/img_rectangle4145.png"
                      alt="Rectangle4145"
                    />
                    <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-base text-gray-700"
                          size="txtRobotoMedium16Gray700"
                        >
                          Pizza for kids
                        </Text>
                        <Text
                          className="text-bluegray-400 text-sm"
                          size="txtRobotoMedium14Bluegray400"
                        >
                          Total Order : 250
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2.5 items-center justify-start w-[46%] md:w-full">
                        <Img
                          className="h-2.5 w-[46%]"
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
                      <div className="flex flex-row items-center justify-between rounded-sm w-full">
                        <Button
                          className="cursor-pointer font-medium min-w-[82px] text-center text-sm"
                          shape="round"
                          color="blue_A201"
                          size="sm"
                          variant="fill"
                        >
                          Price: $32
                        </Button>
                        <Text
                          className="text-bluegray-400 text-sm"
                          size="txtRobotoMedium14Bluegray400"
                        >
                          Revenue :$1000
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col gap-2 items-center justify-start p-4 rounded-[15px] shadow-bs3 w-full">
                    <Img
                      className="h-[182px] md:h-auto object-cover rounded-[10px] w-full"
                      src="images/img_rectangle4145_182X318.png"
                      alt="Rectangle4145 One"
                    />
                    <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-base text-gray-700"
                          size="txtRobotoMedium16Gray700"
                        >
                          Pizza for kids
                        </Text>
                        <Text
                          className="text-bluegray-400 text-sm"
                          size="txtRobotoMedium14Bluegray400"
                        >
                          Total Order : 250
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2.5 items-center justify-start w-[46%] md:w-full">
                        <Img
                          className="h-2.5 w-[46%]"
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
                      <div className="flex flex-row items-center justify-between rounded-sm w-full">
                        <Button
                          className="cursor-pointer font-medium min-w-[82px] text-center text-sm"
                          shape="round"
                          color="blue_A201"
                          size="sm"
                          variant="fill"
                        >
                          Price: $32
                        </Button>
                        <Text
                          className="text-bluegray-400 text-sm"
                          size="txtRobotoMedium14Bluegray400"
                        >
                          Revenue :$1000
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col gap-2 items-center justify-start p-4 rounded-[15px] shadow-bs3 w-full">
                    <Img
                      className="h-[182px] md:h-auto object-cover rounded-[10px] w-full"
                      src="images/img_rectangle4145_1.png"
                      alt="Rectangle4145 Two"
                    />
                    <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-base text-gray-700"
                          size="txtRobotoMedium16Gray700"
                        >
                          Pizza for kids
                        </Text>
                        <Text
                          className="text-bluegray-400 text-sm"
                          size="txtRobotoMedium14Bluegray400"
                        >
                          Total Order : 250
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2.5 items-center justify-start w-[46%] md:w-full">
                        <Img
                          className="h-2.5 w-[46%]"
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
                      <div className="flex flex-row items-center justify-between rounded-sm w-full">
                        <Button
                          className="cursor-pointer font-medium min-w-[82px] text-center text-sm"
                          shape="round"
                          color="blue_A201"
                          size="sm"
                          variant="fill"
                        >
                          Price: $32
                        </Button>
                        <Text
                          className="text-bluegray-400 text-sm"
                          size="txtRobotoMedium14Bluegray400"
                        >
                          Revenue :$1000
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col gap-2 items-center justify-start p-4 rounded-[15px] shadow-bs3 w-full">
                    <Img
                      className="h-[182px] md:h-auto object-cover rounded-[10px] w-full"
                      src="images/img_rectangle4145_2.png"
                      alt="Rectangle4145 Three"
                    />
                    <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-base text-gray-700"
                          size="txtRobotoMedium16Gray700"
                        >
                          Pizza for kids
                        </Text>
                        <Text
                          className="text-bluegray-400 text-sm"
                          size="txtRobotoMedium14Bluegray400"
                        >
                          Total Order : 250
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2.5 items-center justify-start w-[46%] md:w-full">
                        <Img
                          className="h-2.5 w-[46%]"
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
                      <div className="flex flex-row items-center justify-between rounded-sm w-full">
                        <Button
                          className="cursor-pointer font-medium min-w-[82px] text-center text-sm"
                          shape="round"
                          color="blue_A201"
                          size="sm"
                          variant="fill"
                        >
                          Price: $32
                        </Button>
                        <Text
                          className="text-bluegray-400 text-sm"
                          size="txtRobotoMedium14Bluegray400"
                        >
                          Revenue :$1000
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col gap-2 items-center justify-start p-4 rounded-[15px] shadow-bs3 w-full">
                    <Img
                      className="h-[182px] md:h-auto object-cover rounded-[10px] w-full"
                      src="images/img_rectangle4145_3.png"
                      alt="Rectangle4145 Four"
                    />
                    <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-base text-gray-700"
                          size="txtRobotoMedium16Gray700"
                        >
                          Pizza for kids
                        </Text>
                        <Text
                          className="text-bluegray-400 text-sm"
                          size="txtRobotoMedium14Bluegray400"
                        >
                          Total Order : 250
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2.5 items-center justify-start w-[46%] md:w-full">
                        <Img
                          className="h-2.5 w-[46%]"
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
                      <div className="flex flex-row items-center justify-between rounded-sm w-full">
                        <Button
                          className="cursor-pointer font-medium min-w-[82px] text-center text-sm"
                          shape="round"
                          color="blue_A201"
                          size="sm"
                          variant="fill"
                        >
                          Price: $32
                        </Button>
                        <Text
                          className="text-bluegray-400 text-sm"
                          size="txtRobotoMedium14Bluegray400"
                        >
                          Revenue :$1000
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col gap-2 items-center justify-start p-4 rounded-[15px] shadow-bs3 w-full">
                    <Img
                      className="h-[182px] md:h-auto object-cover rounded-[10px] w-full"
                      src="images/img_rectangle4145_4.png"
                      alt="Rectangle4145 Five"
                    />
                    <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-base text-gray-700"
                          size="txtRobotoMedium16Gray700"
                        >
                          Pizza for kids
                        </Text>
                        <Text
                          className="text-bluegray-400 text-sm"
                          size="txtRobotoMedium14Bluegray400"
                        >
                          Total Order : 250
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2.5 items-center justify-start w-[46%] md:w-full">
                        <Img
                          className="h-2.5 w-[46%]"
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
                      <div className="flex flex-row items-center justify-between rounded-sm w-full">
                        <Button
                          className="cursor-pointer font-medium min-w-[82px] text-center text-sm"
                          shape="round"
                          color="blue_A201"
                          size="sm"
                          variant="fill"
                        >
                          Price: $32
                        </Button>
                        <Text
                          className="text-bluegray-400 text-sm"
                          size="txtRobotoMedium14Bluegray400"
                        >
                          Revenue :$1000
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        />
        <div className="absolute bg-white-A700 flex flex-col items-center justify-start p-5 md:px-5 right-[0] shadow-bs2 top-[0] w-[83%]">
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
        <div className="absolute flex flex-col md:gap-10 gap-[723px] h-max inset-y-[0] items-center justify-start my-auto md:px-5 right-[3%] w-[78%]">
          <div className="flex flex-row md:gap-10 items-center justify-between w-full">
            <div className="flex flex-col gap-1.5 items-start justify-start">
              <Text
                className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-700"
                size="txtRobotoMedium25"
              >
                Categories
              </Text>
              <Text
                className="text-base text-bluegray-400"
                size="txtRobotoRegular16"
              >
                Menu List / Categories
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
                  onClick={() => sliderRef.current?.slidePrev?.()}
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
                  onClick={() => sliderRef.current?.slideNext?.()}
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

export default CategoriesPage;
