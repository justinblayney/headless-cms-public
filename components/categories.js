export default function Categories({ categories }) {
  return (
    <span className="">
      under
      {categories.edges.length > 0 ? (
        categories.edges.map((category, index) => (
          <span key={index} className="ml-1">
            {category.node.name}
          </span>
        ))
      ) : (
        <span className="">{categories.edges.node.name}</span>
      )}
    </span>
  )
}
