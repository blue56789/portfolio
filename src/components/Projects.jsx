import { projects } from "../assets/projects";
export default function Projects() {
  return (
    <div id="projects" className="min-h-screen p-4 pt-16 flex justify-center items-center">
      <div className="max-w-5xl flex flex-col items-center">
        <h2 className="text-7xl font-semibold">Projects</h2>
        <div className="flex flex-wrap mt-8 w-full justify-center">
          {
            projects.map((p, i) =>
              <div key={i} className="flex flex-col w-80 border border-black bg-white shadow-lg rounded-lg m-2 p-4">
                <img src={p.img} alt={`${p.name} screenshot`} className="w-full rounded-md border border-black" />
                <h3 className="text-xl font-semibold py-4 border-b border-border-pr">{p.name}</h3>
                <p className="flex-grow text-ellipsis py-4">{p.description}</p>
                <div className="pt-4 flex justify-center border-t border-border-pr">
                  <div className="bg-green rounded-full overflow-hidden border border-black">
                    <a href={p.github} target="_blank" className="flex justify-center items-center border border-border-pr px-4 py-2 hover:bg-hover-shadow transition-all font-semibold">GitHub</a>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}