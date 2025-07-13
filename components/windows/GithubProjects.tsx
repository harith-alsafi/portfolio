"use client"

import { useState, useEffect } from "react"
import { FaFolder, FaHtml5, FaJs, FaReact, FaGithub, FaExternalLinkAlt, FaTimes, FaSpinner } from "react-icons/fa"

interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage?: string | null
  language: string | null
  topics: string[]
  stargazers_count: number
  forks_count: number
  updated_at: string
  fork: boolean
  private: boolean
  has_pages: boolean
  owner: {
    login: string
  }
}

interface Project {
  id: number
  title: string
  description: string
  type: string
  techStack: string[]
  url: string
  live?: string
  stars: number
  forks: number
  lastUpdated: string
  isPrivate: boolean
  isFork: boolean
  hasPages: boolean
  readme?: string
}

const getFileIcon = (language: string) => {
  switch (language?.toLowerCase()) {
    case "html":
    case "css":
      return FaHtml5
    case "javascript":
    case "typescript":
      return FaJs
    case "react":
    case "jsx":
    case "tsx":
      return FaReact
    default:
      return FaFolder
  }
}

const detectProjectType = (language: string, topics: string[]) => {
  if (topics.includes('mobile') || topics.includes('react-native') || topics.includes('flutter')) {
    return 'mobile'
  }
  if (topics.includes('web') || language === 'HTML' || language === 'CSS' || language === 'JavaScript' || language === 'TypeScript') {
    return 'web'
  }
  if (topics.includes('desktop') || language === 'Python' || language === 'Java' || language === 'C++') {
    return 'desktop'
  }
  return 'web' // default
}

