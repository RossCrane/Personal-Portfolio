import '../css/Projects.css';

import { featuredApps } from '../Util/ProjectsData';
import ProjectItem from './ProjectItem';

function Projects() {
	return (
		<div
			className="Projects"
			id="projects"
			style={{ backgroundColor: 'var(--accent-background)' }}
		>
			<h2>Featured Projects</h2>
			<div className="project-item-container">
				{featuredApps.map((app) => {
					return <ProjectItem props={app} key={app.id} />;
				})}
			</div>
		</div>
	);
}

export default Projects;
