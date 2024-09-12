import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";

const projects = [
  {
    name: "Graph API",
    initials: "GA",
    href: "#",
    members: 16,
    bgColor: "bg-pink-600",
    isPinned: true
  },
  {
    name: "Component Design",
    initials: "CD",
    href: "#",
    members: 12,
    bgColor: "bg-purple-600",
    isPinned: true
  },
  {
    name: "Templates",
    initials: "T",
    href: "#",
    members: 16,
    bgColor: "bg-yellow-500",
    isPinned: false
  },
  {
    name: "React Components",
    initials: "RC",
    href: "#",
    members: 8,
    bgColor: "bg-green-500",
    isPinned: true
  }
];
const isPin=projects.filter((project)=>{
  return project.isPinned
})
console.log(isPin)
// Yalnızca pinli projeleri görüntülemek için filter ve map kullanın
export default function PinnedProjects() {
  return (
    <div className="projects-wrapper">
      <h2 className="projects-title">Pinlenmiş Projeler</h2>
      <ul className="projects-list">
        {isPin.map((pin,index)=>( 

          <li className="project-list-item" key={index}>
          <div className={`project-initials ${pin.bgColor}`}>{pin.initials}</div>
          <div className="project-content-wrapper">
            <div className="project-content">
              <a href="#" className="project-link">
                {pin.name}
              </a>
              <p className="project-members">{pin.members}</p>
            </div>
            <div className="project-button-wrapper">
              <button type="button" className="project-button">
                <EllipsisVerticalIcon className="project-icon" />
              </button>
            </div>
          </div>
        </li>
        ))}
      </ul>
    </div>
  );
}
