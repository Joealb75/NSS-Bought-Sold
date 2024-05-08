import { useState } from "react"
import { getAllArticles } from "../../services/articleService.js"


export const BlogHome = () => {

    const [allArticles, setAllArticles] = useState()

    return (
        <>
            <section className="">

            </section>
                {/* Announcement / picture / article */}

            <section>
                {/* tool bar to filter articles by category  */}
            </section>

            <section>

            </section>
        </>
    )
}