export default function GithubProjects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  
  // Hardcoded GitHub credentials - Replace with your actual values
  const GITHUB_USERNAME = "harith-alsafi" // Replace with your GitHub username
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN // Replace with your GitHub personal access token

  useEffect(() => {
    fetchGitHubProjects()
  }, [])

  const fetchReadmeContent = async (repo: GitHubRepo): Promise<string | undefined> => {
    try {
      const readmeUrl = `https://api.github.com/repos/${repo.owner.login}/${repo.name}/readme`
      const response = await fetch(readmeUrl, {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'Authorization': `token ${GITHUB_TOKEN}`,
          'User-Agent': 'GitHub-Projects-App'
        }
      })

      if (response.ok) {
        const data = await response.json()
        // Decode base64 content
        const readmeContent = atob(data.content)
        return readmeContent
      }
    } catch (error) {
      console.log(`Failed to fetch README for ${repo.name}:`, error)
    }
    return undefined
  }

  const fetchGitHubProjects = async () => {
    try {
      setLoading(true)
      setError(null)
      
      // Prepare headers for API request
      const headers: HeadersInit = {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': `token ${GITHUB_TOKEN}`,
        'User-Agent': 'GitHub-Projects-App'
      }
      
      // Fetch all repositories (private and public)
      const apiUrl = `https://api.github.com/user/repos?sort=updated&per_page=100&type=all`
      
      const response = await fetch(apiUrl, { headers })
      
      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Invalid GitHub token')
        } else if (response.status === 403) {
          throw new Error('API rate limit exceeded')
        }
        throw new Error(`GitHub API error: ${response.status}`)
      }
      
      const repos: GitHubRepo[] = await response.json()
      
      // Fetch README content for each repository
      const projectsWithReadme = await Promise.all(
        repos.filter(r => !r.private).map(async (repo) => {
          const readme = await fetchReadmeContent(repo)
          
          // Determine live URL (priority: homepage > GitHub Pages > null)
          let liveUrl = repo.homepage || undefined
          
          // Check for GitHub Pages if no homepage is set
          if (!liveUrl && repo.has_pages) {
            liveUrl = `https://${repo.owner.login}.github.io/${repo.name}`
          }
          
          return {
            id: repo.id,
            title: repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
            description: repo.description || 'No description available',
            type: detectProjectType(repo.language || '', repo.topics),
            techStack: [repo.language, ...repo.topics].filter(Boolean),
            url: repo.html_url,
            live: liveUrl,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            lastUpdated: new Date(repo.updated_at).toLocaleDateString(),
            isPrivate: repo.private,
            isFork: repo.fork,
            hasPages: repo.has_pages,
            readme: readme
          }
        })
      )
      
      setProjects(projectsWithReadme)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch projects')
    } finally {
      setLoading(false)
    }
  }

  const openProject = (project: Project) => {
    setSelectedProject(project)
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  const handleUsernameSubmit = () => {
    fetchGitHubProjects()
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <FaSpinner className="animate-spin text-2xl text-blue-600 mr-3" />
        <span className="text-lg">Loading GitHub projects...</span>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-b from-gray-100 to-gray-200 border-2 border-gray-400 border-t-gray-200 border-l-gray-200 p-3 rounded">
        <h2 className="text-lg font-bold">GitHub Projects Directory</h2>
        <p className="text-sm text-gray-700">All repositories loaded automatically - Click to view details</p>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          Error: {error}
        </div>
      )}

      {/* Project Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {projects.map((project) => {
          const IconComponent = getFileIcon(project.techStack[0])
          return (
            <button
              key={project.id}
              onClick={() => openProject(project)}
              className="p-4 bg-gradient-to-b from-gray-50 to-gray-100 border-2 border-gray-300 border-t-gray-100 border-l-gray-100 hover:from-gray-100 hover:to-gray-200 transition-all duration-150 group rounded shadow-sm"
            >
              <div className="flex flex-col items-center space-y-2">
                <IconComponent className="text-3xl text-blue-600 group-hover:text-blue-800 transition-colors" />
                <span className="text-xs text-center font-semibold leading-tight text-gray-800">
                  {project.title}
                  {project.isPrivate && <span className="ml-1 text-red-500">🔒</span>}
                  {project.isFork && <span className="ml-1 text-yellow-500">🍴</span>}
                </span>
                <span className="text-xs text-gray-500">.{project.type}</span>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>⭐ {project.stars}</span>
                  <span>🍴 {project.forks}</span>
                  {project.hasPages && <span>📄</span>}
                </div>
              </div>
            </button>
          )
        })}
      </div>

      {projects.length === 0 && !loading && !error && (
        <div className="text-center py-8 text-gray-500">
          <p>No projects found. Please check your GitHub credentials.</p>
        </div>
      )}

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-b from-gray-100 to-gray-200 border-2 border-gray-400 border-t-gray-200 border-l-gray-200 w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-lg shadow-2xl">
            {/* Modal Header */}
            <div className="bg-gradient-to-b from-blue-400 to-blue-600 text-white px-3 py-2 flex items-center justify-between rounded-t-lg">
              <span className="font-bold text-sm">{selectedProject.title} - Properties</span>
              <button
                onClick={closeModal}
                className="w-6 h-6 bg-gradient-to-b from-red-400 to-red-600 border border-red-700 border-t-red-300 border-l-red-300 rounded flex items-center justify-center hover:from-red-500 hover:to-red-700 transition-all duration-150"
              >
                <FaTimes className="text-xs text-white" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 flex items-center gap-2">
                  {selectedProject.title}
                  {selectedProject.isPrivate && <span className="text-red-500 text-sm">🔒 Private</span>}
                  {selectedProject.isFork && <span className="text-yellow-500 text-sm">🍴 Fork</span>}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">{selectedProject.description}</p>
                <div className="mt-2 flex items-center gap-4 text-sm text-gray-600">
                  <span>⭐ {selectedProject.stars} stars</span>
                  <span>🍴 {selectedProject.forks} forks</span>
                  <span>📅 Updated: {selectedProject.lastUpdated}</span>
                  {selectedProject.hasPages && <span>📄 GitHub Pages</span>}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-blue-800 mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gradient-to-b from-blue-100 to-blue-200 border border-blue-300 text-xs font-mono rounded shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {selectedProject.readme && (
                <div>
                  <h4 className="font-bold text-blue-800 mb-2">README</h4>
                  <div className="bg-gray-50 border border-gray-300 rounded p-3 max-h-64 overflow-y-auto">
                    <pre className="text-xs text-gray-700 whitespace-pre-wrap font-mono">
                      {selectedProject.readme.substring(0, 2000)}
                      {selectedProject.readme.length > 2000 && '...'}
                    </pre>
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-3">
                {selectedProject.url && (
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-b from-gray-200 to-gray-400 border-2 border-gray-500 border-t-gray-100 border-l-gray-100 hover:from-gray-300 hover:to-gray-500 transition-all duration-150 rounded shadow-sm"
                  >
                    <FaGithub />
                    <span className="text-sm font-semibold">GitHub</span>
                  </a>
                )}
                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-b from-blue-200 to-blue-400 border-2 border-blue-500 border-t-blue-100 border-l-blue-100 hover:from-blue-300 hover:to-blue-500 transition-all duration-150 rounded shadow-sm"
                  >
                    <FaExternalLinkAlt />
                    <span className="text-sm font-semibold text-white">Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}