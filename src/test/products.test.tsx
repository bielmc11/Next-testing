import PageId from "@/app/raro/[id]/page"
import "@testing-library/jest-dom"
import { render } from "@testing-library/react"

jest.mock('next/navigation', () => ({
    useParams: () => ({
        get: () => {}
    })
}))

describe('Products', () => {
    it('renders con count id y todo', () => {

        render(<PageId/>)
        
    })
}) 