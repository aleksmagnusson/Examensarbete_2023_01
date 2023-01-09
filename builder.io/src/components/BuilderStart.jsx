import { useEffect, useState } from "react";
import { Builder } from "@builder.io/react";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";

// insert the API key >>
builder.init('796797022a214ab5a522e648e0579eea');
// Account API Key
builder.init('9448fa9badd04667ad16c207f82a34f3');

export default function MyComponent() {
    const [builderContentJson, setBuilderContentJson] = useState(null)

    useEffect(() => {
        builder.get('page', { url: location.pathname })
            .promise().then(setBuilderContentJson)
    }, [])

    return <BuilderComponent model="page" content={builderContentJson} />
}

// Register your components for use in the visual editor!
// https://www.builder.io/blog/drag-drop-react
const Heading = props => (
    <h1 className="my-heading">{props.title}</h1>
)

Builder.registerComponent(Heading, {
    name: 'Heading',
    inputs: [{ name: 'title', type: 'text' }]
})

