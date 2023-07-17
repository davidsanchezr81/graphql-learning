const { UserList, MovieList } = require('./FakeData');
const _ = require("lodash");

// this object is called the resolver map
const resolvers = {
    Query: {
        //User resolvers
        users: () => {
            return UserList;
        },
        user: (parent, args) => {
            const id = args.id;
            const user = _.find(UserList, {id: Number(id)});
            return user;
        },
        // Movie resolvers
        movies: () => {
            return MovieList;
        },
        movie: () => {
            const name = args.name;
            const movie = _.find(MovieList, {name});
            return movie;
        }
     },

     User: {
        favoriteMovies: () => {
            return _.filter(MovieList, (movie) => {
                movie.yearOfPublication >= 2020 && movie.yearOfPublication <= 2025;
            })
        }
     }
}

module.exports = { resolvers };