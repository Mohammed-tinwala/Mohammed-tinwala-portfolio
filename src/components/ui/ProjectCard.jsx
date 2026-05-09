import React from "react";
import {
  ExternalLink,
  Github,
  TrendingUp,
} from "lucide-react";

const ProjectCard = ({ project }) => {
  const {
    title,
    description,
    image,
    technologies,
    metrics,
    live_url,
    github,
    category,
  } = project;

  // console.log("ProjectCard Props:", project); // Debugging log

  // Convert technologies string into array
  const techArray = technologies
    ? technologies.split(",")
    : [];

  return (
    <div className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover:-translate-y-2">

      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

        {/* Action Buttons */}
        <div className="absolute bottom-4 right-4 flex items-center gap-3">

          {live_url && (
            <a
              href={live_url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-primary/30 hover:border-primary/50 transition-all duration-300 hover:scale-110"
              title="View Live Demo"
            >
              <ExternalLink className="w-4 h-4 text-white" />
            </a>
          )}

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-primary/30 hover:border-primary/50 transition-all duration-300 hover:scale-110"
              title="View GitHub"
            >
              <Github className="w-4 h-4 text-white" />
            </a>
          )}
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-medium text-white bg-black/40 backdrop-blur-sm border border-white/20 rounded-full">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">

        {/* Title + Description */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>

          <p className="text-white/60 text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {techArray.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 border border-primary/20 rounded-lg hover:bg-primary/20 transition-colors duration-200"
            >
              {tech.trim()}
            </span>
          ))}
        </div>

        {/* Metrics */}
        {metrics && (
          <div className="flex items-center gap-2 pt-3 border-t border-white/10">
            <TrendingUp className="w-4 h-4 text-green-400" />

            <p className="text-sm font-medium text-green-400">
              {metrics}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;