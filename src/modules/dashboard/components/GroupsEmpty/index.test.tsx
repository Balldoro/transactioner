import { act, render, screen } from "@testing-library/react";
import Auth0NavigateProvider from "components/Auth0NavigateProvider";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import { RoutePaths } from "routes/RoutePaths";
import i18n from "services/i18n";
import GroupsEmpty from "./index";

describe("<GroupsEmpty />", () => {
  beforeEach(async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Auth0NavigateProvider>
            <I18nextProvider i18n={i18n}>
              <GroupsEmpty />
            </I18nextProvider>
          </Auth0NavigateProvider>
        </BrowserRouter>
      );
    });
  });
  it("should render info text", () => {
    const title = screen.getByRole("heading", {
      name: /You don't have any created groups yet!/,
    });

    expect(title).toBeInTheDocument();
  });

  it("should render link", () => {
    const linkButton = screen.getByRole("link", { name: /Create new group/ });

    expect(linkButton).toBeInTheDocument();
    expect(linkButton).toHaveAttribute("href", RoutePaths.NEW_GROUP);
  });
});
