export default function Tags({ tags }) {
  return (
    <div className="">
      <p className="">
        Tagged
        {tags.edges.map((tag, index) => (
          <span key={index} className="">
            {tag.node.name}
          </span>
        ))}
      </p>
    </div>
  )
}
