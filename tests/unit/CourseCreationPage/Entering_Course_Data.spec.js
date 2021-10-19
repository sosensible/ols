import CourseCreationPage from "../../../src/views/course/CourseCreationPage.vue";
import { render, screen } from "@testing-library/vue";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("Entering Course Data", () => {
  let saveCourseButton, courseNameInput, CourseDescriptionInput;
  const setup = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    render(CourseCreationPage);
    saveCourseButton = screen.queryByRole("button", { name: "Save Course" });
    courseNameInput = screen.queryByLabelText("Name");
    CourseDescriptionInput = screen.queryByLabelText("Description");
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
    expect(saveCourseButton).toBeEnabled();
  });
  it("does not enable if description is not filled", async () => {
    setup();
    await userEvent.type(courseNameInput, "HTML Basics");
    expect(saveCourseButton).toBeDisabled();
  });
  it("does not enable if name is not filled", async () => {
    setup();
    await userEvent.type(CourseDescriptionInput, "Html Course Description");
    expect(saveCourseButton).toBeDisabled();
  });
});
