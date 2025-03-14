import Nav from "./Nav";
import "../styles/layout.scss";

export default function Layout({children}) {
    return (
        <>
        <main>
            <Nav />
            <article>
                {children}
            </article>
        </main>
        </>
    )
}