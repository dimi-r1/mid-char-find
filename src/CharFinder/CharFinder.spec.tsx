import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import CharFinder from "./CharFinder";

const unmockedFetch = global.fetch;

beforeAll(() => {
    global.fetch = () =>
        // @ts-ignore
        Promise.resolve({
            json: () =>
                Promise.resolve([
                    {
                        definition:
                            "Calf's skin set beside a cow to make her give milk freely  ",
                        pronunciation: "Tulkshan",
                        word: "Tulchan",
                    },
                ]),
        });
});

afterAll(() => {
    global.fetch = unmockedFetch;
});

describe("CharFinder", () => {
    it("should render correctly", () => {
        const { container } = render(<CharFinder />);
        expect(container).toMatchSnapshot();
    });

    it("should show a default word on component mount", async () => {
        render(<CharFinder />);

        expect(await screen.findByText("tul")).toBeInTheDocument();
        expect(screen.getByText("c")).toBeInTheDocument();
        expect(screen.getByText("han")).toBeInTheDocument();
    });

    it("should update the word when the user clicks the fetch button", async () => {
        global.fetch = () =>
            // @ts-ignore
            Promise.resolve({
                json: () =>
                    Promise.resolve([
                        {
                            definition: "test",
                            pronunciation: "test",
                            word: "tester",
                        },
                    ]),
            });

        render(<CharFinder />);

        const button = await screen.findByRole("button", { name: /Fetch/ });

        userEvent.click(button);

        expect(await screen.findByText("te")).toBeInTheDocument();
        expect(screen.getByText("st")).toBeInTheDocument();
        expect(screen.getByText("er")).toBeInTheDocument();
    });

    it("should update the word when the user types in custom text", async () => {
        render(<CharFinder />);

        const textBox = await screen.findByRole("textbox", { name: /Type/ });

        userEvent.type(textBox, "washing");

        expect(await screen.findByText("was")).toBeInTheDocument();
        expect(screen.getByText("h")).toBeInTheDocument();
        expect(screen.getByText("ing")).toBeInTheDocument();
    });

    it("should should fetch a randm word when the user deletes the textbox content", async () => {
        render(<CharFinder />);

        const textBox = await screen.findByRole("textbox", { name: /Type/ });

        userEvent.type(textBox, "washing");

        expect(await screen.findByText("was")).toBeInTheDocument();
        expect(screen.getByText("h")).toBeInTheDocument();
        expect(screen.getByText("ing")).toBeInTheDocument();

        userEvent.clear(textBox);

        expect(await screen.findByText("te")).toBeInTheDocument();
        expect(screen.getByText("st")).toBeInTheDocument();
        expect(screen.getByText("er")).toBeInTheDocument();
    });
});
