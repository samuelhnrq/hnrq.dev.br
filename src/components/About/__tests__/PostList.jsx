import { render, screen } from '@testing-library/react'
import { usePosts } from '../../../lib/cms/posts'
import PostList from '../PostList'

jest.mock('../../../lib/cms/posts')

function generatePostList(howMany) {
  return [...Array(howMany).keys()].map((i) => ({
    _id: `${i}`,
    title: `title-${i}`,
    contentMarkdown: `content of ${i}`,
  }))
}

it('should render one post', () => {
  const singlePost = generatePostList(1)
  usePosts.mockReturnValue({ data: singlePost, isFetching: false })
  render(<PostList />)
  expect(screen.getByText(singlePost[0].title)).toBeInTheDocument()
})

it('should render multiple posts', () => {
  const posts = generatePostList(2)
  usePosts.mockReturnValue({ data: posts, isFetching: false })
  render(<PostList />)
  expect(screen.getByText(posts[0].title)).toBeInTheDocument()
  expect(screen.getByText(posts[1].title)).toBeInTheDocument()
})

it('should render divisor', () => {
  const posts = generatePostList(2)
  usePosts.mockReturnValue({ data: posts, isFetching: false })
  const { container } = render(<PostList />)
  expect(container.querySelector('hr')).toBeInTheDocument()
})
