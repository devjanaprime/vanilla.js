let clicked = () => {
    let element = getEl();
    console.log( 'you clicked:', element );
    console.log( element.getAttribute( 'id' ) );
    console.log( element.getAttribute( 'data' ) );
} // end clicked

let movies = [
    {
        title: 'The Matrix',
        year: 1999,
        director: 'The Wachowskis',
        starring:  [ 'Keanu Reeves', 'Carrie Ann Moss', 'Lawrence Fishburn' ]
    },
    {
        title: 'A Star is Born',
        year: 2018,
        director: 'Bradley Cooper',
        starring: [ 'Bradley Cooper', 'Lady Gaga', 'Sam Elliot' ]
    },
    {
        title: 'Big Lebowski',
        year: 1998,
        director: 'Cohen Brothers',
        starring: [ 'Jeff Bridges', 'John Goodman', 'Steve Buscemi', 'Flea' ]
    },
    {
        title: 'Legally Blonde',
        year: 2001,
        director: 'Robert Luketic',
        starring: [ 'Reese Witherspoon', 'Luke Wilson' ]
    },
    {
        title: 'Space Jam',
        year: 1996,
        director: 'Joe Poiefg',
        starring: [ 'Michael Jordan', 'Bugs Bunny', 'Charles barkley' ]
    },
    {
        title: 'Fargo',
        year: 1996,
        director: 'Cohen Brothers',
        starring: [ 'William H Macy', 'Steve Buscemi', 'Francis McDormand' ]
    },
    {
        title: 'Airforce One',
        year: 1997,
        director: 'Wolfgang Peterson',
        starring: [ 'Harrison Ford', 'Harrison Ford', 'Harrison Ford' ]
    }
];