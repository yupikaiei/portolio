
export function load({ locals, params }) {
    const projectId = params.id;
    const projects = locals.projects;

    const project = projects.find((project) => {
        return project.id === projectId
    })

    return {
        project: project
    }
}