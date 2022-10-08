

// TODO create grid projects

export default function Grids ({ projects }) {
    return (
        <ul>
            {projects.map((projects) => (
                <li key={projects.id}>{projects.title}</li>
            ))}
        </ul>
    )
}

// TODO create data projects

export async function getStaticProps() {
    const projects = await (await fetch('https://example.com/posts'))?.json()
    return {
        props: {
            projects
        }
    }
}