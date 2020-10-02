import Avatar from '../avatar'
import Date from '../date'
import Tags from '../tags'
import CoverImage from '../cover-image'
import Link from 'next/link'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  tags,
}) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage slug={slug} title={title} url={coverImage.url} />
      </div>
      <div className="mb-20 md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl leading-tight lg:text-6xl">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 text-lg md:mb-0">
            <Date dateString={date} />
            <Tags tags={tags} />
          </div>
        </div>
        <div>
          <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
          <Avatar name={author.name} picture={author.picture.url} />
        </div>
      </div>
    </section>
  )
}
