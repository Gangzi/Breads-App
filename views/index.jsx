const React = require('react')
const Default = require('./layouts/default')

function Index({breads, title}) {
    return (
        <Default title= {title}>
            <h2>Index Page</h2>
            <div className="newButton">
                <a href="/breads/new"><button>Add a new bread</button></a>
            </div>

            {/* <p>I have {breads[0].name} bread!</p> */}
            {/* This is a JSX comment. */}
            <ul>
                {
                    breads.map((bread, id) => {
                        return (
                            <li key={id}
                            >
                                <a href={`/breads/${bread.id}`}>
                                    {bread.name}</a></li>)
                    })
                }
            </ul>
        </Default>

    )
}

module.exports = Index
