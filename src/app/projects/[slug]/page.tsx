import Image from 'next/image'
import { notFound } from 'next/navigation'
import projectsData from '@/data/projects-data.json'

interface PageProps {
  params: {
    slug: string
  }
}

export default function ProjectDetail({ params }: PageProps) {
  const project = projectsData.find((p) => p.id === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-3 sm:px-4 py-8 sm:py-16">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">{project.title}</h1>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-secondary bg-opacity-10 text-secondary px-4 py-2 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="relative h-48 sm:h-64 md:h-96 mb-6 sm:mb-8 rounded-lg overflow-hidden bg-gray-200">
        <Image
          src={project.screenshot}
          alt={project.title}
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      <div className="prose max-w-none mb-12">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-lg text-gray-700 mb-8">{project.fullDescription}</p>

        <h2 className="text-2xl font-bold mb-4">Technical Decisions</h2>
        <ul className="space-y-3 mb-8">
          {project.technicalDecisions.map((decision, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">{decision}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold mb-4">Future Improvements</h2>
        <ul className="space-y-3 mb-8">
          {project.futureImprovements.map((improvement, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">{improvement}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-3 sm:gap-6 flex-col sm:flex-row">
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition text-center"
          >
            View Live Demo
          </a>
        )}
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition text-center"
          >
            View on GitHub
          </a>
        )}
      </div>
    </div>
  )
}
