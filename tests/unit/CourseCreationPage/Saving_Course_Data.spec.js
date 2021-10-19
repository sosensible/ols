import CourseCreationPage from "../../../src/views/course/CourseCreationPage.vue";
import { render, screen } from "@testing-library/vue";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { setupServer } from "msw/node"
import { rest } from "msw";

describe("Saving Course Data", () => {
  let saveCourseButton, courseNameInput, CourseDescriptionInput;
  const setup = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    render(CourseCreationPage);
    saveCourseButton = screen.queryByRole("button", { name: "Save Course" });
    courseNameInput = screen.queryByLabelText("Name");
    CourseDescriptionInput = screen.queryByLabelText("Description");
  };
  it("sends data to backend after clicking button", async () => {
    let requestBody;
    const server = setupServer(
      rest.post("/api/courses", (req, res, ctx) => {
        requestBody = req.body;
        return res(ctx.status(200));
      })
    );
    server.listen();
    setup();
    await userEvent.type(courseNameInput, "HTML Basics");
    await userEvent.type(CourseDescriptionInput, "Html Course Description");
    await userEvent.click(saveCourseButton);
    await server.close();
    expect(requestBody).toEqual({
      name: "HTML Basics",
      description: "Html Course Description",
    });
  });
});
