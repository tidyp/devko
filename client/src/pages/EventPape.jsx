import { useState, useEffect } from "react";
import { readEventPosts } from "../api/apiDevko";
import { Link, Outlet, useLoaderData } from "react-router-dom";

import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

const dummy = [
  {
    id: 6,
    category: "event",
    title: "dqwd",
    content: "dwqdwq",
    section: "qwdwq",
    startDate: "2024-02-03T15:00:00.000Z",
    endDate: "2024-02-14T15:00:00.000Z",
    location: "wqd",
    createdAt: "2024-02-03T16:47:08.000Z",
    updatedAt: "2024-02-03T16:47:08.000Z",
    userId: "d5dff2f2-98d6-4807-9496-0bba7c1ee9f6",
  },
  {
    category: "event",
    content: "dwqdwq",
    createdAt: "2024-02-03T16:47:30.000Z",
    endDate: "2024-02-14T15:00:00.000Z",
    id: 7,
    location: "wqd",
    section: "qwdwq",
    startDate: "2024-02-03T15:00:00.000Z",
    title: "dqwd",
    updatedAt: "2024-02-03T16:47:30.000Z",
    userId: "d5dff2f2-98d6-4807-9496-0bba7c1ee9f6",
  },
];
import Button from "../components/Button";

const EventPape = () => {
  const data = useLoaderData();
  const filterData = data[0];
  const [selectday, setSelectday] = useState(new Date().getDate());
  const [today, setToday] = useState(new Date());
  const [eventData, setEventData] = useState([]);
  const [selectEvent, setSelectEvent] = useState([]);

  console.log(`selectday: ${selectday}`);

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

  function transformData(data) {
    return {
      year: new Date(data.startDate).getFullYear(),
      month: new Date(data.startDate).getMonth() + 1,
      day: new Date(data.startDate).getDate(),
      title: data.title,
      content: data.content,
    };
  }

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

      if (!week.every((day) => day === null)) {
        calendar.push(week);
      }
    }

    return calendar;
  };

  const handlePrevMonth = () => {
    setToday(new Date(today.getFullYear(), today.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setToday(new Date(today.getFullYear(), today.getMonth() + 1, 1));
  };
  const handleDayEvent = (day) => {
    // setSelectday({
    //   day: day.day,
    // });

    const newSelectEvent = eventData.filter((event) => event.day === day.day);
    setSelectEvent(newSelectEvent);
  };

  console.log(selectEvent);
  console.log(eventData.filter((event) => event.day === 4));
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <>
      <Outlet />
      <div className="mt-16 flex w-full flex-col items-center justify-center gap-2 ">
        <div className="flex w-[80rem] items-center justify-center gap-8 px-4 text-3xl font-bold">
          <h2>EVENT</h2>
        </div>
        <div className="my- flex w-[80rem] items-center justify-between px-4">
          <ul className="flex items-start gap-2 text-left text-xl font-semibold">
            <li>전체</li>
            <li>채용공고</li>
            <li>직업교육</li>
          </ul>
          <Link to="write">
            <Button color="bg-black" px="8">
              글 작성
            </Button>
          </Link>
        </div>
        <div className="flex w-[82rem] flex-col items-start justify-center gap-4">
          <div className="mt-2 flex w-full flex-col rounded bg-white ">
            <div className="mt-2 flex justify-between border-b p-2">
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
                    {/* {console.log(week)}
                    {console.log(week.dayEventPape)} */}
                    {week.map((day, dayEventPape) => (
                      <td className="w-44 border-2 p-4" key={dayEventPape}>
                        <div className="flex items-center justify-center">
                          {/* 일 */}
                          <div>
                            <span
                              onClick={() => handleDayEvent(day)}
                              className={`flex h-16 w-16 cursor-pointer items-center justify-center overflow-auto  border transition duration-500 hover:bg-blue-200 ${
                                day && day.data ? "bg-gray-200 rounded-full" : "border-none"
                              }`}
                            >
                              {/* 일-num */}
                              {day !== null ? day.day : ""}
                            </span>
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
          <div className="flex w-full flex-col items-center justify-center">
            <h2 className="text-lg ">{selectday.day}일 행사일정</h2>
            <div className="flex flex-col gap-2">
              {selectEvent.map((el) => (
                <div className="flex gap-4" key={el.day}>
                  <span>{el.year}</span>
                  <span>{el.month}</span>
                  <span>{el.day}</span>
                  <span>{el.title}</span>
                  <span>{el.content}</span>
                </div>
              ))}

              {/* {selectday.date.map((el) => (
                <li className="rounded-sm bg-blue-400 text-white">
                  <span>{el.title}</span>
                </li>
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventPape;

export async function loader({ params }) {
  try {
    const data = await readEventPosts(params.id);
    return data;
  } catch (error) {
    return "연결실패";
  }
}
