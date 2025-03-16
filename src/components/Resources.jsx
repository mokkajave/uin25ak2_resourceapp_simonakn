import { resources } from '../assets/ressurser';
import PageTitle from './PageTitle';
import "../styles/resources.scss";

export default function Resources({category}) {
    /* Med { slug } ville jeg brukt useParams() for å få tilgang til
    aktuell slug i URL-en. Deretter byttet ut "category" med "slug" 
    i resterende kodelogikk. */

    const filteredCategory = resources.filter((resource) => resource.category === category)
    
    return (
        <>
        <PageTitle category={category} />
        <ul id="links">
            {filteredCategory.map((source, index) => 
                <li key={index}><a href={source.url}>{source.title}</a></li>)}
        </ul>
        </>
    )
}