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

        // console.log(myPage.results)
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

    let toolkit = myPage.results.map((page) => {
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

    return {
        projects: myPage.results,
        toolkit: toolkit
    }
}
