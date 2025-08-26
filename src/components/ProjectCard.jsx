import { Monitor, Github } from "lucide-react"
import { Tooltip } from "antd"

const TechBadge = ({ name }) => {
  return <span className="px-3 py-1 text-sm font-medium rounded-full bg-[#42446E] text-white">{name}</span>
}

export function ProjectCard({ title, description, imageSrc, technologies, demoUrl, repoUrl }) {
  return (
    <div className=" bg-[#333333] rounded-lg shadow-md overflow-hidden">
      <div className="p-4 h-48 overflow-hidden ">
        <img
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          width={400}
          height={200}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="p-6">
        <h2 className="text-xl lg:text-2xl font-bold mb-2">{title}</h2>
        <Tooltip title={description} placement="top" overlayClassName="max-w-xs" mouseEnterDelay={0.5}>
          <p className="text-white mb-4 line-clamp-3 cursor-help hover:text-gray-300 transition-colors">
            {description}
          </p>
        </Tooltip>

        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>

        <div className="flex items-center gap-4 text-white">
          <a href={demoUrl} className="flex items-center gap-1  hover:text-gray-300">
            <Monitor size={18} />
            <span>Demo</span>
          </a>
          <a href={repoUrl} className="flex items-center gap-1  hover:text-gray-300">
            <Github size={18} />
            <span>Repository</span>
          </a>
        </div>
      </div>
    </div>
  )
}
