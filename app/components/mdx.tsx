import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { highlight } from 'sugar-high'
import React from 'react'
import ArrowIcon from './arrow'

function Table({ data }) {
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ))
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ))

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

function CustomLink(props) {
  let href = props.href

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return <a {...props} />
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />
}

function Code({ children, ...props }) {
  let codeHTML = highlight(children)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
}

function createHeading(level) {
  const Heading = ({ children }) => {
    let slug = slugify(children)
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        }),
      ],
      children,
    )
  }

  Heading.displayName = `Heading${level}`

  return Heading
}

function RichLink({
  title,
  subtitle,
  link,
  image,
  imageAlt,
}: {
  title: string
  subtitle?: string
  link: string
  image: string
  imageAlt?: string
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="rich-link-content !no-underline !text-inherit flex flex-col overflow-hidden rounded-xl bg-neutral-100 transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-700 dark:bg-neutral-800"
    >
      {/* <Image
            src={require(`app/${image}`).default}
            alt={title}
            className="rich-link-image"
          /> */}
      <img
        src={image}
        alt={imageAlt ?? title}
        width={640}
        height={360}
        className="w-full"
      />
      <div className="flex items-start justify-between gap-2 rich-link-details leading-snug p-4">
        <div>
          <strong className="text-md !m-0 font-bold text-neutral-800 dark:text-neutral-200 block">
            {title}
          </strong>
          {subtitle && (
            <small className="text-sm dark:text-neutral-400 text-neutral-600 !m-0">
              {subtitle}
            </small>
          )}
        </div>
        <ArrowIcon className="flex-shrink-0" />
      </div>
    </a>
  )
}

let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  Table,
  RichLink,
}

export function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
