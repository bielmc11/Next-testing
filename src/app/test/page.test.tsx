import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Page from "../page"

describe('Page', () => {
    it('renders heading', () => {
        render(<Page/>)

        const heading = screen.getByRole('heading', {level: 1})

        expect(heading).toBeInTheDocument()
    })
})

describe('Probando Jest', () =>{
    it('Excepciones de errores', () => {
        function foo() {
            throw new Error('foo')
        }

        expect(foo).toThrow(Error)
        expect(() => foo()).toThrow(Error)
    })
})

