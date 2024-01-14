import { useState, useEffect } from "react";

import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

const dummyData = [
  // 데이터 시작일-종료일 utils로 처리
  {
    year: 2024,
    month: 1,
    day: 5,
    event: "교육모집 일정",
    time: "10:00~12:00",
    color: "bg-blue-400",
  },
  {
    year: 2024,
    month: 1,
    day: 15,
    event: "채용공고 일정",
    time: "14:00~16:00",
    color: "bg-purple-400",
  },
  {
    year: 2024,
    month: 1,
    day: 16,
    event: "채용공고 일정",
    time: "14:00~16:00",
    color: "bg-purple-400",
  },
  {
    year: 2024,
    month: 1,
    day: 17,
    event: "채용공고 일정",
    time: "14:00~16:00",
    color: "bg-purple-400",
  },
  {
    year: 2024,
    month: 1,
    day: 17,
    event: "채용공고 일정",
    time: "14:00~16:00",
    color: "bg-purple-400",
  },
];

const Index = () => {
  const [today, setToday] = useState(new Date());

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
          const dayData = dummyData.find(
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
      <div className="mx-auto flex ">
        <div className="rounded bg-slate-50 shadow">
          <div className="flex justify-between border-b p-2">
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
                {dayNames.map((el, index) => (
                  <th
                    key={index}
                    className={`w-44 border-r p-2 text-xs ${
                      index === dayNames.length - 1 ? "border-r-0" : ""
                    }`}
                  >
                    <span>{el}</span>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {generateCalendar().map((week, rowIndex) => (
                <tr className="h-20 text-center" key={rowIndex}>
                  {week.map((day, dayIndex) => (
                    // TODO: 주간 컴포넌트
                    <td
                      key={dayIndex}
                      className="flex-40 cursor-pointer overflow-auto border p-1 transition duration-500 hover:bg-gray-300"
                    >
                      <div className="flex-col overflow-hidden">
                        <div>
                          <span className="text-gray-500">
                            {day !== null ? day.day : ""}
                          </span>
                        </div>
                        <div className="bottom h-30 flex flex-grow cursor-pointer py-1">
                          {day && day.data && (
                            // TODO: 링크
                            <div
                              className={`mb-1 rounded p-1 text-sm text-white ${
                                day.data.event ? day.data.color : ""
                              }`}
                            >
                              <span>{day.data.event}</span>
                              <span>{day.data.time}</span>
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
      </div>
      {/* 게시판 */}
      <div className="w-full">
        <h2>게시판</h2>
        <ul className="flex flex-col gap-2">
          <li className="rounded-sm bg-purple-400 text-white">
            채용공고 일정 1/15-1/17
          </li>
          <li className="rounded-sm bg-blue-400 text-white">
            교육모집 일정 1/5
          </li>
          <li>게시글</li>
          <li>게시글</li>
          <li>게시글</li>
          <li>게시글</li>
          <li>게시글</li>
        </ul>
      </div>
    </>
  );
};

export default Index;
