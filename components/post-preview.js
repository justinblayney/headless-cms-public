import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div>
      <div className="">
        <CoverImage title={title} coverImage={coverImage} slug={slug} />
      </div>
      <h3 className="">
        <Link as={`/contemporary-art-blog/${slug}`} href="/contemporary-art-blog/[slug]">
          <a
            className="hover:underline"
            dangerouslySetInnerHTML={{ __html: title }}
          ></a>
        </Link>
      </h3>
      <div className="date-format">
        <Date dateString={date} />
      </div>
      <div
        className=""
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />
      <Avatar author={author} />
    </div>
  )
}
