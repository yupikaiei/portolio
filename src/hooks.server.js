import { getProjects } from '$lib/server';

export async function handle({ event, resolve }) {
    const projects = await getProjects();

    let toolkit = projects.map((page) => {
        return page.properties.Toolkit.multi_select.map((item) => {
            return {
                name: item.name
            }
        })
    })

    // remove duplicates from toolkit
    toolkit = toolkit.flat().filter((item, index, self) =>
        index === self.findIndex((t) => (
            t.name === item.name
        ))
    )

	event.locals = {
        projects: projects,
        toolkit: toolkit
    }

	const response = await resolve(event);
	return response;
}