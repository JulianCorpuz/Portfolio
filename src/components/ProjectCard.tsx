'use client'

import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
  id: string
  title: string
  description: string
  technologies: string[]
  screenshot: string
  githubLink: string
}

export default function ProjectCard({
  id,
  title,
  description,
  technologies,
  screenshot,
  githubLink,
}: ProjectCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
      <div className="relative h-48 bg-gray-200">
        <Image
          src={screenshot}
          alt={title}
          fill
          className="object-cover"
          unoptimized
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">
          <Link href={`/projects/${id}`} className="hover:text-secondary transition">
            {title}
          </Link>
        </h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="bg-secondary bg-opacity-10 text-secondary px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <Link
            href={`/projects/${id}`}
            className="text-secondary hover:underline font-semibold"
          >
            View Details →
          </Link>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-primary font-semibold"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}
