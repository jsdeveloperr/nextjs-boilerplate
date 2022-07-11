import { render, screen } from '@testing-library/react'
import Input from '../Input/Input'

describe('<Input />', () => {
  it('should render the heading', () => {
    const { container } = render(<Input />)

    expect(screen.getByRole('heading', { name: /Input/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
