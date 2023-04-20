import { render, screen } from "@testing-library/react";
import { UserDistanceCounter } from "./UserDistanceCounter";
import { mockUser } from "../../test/testData.constants";

describe("Component: UserDistanceCounter", () => {
  it.each<[number, number]>([
    [1, 1],
    [2, 3],
  ])("should render correct user IDs", (index, id) => {
    render(<UserDistanceCounter data={mockUser} />);

    const userIndex1 = screen.getByText(`User ${index} `, { exact: false });
    const userIndex2 = screen.getByText(`ID : ${id}`, { exact: false });

    expect(userIndex1).toBeInTheDocument();
    expect(userIndex2).toBeInTheDocument();
  });

  it("should not render user who lives closer", () => {
    render(<UserDistanceCounter data={mockUser} />);

    const closerUser = screen.queryByText("User 2 ID : 2");

    expect(closerUser).not.toBeInTheDocument();
  });
});
