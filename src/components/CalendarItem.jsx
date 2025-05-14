import { useState } from "react";
import Calendar from "react-calendar";
import "../styles/calendarItem.css";

export const CalendarItem = ({ isMain, isClick, setTodayDate }) => {
  const [date, setDate] = useState(new Date());

  function onChange(nextDate) {
    setDate(nextDate);
    console.log(date);
    isClick(true);
    setTodayDate(date);
  }

  return (
    <div className="c">
      <Calendar
        onChange={onChange} // 다른 날짜 클릭 시 date 변경
        value={date} // 현재 날짜로 설정
        view="month" // 월 단위로 보기
        selectRange={false} // 범위 설정 불가
        locale="ko-KR" // 한국 기준(언어도)
        calendarType="gregory" // 일요일부터 시작
        showNavigation="false" // 상단 월/년 이동 네비게이션 전체 숨김
        next2Label={null} // +1년 & +10년 이동 버튼 숨기기
        prev2Label={null} // -1년 & -10년 이동 버튼 숨기기
        minDetail="year" //  년까지만 보여줌(10년 안보여줌)
        formatDay={(locale, date) => date.getDate()} // 여기서 "일"을 제거할 수 있음
        navigationLabel={({ date }) => `${date.getMonth() + 1}월`} // 네비게이션 년 제거
        tileClassName={({ date: tileDate, view }) => {
          // 각 날짜 타일에 클래스명을 동적으로 추가할 수 있음
          if (
            view === "month" &&
            tileDate.toDateString() === date.toDateString()
          ) {
            return "selected-circle";
          }
          return null;
        }}
        prevLabel={isMain ? "" : null}
        nextLabel={isMain ? "" : null}
      />
      {/* <div className="today">
        {date.getFullYear()}.{date.getMonth()+1}.{date.getDate()}
      </div> */}
    </div>
  );
};
