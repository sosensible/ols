import CourseCreationPage from "../../../src/views/course/CourseCreationPage.vue";
import { render, screen } from "@testing-library/vue";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { setupServer } from "msw/node";
import { rest } from "msw";

describe("Entering Course Data", () => {
  let saveCourseButton, courseNameInput, CourseDescriptionInput, priceInput;
  const setup = () => {
    render(CourseCreationPage);
    saveCourseButton = screen.queryByRole("button", { name: "Save Course" });
    courseNameInput = screen.queryByLabelText("Name");
    CourseDescriptionInput = screen.queryByLabelText("Description");
    priceInput = screen.queryByLabelText("Price");
  };
  it("has Create New Course Header", () => {
    setup();
    const header = screen.queryByRole("heading", { name: "Create New Course" });
    expect(header).toBeInTheDocument();
  });
  it("has Course name input", () => {
    setup();
    expect(courseNameInput).toBeInTheDocument();
  });
  it("has Course Description input", () => {
    setup();
    expect(CourseDescriptionInput).toBeInTheDocument();
  });
  it("has Save Course saveCourseButton", () => {
    setup();
    expect(saveCourseButton).toBeInTheDocument();
  });
  it("disables saveCourseButton initially", () => {
    setup();
    expect(saveCourseButton).toBeDisabled();
  });
  it("enables saveCourseButton when fields are filled", async () => {
    setup();
    await userEvent.type(courseNameInput, "HTML Basics");
    await userEvent.type(CourseDescriptionInput, "Html Course Description");
    await userEvent.type(priceInput, "40");
    expect(saveCourseButton).toBeEnabled();
  });
  it("does not enable if description and priceis not filled", async () => {
    setup();
    await userEvent.type(courseNameInput, "HTML Basics");
    expect(saveCourseButton).toBeDisabled();
  });
  it("does not enable if name and price is not filled", async () => {
    setup();
    await userEvent.type(CourseDescriptionInput, "Html Course Description");
    expect(saveCourseButton).toBeDisabled();
  });
  it("does not enable if name and descrption is not filled", async () => {
    setup();
    await userEvent.type(priceInput, "40");
    expect(saveCourseButton).toBeDisabled();
  });
  xit("sends name and description to backend after clicking button", async () => {
    let requestBody;
    const server = setupServer(
      rest.post("/api/courses", (req, res, ctx) => {
        requestBody = req.body;
        return res(ctx.status(200));
      })
    );
    server.listen();
    setup();
    await userEvent.type(courseNameInput, "Html Basics");
    await userEvent.type(
      CourseDescriptionInput,
      "a simple beginners guid to html"
    );
    await userEvent.click(saveCourseButton);
    await server.close();
    expect(requestBody).toEqual({
      name: "Html Basics",
      shortDescription: "a simple beginners guid to html",
    });
  });
});
