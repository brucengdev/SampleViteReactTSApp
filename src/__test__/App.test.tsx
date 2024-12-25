import { screen, render } from "@testing-library/react";
import App from "../App";
import {describe, expect, it} from 'vitest'

describe("App", () => {
    it("displays a header", () => {
        render(<App />)

        expect(screen.getByRole("heading", { name: "Vite + React"})).toBeTruthy()
    })
})