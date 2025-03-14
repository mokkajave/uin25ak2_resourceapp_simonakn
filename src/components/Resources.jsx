import { resources } from '../assets/ressurser';
import PageTitle from './PageTitle';
import "../styles/resources.scss";

export default function Resources({category}) {
    const filteredCategory = resources.filter((resource) => resource.category === category)
    
    return (
        <>
        <PageTitle category={category}/>
        <ul id="links">
            {filteredCategory.map((source, index) => 
                <li key={index}><a href={source.url}>{source.title}</a></li>)}
        </ul>
        </>
    )
}