import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "jest-dom/extend-expect"

afterEach(cleanup);

it("calculates and displays probability for `e` properly", () => {
  const { getByText, getByPlaceholderText } = render(
    <App />,
  );

  // get letter-input field
  const input = getByPlaceholderText("a");

  // populate with letter "e"
  fireEvent.change(input, { target: { value: "e" } });

  // get the probability text
  const probability = getByText(/\%/i);

  expect(probability).toHaveTextContent("233 / 1235 (18.87%)");
})
