import { render, screen } from '@testing-library/react'
import Post from '../Post'

it('should render the title', () => {
  const simplePost = { _id: '1', title: 'title', contentMarkdown: 'content' }
  render(<Post post={simplePost} />)
  expect(screen.getByText(simplePost.title)).toBeInTheDocument()
})

it('should render the body with markdown', () => {
  const normalPart = 'This is a normal part'
  const boldPart = 'This is a bold part'
  const simplePost = {
    _id: '1',
    title: 'title',
    contentMarkdown: `${normalPart} content with *markdown* **${boldPart}**`,
  }
  render(<Post post={simplePost} />)
  const postElement = screen.getByText(normalPart, { exact: false })
  expect(postElement).toBeInTheDocument()
  expect(postElement.children).toHaveLength(2)
  expect(screen.getByText(boldPart)).toBeInTheDocument()
})
