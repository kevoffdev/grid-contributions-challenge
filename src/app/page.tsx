import {getApiCommit} from "@/services";

function setColor(value: number): string {
  switch (true) {
    case value === 0:
      return "#ebedf0";
    case value <= 21:
      return "#9be9a8";
    case value <= 41:
      return "#40c463";
    case value <= 62:
      return "#30a14e";
    default:
      return "#ebedf0";
  }
}

export default async function Home() {
  const weeks = await getApiCommit();

  return (
    <section
      className="grid grid-flow-col gap-2 overflow-x-auto bg-slate-600 py-2"
      style={{
        gridTemplateColumns: `repeat(${weeks.length}, auto)`,
        gridTemplateRows: `repeat(${weeks[0].days.length + 1}, auto)`,
      }}
    >
      <span />
      {weeks[0].days.map((day) => (
        <span key={day.date.toISOString()} className="even:invisible">
          {day.date.toLocaleString("default", {weekday: "short"})}
        </span>
      ))}
      {weeks.map((week, weeIndex) => {
        return [
          <span
            key={week.id}
            className={
              week.date.getMonth() === weeks[weeIndex - 1]?.date.getMonth() ? "invisible" : ""
            }
          >
            {week.date.toLocaleString("default", {month: "short"})}
          </span>,
          week.days.map((day) => (
            <span
              key={day.date.toISOString()}
              className="h-8 w-8"
              style={{backgroundColor: setColor(day.contributions)}}
              title={`${day.contributions} contributions on ${day.date.toLocaleDateString("default")}`}
            />
          )),
        ];
      })}
    </section>
  );
}
