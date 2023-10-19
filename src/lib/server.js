import { Client } from "@notionhq/client";
import { env } from "$env/dynamic/private"

const notion = new Client({
    auth: env.NOTION_KEY,
})

export async function getProjects() {
    const response = await notion.databases.query({
        database_id: "204ab82483df414491246ff71d249ad8",
        filter: {
            property: "Featured",
            checkbox: {
                equals: true
            }
        },
    })

    return response.results
}