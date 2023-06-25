import Concept from './Concept';

function Concepts(props) {
    return (
        <ul id="concepts">
            {
                props.concepts.map(concept => {
                    return (
                    <Concept image={concept.image} title={concept.title} description={concept.description}></Concept>
                    )
                })
            }
        </ul>
    );
}

export default Concepts;