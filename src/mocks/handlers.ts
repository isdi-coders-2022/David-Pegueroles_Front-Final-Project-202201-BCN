import { rest } from "msw";
import changeDateFormat from "../utils/changeDateFormat/changeDateFormat";

const date = "29-03-2022";

export const handlers = [
  rest.get(
    `${process.env.REACT_APP_API}calendar/${changeDateFormat(date, true)}`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          appointments: [
            {
              name: "Do something",
              description: "This should do",
              date: "2022-03-29",
              category: "Work",
              location: "C/ Diputació 37, Barcelona",
              hour: "10:00",
              id: "624210049666edf108d06d69",
            },
            {
              name: "Do something else",
              description: "This is another thing to do",
              date: "2022-03-29",
              category: "Work",
              location: "C/ Diputació 37, Barcelona",
              hour: "12:00",
              id: "624212b09666edf108d06d6a",
            },
          ],
        })
      );
    }
  ),
  rest.get(
    `${process.env.REACT_APP_API}calendar/appointment/624210049666edf108d06d69`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          appointment: {
            name: "Do something",
            description: "This should do",
            date: "2022-03-29",
            category: "Work",
            location: "C/ Diputació 37, Barcelona",
            hour: "10:00",
            id: "624210049666edf108d06d69",
          },
        })
      );
    }
  ),
];
