import { readPosts } from "../../api/apiDevko";
import { useLoaderData } from "react-router-dom";

import FilterBox from "../../components/FilterBox";
import PopTags from "../../components/PopTags";
import TopWriters from "../../components/TopWriters";

import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

const index = () => {
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <>
      <div className="box-border flex justify-center">
        <div className="box-border flex w-[80rem] gap-4">
          <div className="flex flex-col gap-2">
            <FilterBox />
            <PopTags />
            <TopWriters />
          </div>
          <div className="flex  items-start">
            <div className="container mx-auto py-3">
              <div className="wrapper rounded bg-white shadow ">
                <div class="header flex  justify-between border-b p-2">
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

                <table>
                  <thead>
                    <tr>
                      {day.map((el) => (
                        <th class="w-44 border-r p-2 text-xs">
                          <span>{el}</span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="h-20 text-center">
                      <td class=" eash-40 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300   ">
                        <div class=" fleh-40 sm: mx-auto mx-auto flex-col overflow-hidden ">
                          <div class="top h-5 ">
                            <span class="text-gray-500">1</span>
                          </div>
                          <div class="bottom h-30  flex-grow cursor-pointer py-1">
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
                      <td class=" eash-40 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300  ">
                        <div class=" fleh-40 sm: mx-auto mx-auto flex-col overflow-hidden ">
                          <div class="top h-5 ">
                            <span class="text-gray-500">2</span>
                          </div>
                          <div class="bottom h-30  flex-grow cursor-pointer py-1"></div>
                        </div>
                      </td>
                      <td class=" eash-40 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300  ">
                        <div class=" fleh-40 sm: mx-auto mx-auto flex-col overflow-hidden ">
                          <div class="top h-5 ">
                            <span class="text-gray-500">3</span>
                          </div>
                          <div class="bottom h-30  flex-grow cursor-pointer py-1"></div>
                        </div>
                      </td>
                      <td class=" eash-40 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300  ">
                        <div class=" fleh-40 sm: mx-auto mx-auto flex-col overflow-hidden ">
                          <div class="top h-5 ">
                            <span class="text-gray-500">4</span>
                          </div>
                          <div class="bottom h-30  flex-grow cursor-pointer py-1"></div>
                        </div>
                      </td>
                      <td class=" eash-40 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300  ">
                        <div class=" fleh-40 sm: mx-auto mx-auto flex-col overflow-hidden ">
                          <div class="top h-5 ">
                            <span class="text-gray-500">6</span>
                          </div>
                          <div class="bottom h-30  flex-grow cursor-pointer py-1"></div>
                        </div>
                      </td>
                      <td class=" eash-40 cursor-pointer overflow-hidden border p-1 transition duration-500 hover:bg-gray-300  ">
                        <div class=" fleh-40 sm: mx-auto mx-auto flex-col overflow-hidden ">
                          <div class="top h-5 ">
                            <span class="text-gray-500">7</span>
                          </div>
                          <div class="bottom h-30  flex-grow cursor-pointer py-1">
                            <div class="event mb-1 rounded bg-blue-400 p-1 text-sm text-white">
                              <span class="event-name">Shopping</span>
                              <span class="time">12:00~14:00</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class=" eash-40 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300  ">
                        <div class=" fleh-40 sm: mx-auto mx-auto flex-col overflow-hidden ">
                          <div class="top h-5 ">
                            <span class="text-sm text-gray-500">8</span>
                          </div>
                          <div class="bottom h-30  flex-grow cursor-pointer py-1"></div>
                        </div>
                      </td>
                    </tr>

                    <tr class="h-20 text-center">
                      <td class=" eash-40 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300  ">
                        <div class=" fleh-40 sm: mx-auto mx-auto flex-col overflow-hidden ">
                          <div class="top h-5 ">
                            <span class="text-gray-500">9</span>
                          </div>
                          <div class="bottom h-30  flex-grow cursor-pointer py-1"></div>
                        </div>
                      </td>
                      <td class=" eash-40 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300  ">
                        <div class=" fleh-40 sm: mx-auto mx-auto flex-col overflow-hidden ">
                          <div class="top h-5 ">
                            <span class="text-gray-500">10</span>
                          </div>
                          <div class="bottom h-30  flex-grow cursor-pointer py-1"></div>
                        </div>
                      </td>
                      <td class=" eash-40 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300  ">
                        <div class=" fleh-40 sm: mx-auto mx-auto flex-col overflow-hidden ">
                          <div class="top h-5 ">
                            <span class="text-gray-500">12</span>
                          </div>
                          <div class="bottom h-30  flex-grow cursor-pointer py-1"></div>
                        </div>
                      </td>
                      <td class=" eash-40 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300  ">
                        <div class=" fleh-40 sm: mx-auto mx-auto flex-col overflow-hidden ">
                          <div class="top h-5 ">
                            <span class="text-gray-500">13</span>
                          </div>
                          <div class="bottom h-30  flex-grow cursor-pointer py-1"></div>
                        </div>
                      </td>
                      <td class=" eash-40 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300  ">
                        <div class=" fleh-40 sm: mx-auto mx-auto flex-col overflow-hidden ">
                          <div class="top h-5 ">
                            <span class="text-gray-500">14</span>
                          </div>
                          <div class="bottom h-30  flex-grow cursor-pointer py-1"></div>
                        </div>
                      </td>
                      <td class=" eash-40 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300  ">
                        <div class=" fleh-40 sm: mx-auto mx-auto flex-col overflow-hidden ">
                          <div class="top h-5 ">
                            <span class="text-gray-500">15</span>
                          </div>
                          <div class="bottom h-30  flex-grow cursor-pointer py-1"></div>
                        </div>
                      </td>
                      <td class=" eash-40 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300  ">
                        <div class=" fleh-40 sm: mx-auto mx-auto flex-col overflow-hidden ">
                          <div class="top h-5 ">
                            <span class="text-sm text-gray-500">16</span>
                          </div>
                          <div class="bottom h-30  flex-grow cursor-pointer py-1"></div>
                        </div>
                      </td>
                    </tr>

                    <tr class="h-20 text-center">
                      <td class=" eash-40 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300  ">
                        <div class=" fleh-40 sm: mx-auto mx-auto flex-col overflow-hidden ">
                          <div class="top h-5 ">
                            <span class="text-gray-500">16</span>
                          </div>
                          <div class="bottom h-30  flex-grow cursor-pointer py-1"></div>
                        </div>
                      </td>
                      <td class=" eash-40 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300  ">
                        <div class=" fleh-40 sm: mx-auto mx-auto flex-col overflow-hidden ">
                          <div class="top h-5 ">
                            <span class="text-gray-500">17</span>
                          </div>
                          <div class="bottom h-30  flex-grow cursor-pointer py-1"></div>
                        </div>
                      </td>
                      <td class=" eash-40 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300  ">
                        <div class=" fleh-40 sm: mx-auto mx-auto flex-col overflow-hidden ">
                          <div class="top h-5 ">
                            <span class="text-gray-500">18</span>
                          </div>
                          <div class="bottom h-30  flex-grow cursor-pointer py-1"></div>
                        </div>
                      </td>
                      <td class=" eash-40 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300  ">
                        <div class=" fleh-40 sm: mx-auto mx-auto flex-col overflow-hidden ">
                          <div class="top h-5 ">
                            <span class="text-gray-500">19</span>
                          </div>
                          <div class="bottom h-30  flex-grow cursor-pointer py-1"></div>
                        </div>
                      </td>
                      <td class=" eash-40 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300  ">
                        <div class=" fleh-40 sm: mx-auto mx-auto flex-col overflow-hidden ">
                          <div class="top h-5 ">
                            <span class="text-gray-500">20</span>
                          </div>
                          <div class="bottom h-30  flex-grow cursor-pointer py-1"></div>
                        </div>
                      </td>
                      <td class=" eash-40 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300  ">
                        <div class=" fleh-40 sm: mx-auto mx-auto flex-col overflow-hidden ">
                          <div class="top h-5 ">
                            <span class="text-gray-500">21</span>
                          </div>
                          <div class="bottom h-30  flex-grow cursor-pointer py-1"></div>
                        </div>
                      </td>
                      <td class=" eash-40 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300  ">
                        <div class=" fleh-40 sm: mx-auto mx-auto flex-col overflow-hidden ">
                          <div class="top h-5 ">
                            <span class="text-sm text-gray-500">22</span>
                          </div>
                          <div class="bottom h-30  flex-grow cursor-pointer py-1"></div>
                        </div>
                      </td>
                    </tr>
                    <tr class="h-20 text-center">
                      <td class=" eash-40 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300  ">
                        <div class=" fleh-40 sm: mx-auto mx-auto flex-col overflow-hidden ">
                          <div class="top h-5 ">
                            <span class="text-gray-500">23</span>
                          </div>
                          <div class="bottom h-30  flex-grow cursor-pointer py-1"></div>
                        </div>
                      </td>
                      <td class=" eash-40 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300  ">
                        <div class=" fleh-40 sm: mx-auto mx-auto flex-col overflow-hidden ">
                          <div class="top h-5 ">
                            <span class="text-gray-500">24</span>
                          </div>
                          <div class="bottom h-30  flex-grow cursor-pointer py-1"></div>
                        </div>
                      </td>
                      <td class=" eash-40 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300  ">
                        <div class=" fleh-40 sm: mx-auto mx-auto flex-col overflow-hidden ">
                          <div class="top h-5 ">
                            <span class="text-gray-500">25</span>
                          </div>
                          <div class="bottom h-30  flex-grow cursor-pointer py-1"></div>
                        </div>
                      </td>
                      <td class=" eash-40 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300  ">
                        <div class=" fleh-40 sm: mx-auto mx-auto flex-col overflow-hidden ">
                          <div class="top h-5 ">
                            <span class="text-gray-500">26</span>
                          </div>
                          <div class="bottom h-30  flex-grow cursor-pointer py-1"></div>
                        </div>
                      </td>
                      <td class=" eash-40 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300  ">
                        <div class=" fleh-40 sm: mx-auto mx-auto flex-col overflow-hidden ">
                          <div class="top h-5 ">
                            <span class="text-gray-500">27</span>
                          </div>
                          <div class="bottom h-30  flex-grow cursor-pointer py-1"></div>
                        </div>
                      </td>
                      <td class=" eash-40 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300  ">
                        <div class=" fleh-40 sm: mx-auto mx-auto flex-col overflow-hidden ">
                          <div class="top h-5 ">
                            <span class="text-gray-500">28</span>
                          </div>
                          <div class="bottom h-30  flex-grow cursor-pointer py-1"></div>
                        </div>
                      </td>
                      <td class=" eash-40 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300  ">
                        <div class=" fleh-40 sm: mx-auto mx-auto flex-col overflow-hidden ">
                          <div class="top h-5 ">
                            <span class="text-sm text-gray-500">29</span>
                          </div>
                          <div class="bottom h-30  flex-grow cursor-pointer py-1"></div>
                        </div>
                      </td>
                    </tr>
                    <tr class="h-20 text-center">
                      <td class=" eash-40 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300  ">
                        <div class=" fleh-40 sm: mx-auto mx-auto flex-col overflow-hidden ">
                          <div class="top h-5 ">
                            <span class="text-gray-500">30</span>
                          </div>
                          <div class="bottom h-30  flex-grow cursor-pointer py-1"></div>
                        </div>
                      </td>
                      <td class=" eash-40 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300  ">
                        <div class=" fleh-40 sm: mx-auto mx-auto flex-col overflow-hidden ">
                          <div class="top h-5 ">
                            <span class="text-gray-500">31</span>
                          </div>
                          <div class="bottom h-30  flex-grow cursor-pointer py-1"></div>
                        </div>
                      </td>
                      <td class=" eash-40 cursor-pointer overflow-auto border bg-gray-100 p-1 transition duration-500 hover:bg-gray-300  ">
                        <div class=" fleh-40 sm: mx-auto mx-auto flex-col overflow-hidden ">
                          <div class="top h-5 ">
                            <span class="text-gray-500">1</span>
                          </div>
                          <div class="bottom h-30  flex-grow cursor-pointer py-1"></div>
                        </div>
                      </td>
                      <td class=" eash-40 cursor-pointer overflow-auto border bg-gray-100 p-1 transition duration-500 hover:bg-gray-300  ">
                        <div class=" fleh-40 sm: mx-auto mx-auto flex-col overflow-hidden ">
                          <div class="top h-5 ">
                            <span class="text-gray-500">2</span>
                          </div>
                          <div class="bottom h-30  flex-grow cursor-pointer py-1"></div>
                        </div>
                      </td>
                      <td class=" eash-40 cursor-pointer overflow-auto border bg-gray-100 p-1 transition duration-500 hover:bg-gray-300  ">
                        <div class=" fleh-40 sm: mx-auto mx-auto flex-col overflow-hidden ">
                          <div class="top h-5 ">
                            <span class="text-gray-500">3</span>
                          </div>
                          <div class="bottom h-30  flex-grow cursor-pointer py-1"></div>
                        </div>
                      </td>
                      <td class=" eash-40 cursor-pointer overflow-auto border bg-gray-100 p-1 transition duration-500 hover:bg-gray-300  ">
                        <div class=" fleh-40 sm: mx-auto mx-auto flex-col overflow-hidden ">
                          <div class="top h-5 ">
                            <span class="text-gray-500">4</span>
                          </div>
                          <div class="bottom h-30  flex-grow cursor-pointer py-1"></div>
                        </div>
                      </td>
                      <td class=" eash-40 cursor-pointer overflow-auto border bg-gray-100 p-1 transition duration-500 hover:bg-gray-300  ">
                        <div class=" fleh-40 sm: mx-auto mx-auto flex-col overflow-hidden ">
                          <div class="top h-5 ">
                            <span class="text-sm text-gray-500">5</span>
                          </div>
                          <div class="bottom h-30  flex-grow cursor-pointer py-1"></div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default index;
