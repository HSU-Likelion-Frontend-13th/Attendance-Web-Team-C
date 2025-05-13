import { headerlogo2 } from "../assets";
import { CalendarItem } from "../components/CalendarItem";

export const AttendanceCheckPage = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="img">
          <img src={headerlogo2} />
        </div>
        <span className="title">내 출석 현황</span>
      </div>
      <div className="contents">
        <div className="main-calendar">
          <CalendarItem isMain={true}/>
        </div>
        <div className="left-calendar">
          <CalendarItem isMain={false}/>
        </div>
        <div className="right-calendar">
          <CalendarItem isMain={false}/>
        </div>
      </div>
    </div>
  );
};
