import fs from 'fs'
import path from 'path'

type BaseMetadata = {
  title: string
  summary: string
  color: string
  link?: string
  hidden?: string
  gradientColors?: string
}

export type WorkMetadata = BaseMetadata & {
  order: number
  role: string
  years: string
  logo: string
}

export type ProjectMetadata = BaseMetadata & {
  date: string
  link: string
  heroImage?: string
  previewImage?: string
  heroBackground?: string
}

function parseFrontmatter<T>(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  let match = frontmatterRegex.exec(fileContent)
  let frontMatterBlock = match![1]
  let content = fileContent.replace(frontmatterRegex, '').trim()
  let frontMatterLines = frontMatterBlock.trim().split('\n')
  let metadata: Record<string, string> = {}

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(': ')
    let value = valueArr.join(': ').trim()
    value = value.replace(/^['"]?(.*)['"]$/, '$1') // Remove quotes
    metadata[key.trim()] = value
  })

  return { metadata: metadata as T, content }
}

function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

function readMDXFile<T>(filePath: string) {
  let rawContent = fs.readFileSync(filePath, 'utf-8')
  return parseFrontmatter<T>(rawContent)
}

function getMDXData<T>(dir: string) {
  let mdxFiles = getMDXFiles(dir)
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile<T>(path.join(dir, file))
    let slug = path.basename(file, path.extname(file))

    return {
      metadata,
      slug,
      content,
    }
  })
}

export function getWorkPosts() {
  return getMDXData<WorkMetadata>(
    path.join(process.cwd(), 'app', 'portfolio', 'work'),
  )
}

export function getProjectPosts() {
  return getMDXData<ProjectMetadata>(
    path.join(process.cwd(), 'app', 'portfolio', 'projects'),
  )
}

export function formatDate(date: string, includeRelative = false) {
  let currentDate = new Date()
  if (!date.includes('T')) {
    date = `${date}T00:00:00`
  }
  let targetDate = new Date(date)

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth()
  let daysAgo = currentDate.getDate() - targetDate.getDate()

  let formattedDate = ''

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`
  } else {
    formattedDate = 'Today'
  }

  let fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  if (!includeRelative) {
    return fullDate
  }

  return `${fullDate} (${formattedDate})`
}
