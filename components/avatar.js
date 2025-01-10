export default function Avatar({ author }) {
  const name = author
    ? author.firstName && author.lastName
      ? `${author.firstName} ${author.lastName}`
      : author.name
    : null

  return (
    <>
      {author && (
        <div className="">
          <img
            src={author.avatar.url}
            className=""
            alt={name}
          />
          <div className="">{name}</div>
        </div>
      )}
    </>
  )
}
