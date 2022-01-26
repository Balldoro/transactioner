import { act, render, screen } from "@testing-library/react";
import Auth0NavigateProvider from "components/Auth0NavigateProvider";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import { RoutePaths } from "routes/RoutePaths";
import i18n from "services/i18n";
import GroupCard from "./index";

describe("<GroupCard />", () => {
  const GROUP_NAME = "Test group";
  const GROUP_CATEGORY = { src: "summer-holidays.png", name: "category_1" };
  const GROUP_DESCRIPTION = "test description";
  const GROUP_ID = 1;

  const USER_NICKNAME = "Test user";
  const USER_PICTURE = "summer-holidays.png";

  beforeEach(async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Auth0NavigateProvider>
            <I18nextProvider i18n={i18n}>
              <GroupCard
                title={GROUP_NAME}
                category={GROUP_CATEGORY}
                description={GROUP_DESCRIPTION}
                currency="PLN"
                id={GROUP_ID}
                users={[{ nickname: USER_NICKNAME, picture: USER_PICTURE }]}
              />
            </I18nextProvider>
          </Auth0NavigateProvider>
        </BrowserRouter>
      );
    });
  });

  it("should render correctly with props", async () => {
    const title = screen.getByRole("heading", { name: GROUP_NAME });
    const description = screen.getByText(GROUP_DESCRIPTION);
    const icon = screen.getByRole("img", { name: "Group icon" });

    expect(icon).toHaveAttribute("src", GROUP_CATEGORY.src);
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it("should contain link button", () => {
    const goToButton = screen.getByRole("link", {
      name: "Go to group",
    });

    expect(goToButton).toBeInTheDocument();
    expect(goToButton).toHaveAttribute(
      "href",
      `${RoutePaths.GROUP}/${GROUP_ID}`
    );
  });

  it("should render user avatar", () => {
    const userAvatar = screen.getByRole("img", { name: USER_NICKNAME });

    expect(userAvatar).toBeInTheDocument();
  });
});
