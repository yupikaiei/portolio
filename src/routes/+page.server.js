import { Client } from "@notionhq/client";
import { env } from "$env/dynamic/private"

// Initializing a client
const notion = new Client({
    auth: env.NOTION_KEY,
})

    ; (async () => {
        const myPage = await notion.databases.query({
            database_id: "204ab82483df414491246ff71d249ad8",
            // filter: {
            //     property: "Portfolio",
            //     rich_text: {
            //         contains: "Bridge",
            //     },
            // },
        })

        console.log(myPage.results)
    })()


export async function load() {
    const myPage = await notion.databases.query({
        database_id: "204ab82483df414491246ff71d249ad8",
        filter: {
            property: "Featured",
            checkbox: {
                equals: true
            }
        },
    })

    // console.log(myPage.results)
    const toolkit = myPage.results.map((page) => {
        // console.log(page.properties.Toolkit.rich_text[0].plain_text)
        return { name: page.properties.Toolkit.rich_text[0].plain_text }
    })

    return {
        projects: myPage.results,
        toolkit: toolkit
    }
}
