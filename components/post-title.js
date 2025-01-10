export default function PostTitle({ children }) {
  return (
    <h1
      className=""
      dangerouslySetInnerHTML={{ __html: children }}
    />
  )
}
