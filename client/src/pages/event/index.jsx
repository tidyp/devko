import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";


const index = () => {
  return (
    <div className="container mx-auto mt-10 py-3">
      <div className="wrapper w-full rounded bg-white shadow ">
        <div class="header flex justify-between border-b p-2">
          <span class="text-lg font-bold">2020 July</span>
          <div class="buttons">
            <button class="p-1">
            <FaRegArrowAltCircleLeft />
            </button>
            <button class="p-1">
            <FaRegArrowAltCircleRight />
            </button>
          </div>
        </div>

        <table class="w-full">
          <thead>
            <tr>
              <th class="lg:w-30 md:w-30 h-10 w-10 border-r p-2 text-xs sm:w-20 xl:w-40 xl:text-sm">
                <span class="hidden sm:block md:block lg:block xl:block">
                  Sunday
                </span>
                <span class="block sm:hidden md:hidden lg:hidden xl:hidden">
                  Sun
                </span>
              </th>
              <th class="lg:w-30 md:w-30 h-10 w-10 border-r p-2 text-xs sm:w-20 xl:w-40 xl:text-sm">
                <span class="hidden sm:block md:block lg:block xl:block">
                  Monday
                </span>
                <span class="block sm:hidden md:hidden lg:hidden xl:hidden">
                  Mon
                </span>
              </th>
              <th class="lg:w-30 md:w-30 h-10 w-10 border-r p-2 text-xs sm:w-20 xl:w-40 xl:text-sm">
                <span class="hidden sm:block md:block lg:block xl:block">
                  Tuesday
                </span>
                <span class="block sm:hidden md:hidden lg:hidden xl:hidden">
                  Tue
                </span>
              </th>
              <th class="lg:w-30 md:w-30 h-10 w-10 border-r p-2 text-xs sm:w-20 xl:w-40 xl:text-sm">
                <span class="hidden sm:block md:block lg:block xl:block">
                  Wednesday
                </span>
                <span class="block sm:hidden md:hidden lg:hidden xl:hidden">
                  Wed
                </span>
              </th>
              <th class="lg:w-30 md:w-30 h-10 w-10 border-r p-2 text-xs sm:w-20 xl:w-40 xl:text-sm">
                <span class="hidden sm:block md:block lg:block xl:block">
                  Thursday
                </span>
                <span class="block sm:hidden md:hidden lg:hidden xl:hidden">
                  Thu
                </span>
              </th>
              <th class="lg:w-30 md:w-30 h-10 w-10 border-r p-2 text-xs sm:w-20 xl:w-40 xl:text-sm">
                <span class="hidden sm:block md:block lg:block xl:block">
                  Friday
                </span>
                <span class="block sm:hidden md:hidden lg:hidden xl:hidden">
                  Fri
                </span>
              </th>
              <th class="lg:w-30 md:w-30 h-10 w-10 border-r p-2 text-xs sm:w-20 xl:w-40 xl:text-sm">
                <span class="hidden sm:block md:block lg:block xl:block">
                  Saturday
                </span>
                <span class="block sm:hidden md:hidden lg:hidden xl:hidden">
                  Sat
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="h-20 text-center">
              <td class="lg:w-30 md:w-30 ease h-40 w-10 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300 sm:w-20 xl:w-40 ">
                <div class="lg:w-30 md:w-30 mx-auto mx-auto flex h-40 w-10 flex-col overflow-hidden sm:w-full xl:w-40">
                  <div class="top h-5 w-full">
                    <span class="text-gray-500">1</span>
                  </div>
                  <div class="bottom h-30 w-full flex-grow cursor-pointer py-1">
                    <div class="event mb-1 rounded bg-purple-400 p-1 text-sm text-white">
                      <span class="event-name">Meeting</span>
                      <span class="time">12:00~14:00</span>
                    </div>
                    <div class="event mb-1 rounded bg-purple-400 p-1 text-sm text-white">
                      <span class="event-name">Meeting</span>
                      <span class="time">18:00~20:00</span>
                    </div>
                  </div>
                </div>
              </td>
              <td class="lg:w-30 md:w-30 ease h-40 w-10 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300 sm:w-20 xl:w-40">
                <div class="lg:w-30 md:w-30 mx-auto mx-auto flex h-40 w-10 flex-col overflow-hidden sm:w-full xl:w-40">
                  <div class="top h-5 w-full">
                    <span class="text-gray-500">2</span>
                  </div>
                  <div class="bottom h-30 w-full flex-grow cursor-pointer py-1"></div>
                </div>
              </td>
              <td class="lg:w-30 md:w-30 ease h-40 w-10 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300 sm:w-20 xl:w-40">
                <div class="lg:w-30 md:w-30 mx-auto mx-auto flex h-40 w-10 flex-col overflow-hidden sm:w-full xl:w-40">
                  <div class="top h-5 w-full">
                    <span class="text-gray-500">3</span>
                  </div>
                  <div class="bottom h-30 w-full flex-grow cursor-pointer py-1"></div>
                </div>
              </td>
              <td class="lg:w-30 md:w-30 ease h-40 w-10 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300 sm:w-20 xl:w-40">
                <div class="lg:w-30 md:w-30 mx-auto mx-auto flex h-40 w-10 flex-col overflow-hidden sm:w-full xl:w-40">
                  <div class="top h-5 w-full">
                    <span class="text-gray-500">4</span>
                  </div>
                  <div class="bottom h-30 w-full flex-grow cursor-pointer py-1"></div>
                </div>
              </td>
              <td class="lg:w-30 md:w-30 ease h-40 w-10 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300 sm:w-20 xl:w-40">
                <div class="lg:w-30 md:w-30 mx-auto mx-auto flex h-40 w-10 flex-col overflow-hidden sm:w-full xl:w-40">
                  <div class="top h-5 w-full">
                    <span class="text-gray-500">6</span>
                  </div>
                  <div class="bottom h-30 w-full flex-grow cursor-pointer py-1"></div>
                </div>
              </td>
              <td class="lg:w-30 md:w-30 ease h-40 w-10 cursor-pointer overflow-hidden border p-1 transition duration-500 hover:bg-gray-300 sm:w-20 xl:w-40">
                <div class="lg:w-30 md:w-30 mx-auto mx-auto flex h-40 w-10 flex-col overflow-hidden sm:w-full xl:w-40">
                  <div class="top h-5 w-full">
                    <span class="text-gray-500">7</span>
                  </div>
                  <div class="bottom h-30 w-full flex-grow cursor-pointer py-1">
                    <div class="event mb-1 rounded bg-blue-400 p-1 text-sm text-white">
                      <span class="event-name">Shopping</span>
                      <span class="time">12:00~14:00</span>
                    </div>
                  </div>
                </div>
              </td>
              <td class="lg:w-30 md:w-30 ease h-40 w-10 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300 sm:w-20 xl:w-40">
                <div class="lg:w-30 md:w-30 mx-auto mx-auto flex h-40 w-10 flex-col overflow-hidden sm:w-full xl:w-40">
                  <div class="top h-5 w-full">
                    <span class="text-sm text-gray-500">8</span>
                  </div>
                  <div class="bottom h-30 w-full flex-grow cursor-pointer py-1"></div>
                </div>
              </td>
            </tr>

            <tr class="h-20 text-center">
              <td class="lg:w-30 md:w-30 ease h-40 w-10 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300 sm:w-20 xl:w-40">
                <div class="lg:w-30 md:w-30 mx-auto mx-auto flex h-40 w-10 flex-col overflow-hidden sm:w-full xl:w-40">
                  <div class="top h-5 w-full">
                    <span class="text-gray-500">9</span>
                  </div>
                  <div class="bottom h-30 w-full flex-grow cursor-pointer py-1"></div>
                </div>
              </td>
              <td class="lg:w-30 md:w-30 ease h-40 w-10 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300 sm:w-20 xl:w-40">
                <div class="lg:w-30 md:w-30 mx-auto mx-auto flex h-40 w-10 flex-col overflow-hidden sm:w-full xl:w-40">
                  <div class="top h-5 w-full">
                    <span class="text-gray-500">10</span>
                  </div>
                  <div class="bottom h-30 w-full flex-grow cursor-pointer py-1"></div>
                </div>
              </td>
              <td class="lg:w-30 md:w-30 ease h-40 w-10 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300 sm:w-20 xl:w-40">
                <div class="lg:w-30 md:w-30 mx-auto mx-auto flex h-40 w-10 flex-col overflow-hidden sm:w-full xl:w-40">
                  <div class="top h-5 w-full">
                    <span class="text-gray-500">12</span>
                  </div>
                  <div class="bottom h-30 w-full flex-grow cursor-pointer py-1"></div>
                </div>
              </td>
              <td class="lg:w-30 md:w-30 ease h-40 w-10 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300 sm:w-20 xl:w-40">
                <div class="lg:w-30 md:w-30 mx-auto mx-auto flex h-40 w-10 flex-col overflow-hidden sm:w-full xl:w-40">
                  <div class="top h-5 w-full">
                    <span class="text-gray-500">13</span>
                  </div>
                  <div class="bottom h-30 w-full flex-grow cursor-pointer py-1"></div>
                </div>
              </td>
              <td class="lg:w-30 md:w-30 ease h-40 w-10 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300 sm:w-20 xl:w-40">
                <div class="lg:w-30 md:w-30 mx-auto mx-auto flex h-40 w-10 flex-col overflow-hidden sm:w-full xl:w-40">
                  <div class="top h-5 w-full">
                    <span class="text-gray-500">14</span>
                  </div>
                  <div class="bottom h-30 w-full flex-grow cursor-pointer py-1"></div>
                </div>
              </td>
              <td class="lg:w-30 md:w-30 ease h-40 w-10 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300 sm:w-20 xl:w-40">
                <div class="lg:w-30 md:w-30 mx-auto mx-auto flex h-40 w-10 flex-col overflow-hidden sm:w-full xl:w-40">
                  <div class="top h-5 w-full">
                    <span class="text-gray-500">15</span>
                  </div>
                  <div class="bottom h-30 w-full flex-grow cursor-pointer py-1"></div>
                </div>
              </td>
              <td class="lg:w-30 md:w-30 ease h-40 w-10 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300 sm:w-20 xl:w-40">
                <div class="lg:w-30 md:w-30 mx-auto mx-auto flex h-40 w-10 flex-col overflow-hidden sm:w-full xl:w-40">
                  <div class="top h-5 w-full">
                    <span class="text-sm text-gray-500">16</span>
                  </div>
                  <div class="bottom h-30 w-full flex-grow cursor-pointer py-1"></div>
                </div>
              </td>
            </tr>

            <tr class="h-20 text-center">
              <td class="lg:w-30 md:w-30 ease h-40 w-10 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300 sm:w-20 xl:w-40">
                <div class="lg:w-30 md:w-30 mx-auto mx-auto flex h-40 w-10 flex-col overflow-hidden sm:w-full xl:w-40">
                  <div class="top h-5 w-full">
                    <span class="text-gray-500">16</span>
                  </div>
                  <div class="bottom h-30 w-full flex-grow cursor-pointer py-1"></div>
                </div>
              </td>
              <td class="lg:w-30 md:w-30 ease h-40 w-10 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300 sm:w-20 xl:w-40">
                <div class="lg:w-30 md:w-30 mx-auto mx-auto flex h-40 w-10 flex-col overflow-hidden sm:w-full xl:w-40">
                  <div class="top h-5 w-full">
                    <span class="text-gray-500">17</span>
                  </div>
                  <div class="bottom h-30 w-full flex-grow cursor-pointer py-1"></div>
                </div>
              </td>
              <td class="lg:w-30 md:w-30 ease h-40 w-10 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300 sm:w-20 xl:w-40">
                <div class="lg:w-30 md:w-30 mx-auto mx-auto flex h-40 w-10 flex-col overflow-hidden sm:w-full xl:w-40">
                  <div class="top h-5 w-full">
                    <span class="text-gray-500">18</span>
                  </div>
                  <div class="bottom h-30 w-full flex-grow cursor-pointer py-1"></div>
                </div>
              </td>
              <td class="lg:w-30 md:w-30 ease h-40 w-10 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300 sm:w-20 xl:w-40">
                <div class="lg:w-30 md:w-30 mx-auto mx-auto flex h-40 w-10 flex-col overflow-hidden sm:w-full xl:w-40">
                  <div class="top h-5 w-full">
                    <span class="text-gray-500">19</span>
                  </div>
                  <div class="bottom h-30 w-full flex-grow cursor-pointer py-1"></div>
                </div>
              </td>
              <td class="lg:w-30 md:w-30 ease h-40 w-10 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300 sm:w-20 xl:w-40">
                <div class="lg:w-30 md:w-30 mx-auto mx-auto flex h-40 w-10 flex-col overflow-hidden sm:w-full xl:w-40">
                  <div class="top h-5 w-full">
                    <span class="text-gray-500">20</span>
                  </div>
                  <div class="bottom h-30 w-full flex-grow cursor-pointer py-1"></div>
                </div>
              </td>
              <td class="lg:w-30 md:w-30 ease h-40 w-10 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300 sm:w-20 xl:w-40">
                <div class="lg:w-30 md:w-30 mx-auto mx-auto flex h-40 w-10 flex-col overflow-hidden sm:w-full xl:w-40">
                  <div class="top h-5 w-full">
                    <span class="text-gray-500">21</span>
                  </div>
                  <div class="bottom h-30 w-full flex-grow cursor-pointer py-1"></div>
                </div>
              </td>
              <td class="lg:w-30 md:w-30 ease h-40 w-10 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300 sm:w-20 xl:w-40">
                <div class="lg:w-30 md:w-30 mx-auto mx-auto flex h-40 w-10 flex-col overflow-hidden sm:w-full xl:w-40">
                  <div class="top h-5 w-full">
                    <span class="text-sm text-gray-500">22</span>
                  </div>
                  <div class="bottom h-30 w-full flex-grow cursor-pointer py-1"></div>
                </div>
              </td>
            </tr>
            <tr class="h-20 text-center">
              <td class="lg:w-30 md:w-30 ease h-40 w-10 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300 sm:w-20 xl:w-40">
                <div class="lg:w-30 md:w-30 mx-auto mx-auto flex h-40 w-10 flex-col overflow-hidden sm:w-full xl:w-40">
                  <div class="top h-5 w-full">
                    <span class="text-gray-500">23</span>
                  </div>
                  <div class="bottom h-30 w-full flex-grow cursor-pointer py-1"></div>
                </div>
              </td>
              <td class="lg:w-30 md:w-30 ease h-40 w-10 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300 sm:w-20 xl:w-40">
                <div class="lg:w-30 md:w-30 mx-auto mx-auto flex h-40 w-10 flex-col overflow-hidden sm:w-full xl:w-40">
                  <div class="top h-5 w-full">
                    <span class="text-gray-500">24</span>
                  </div>
                  <div class="bottom h-30 w-full flex-grow cursor-pointer py-1"></div>
                </div>
              </td>
              <td class="lg:w-30 md:w-30 ease h-40 w-10 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300 sm:w-20 xl:w-40">
                <div class="lg:w-30 md:w-30 mx-auto mx-auto flex h-40 w-10 flex-col overflow-hidden sm:w-full xl:w-40">
                  <div class="top h-5 w-full">
                    <span class="text-gray-500">25</span>
                  </div>
                  <div class="bottom h-30 w-full flex-grow cursor-pointer py-1"></div>
                </div>
              </td>
              <td class="lg:w-30 md:w-30 ease h-40 w-10 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300 sm:w-20 xl:w-40">
                <div class="lg:w-30 md:w-30 mx-auto mx-auto flex h-40 w-10 flex-col overflow-hidden sm:w-full xl:w-40">
                  <div class="top h-5 w-full">
                    <span class="text-gray-500">26</span>
                  </div>
                  <div class="bottom h-30 w-full flex-grow cursor-pointer py-1"></div>
                </div>
              </td>
              <td class="lg:w-30 md:w-30 ease h-40 w-10 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300 sm:w-20 xl:w-40">
                <div class="lg:w-30 md:w-30 mx-auto mx-auto flex h-40 w-10 flex-col overflow-hidden sm:w-full xl:w-40">
                  <div class="top h-5 w-full">
                    <span class="text-gray-500">27</span>
                  </div>
                  <div class="bottom h-30 w-full flex-grow cursor-pointer py-1"></div>
                </div>
              </td>
              <td class="lg:w-30 md:w-30 ease h-40 w-10 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300 sm:w-20 xl:w-40">
                <div class="lg:w-30 md:w-30 mx-auto mx-auto flex h-40 w-10 flex-col overflow-hidden sm:w-full xl:w-40">
                  <div class="top h-5 w-full">
                    <span class="text-gray-500">28</span>
                  </div>
                  <div class="bottom h-30 w-full flex-grow cursor-pointer py-1"></div>
                </div>
              </td>
              <td class="lg:w-30 md:w-30 ease h-40 w-10 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300 sm:w-20 xl:w-40">
                <div class="lg:w-30 md:w-30 mx-auto mx-auto flex h-40 w-10 flex-col overflow-hidden sm:w-full xl:w-40">
                  <div class="top h-5 w-full">
                    <span class="text-sm text-gray-500">29</span>
                  </div>
                  <div class="bottom h-30 w-full flex-grow cursor-pointer py-1"></div>
                </div>
              </td>
            </tr>
            <tr class="h-20 text-center">
              <td class="lg:w-30 md:w-30 ease h-40 w-10 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300 sm:w-20 xl:w-40">
                <div class="lg:w-30 md:w-30 mx-auto mx-auto flex h-40 w-10 flex-col overflow-hidden sm:w-full xl:w-40">
                  <div class="top h-5 w-full">
                    <span class="text-gray-500">30</span>
                  </div>
                  <div class="bottom h-30 w-full flex-grow cursor-pointer py-1"></div>
                </div>
              </td>
              <td class="lg:w-30 md:w-30 ease h-40 w-10 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300 sm:w-20 xl:w-40">
                <div class="lg:w-30 md:w-30 mx-auto mx-auto flex h-40 w-10 flex-col overflow-hidden sm:w-full xl:w-40">
                  <div class="top h-5 w-full">
                    <span class="text-gray-500">31</span>
                  </div>
                  <div class="bottom h-30 w-full flex-grow cursor-pointer py-1"></div>
                </div>
              </td>
              <td class="lg:w-30 md:w-30 ease h-40 w-10 cursor-pointer overflow-auto border bg-gray-100 p-1 transition duration-500 hover:bg-gray-300 sm:w-20 xl:w-40">
                <div class="lg:w-30 md:w-30 mx-auto mx-auto flex h-40 w-10 flex-col overflow-hidden sm:w-full xl:w-40">
                  <div class="top h-5 w-full">
                    <span class="text-gray-500">1</span>
                  </div>
                  <div class="bottom h-30 w-full flex-grow cursor-pointer py-1"></div>
                </div>
              </td>
              <td class="lg:w-30 md:w-30 ease h-40 w-10 cursor-pointer overflow-auto border bg-gray-100 p-1 transition duration-500 hover:bg-gray-300 sm:w-20 xl:w-40">
                <div class="lg:w-30 md:w-30 mx-auto mx-auto flex h-40 w-10 flex-col overflow-hidden sm:w-full xl:w-40">
                  <div class="top h-5 w-full">
                    <span class="text-gray-500">2</span>
                  </div>
                  <div class="bottom h-30 w-full flex-grow cursor-pointer py-1"></div>
                </div>
              </td>
              <td class="lg:w-30 md:w-30 ease h-40 w-10 cursor-pointer overflow-auto border bg-gray-100 p-1 transition duration-500 hover:bg-gray-300 sm:w-20 xl:w-40">
                <div class="lg:w-30 md:w-30 mx-auto mx-auto flex h-40 w-10 flex-col overflow-hidden sm:w-full xl:w-40">
                  <div class="top h-5 w-full">
                    <span class="text-gray-500">3</span>
                  </div>
                  <div class="bottom h-30 w-full flex-grow cursor-pointer py-1"></div>
                </div>
              </td>
              <td class="lg:w-30 md:w-30 ease h-40 w-10 cursor-pointer overflow-auto border bg-gray-100 p-1 transition duration-500 hover:bg-gray-300 sm:w-20 xl:w-40">
                <div class="lg:w-30 md:w-30 mx-auto mx-auto flex h-40 w-10 flex-col overflow-hidden sm:w-full xl:w-40">
                  <div class="top h-5 w-full">
                    <span class="text-gray-500">4</span>
                  </div>
                  <div class="bottom h-30 w-full flex-grow cursor-pointer py-1"></div>
                </div>
              </td>
              <td class="lg:w-30 md:w-30 ease h-40 w-10 cursor-pointer overflow-auto border bg-gray-100 p-1 transition duration-500 hover:bg-gray-300 sm:w-20 xl:w-40">
                <div class="lg:w-30 md:w-30 mx-auto mx-auto flex h-40 w-10 flex-col overflow-hidden sm:w-full xl:w-40">
                  <div class="top h-5 w-full">
                    <span class="text-sm text-gray-500">5</span>
                  </div>
                  <div class="bottom h-30 w-full flex-grow cursor-pointer py-1"></div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default index;
