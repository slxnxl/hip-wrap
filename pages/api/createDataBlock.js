let projects = [
    {
        'name': 'project0',
        'description': 'sample sample sample sample sample sample sample sample sample sample sample '
    },
    {
        'name': 'project1',
        'description': 'sample sample sample sample sample sample sample sample sample sample sample '
    },
    {
        'name': 'project2',
        'description': 'sample sample sample sample sample sample sample sample sample sample sample '
    },
    {
        'name': 'project3',
        'description': 'sample sample sample sample sample sample sample sample sample sample sample '
    },    {
        'name': 'project4',
        'description': 'sample sample sample sample sample sample sample sample sample sample sample '
    }
]

// TODO change test data to fetch data

//function for add custom size props to data projects
//TODO add all case
export async function CreateDataBlock(projects) {
    for (let i in projects) {
        let end = i % 10;
        switch (end) {
            case 0:
                projects[i].flex_size = '0.6'
                break
            case 1:
            case 2:
                projects[i].flex_size = '0.4'
                break
            case 3:
            case 4:
                projects[i].flex_size = '0.2'
                break
            default:
                break
        }
    }
}