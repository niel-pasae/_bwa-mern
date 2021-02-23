import React from "react";
import { render } from "@testing-library/react";
import Button from "./index";
import { BrowserRouter as Router } from "react-router-dom";

test("should no allow click button if disable", () => {
  const { container } = render(<Button isDisabled></Button>);

  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("should include loading", () => {
  const { container, getByText } = render(<Button isLoading></Button>);

  expect(getByText(/loading/i)).toBeInTheDocument();
  expect(container.querySelector("span")).toBeInTheDocument();
});

test("should render <a> tag", () => {
  const { container } = render(<Button type="link" isExternal></Button>);

  expect(container.querySelector("a")).toBeInTheDocument();
});

test("should render <Link> tag", () => {
  const { container } = render(
    <Router>
      <Button type="link" href=""></Button>
    </Router>
  );

  expect(container.querySelector("a")).toBeInTheDocument();
});
