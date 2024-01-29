import { useState, useEffect } from "react";
import { readEventPosts } from "../api/apiDevko";
import { Link, Outlet, useLoaderData } from "react-router-dom";

import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

import Button from "../components/Button";

const EventPape = () => {
  const data = useLoaderData();
  const filterData = data.filter((item) => item.category === "event");

  function transformData(data) {
    return {
      year: new Date(data.startDate).getFullYear(),
      month: new Date(data.startDate).getMonth() + 1,
      day: new Date(data.startDate).getDate(),
      title: data.title,
    };
  }

  const [today, setToday] = useState(new Date());
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    const events = [];
    filterData.forEach((data) => {
      const startDate = new Date(data.startDate);
      const endDate = new Date(data.endDate);

      for (
        let currentDate = startDate;
        currentDate <= endDate;
        currentDate.setDate(currentDate.getDate() + 1)
      ) {
        events.push(
          transformData({ ...data, startDate: currentDate.toISOString() }),
        );
      }
    });
    setEventData(events);
  }, []);

  const generateCalendar = () => {
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const lastDayOfMonth = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      0,
    );
    const startingDayOfWeek = firstDayOfMonth.getDay();
    const totalDays = lastDayOfMonth.getDate();
    let calendar = [];
    let dayCounter = 1;
    for (let i = 0; i < 6; i++) {
      let week = [];
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < startingDayOfWeek) || dayCounter > totalDays) {
          week.push(null);
        } else {
          const dayData = eventData.find(
            (item) =>
              item.year === today.getFullYear() &&
              item.month === today.getMonth() + 1 &&
              item.day === dayCounter,
          );
          week.push({ day: dayCounter, data: dayData });
          dayCounter++;
        }
      }
      calendar.push(week);
    }

    return calendar;
  };

  const handlePrevMonth = () => {
    setToday(new Date(today.getFullYear(), today.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setToday(new Date(today.getFullYear(), today.getMonth() + 1, 1));
  };

  useEffect(() => {}, [today]);

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <>
      <Outlet />
      <div className="mt-8 flex flex-col items-center justify-center gap-2">
        <div className="flex w-[82rem] flex-col items-start justify-center gap-4">
          <div className="flex w-full justify-between">
            <ul className="flex gap-2">
              <li>전체</li>
              <li>필터링1</li>
              <li>필터링1</li>
              <li>필터링1</li>
            </ul>
            
            <Button color="bg-black">글 작성</Button>
          </div>
          <div className="w-full rounded bg-white mt-2 ">
            <div className="flex justify-between border-b p-2 mt-2">
              <span className="text-lg font-bold">
                {today.toLocaleString("default", {
                  month: "long",
                  year: "numeric",
                })}
              </span>

              <div>
                <button onClick={handlePrevMonth} className="p-1">
                  <FaRegArrowAltCircleLeft />
                </button>
                <button onClick={handleNextMonth} className="p-1">
                  <FaRegArrowAltCircleRight />
                </button>
              </div>
            </div>

            <table>
              <thead>
                <tr>
                  {dayNames.map((el, EventPape) => (
                    <th
                      key={EventPape}
                      className={`w-auto border-r p-2 text-xs ${
                        EventPape === dayNames.length - 1 ? "border-r-0" : ""
                      }`}
                    >
                      <span>{el}</span>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {generateCalendar().map((week, rowEventPape) => (
                  <tr className="h-20 text-center" key={rowEventPape}>
                    {week.map((day, dayEventPape) => (
                      // TODO: 주간 컴포넌트
                      <td
                        key={dayEventPape}
                        className="flex-40 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300"
                      >
                        <div className="flex-col overflow-hidden">
                          <div>
                            <span className="text-gray-500 ">
                              {day !== null ? day.day : ""}
                            </span>
                          </div>
                          <div className="bottom h-30 flex w-44 flex-grow cursor-pointer py-1 ">
                            {day && day.data && (
                              // TODO: 링크
                              <div
                                className={`mb-1 w-full rounded bg-purple-400 p-1 text-sm text-white`}
                              >
                                <span>{day.data.title}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* 게시판 */}
          <div className="w-full">
            <h2>게시판</h2>
            <ul className="flex flex-col gap-2">
              {filterData.map((el) => (
                <li className="rounded-sm bg-blue-400 text-white">
                  <span>{el.title}</span>
                  <span>{el.section}</span>
                  <span>{el.location}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventPape;

export async function loader() {
  try {
    const board = await readEventPosts();
    return board;
  } catch (error) {
    console.error("Error fetching posts:", error);
    // loader-fetch-요청실패
    return "연결실패";
  }
}
