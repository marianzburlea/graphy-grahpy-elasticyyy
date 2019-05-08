const { 
    GraphQLSchema, 
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull
} = require('graphql')
const axios = require('axios')

const NameType = new GraphQLObjectType({
    name: 'Names',
    fields: () => ({
        id: {
            type: GraphQLInt
        },
        first: {
            type: GraphQLString
        },
        middle: {
            type: GraphQLString
        },
        last: {
            type: GraphQLString
        }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        names: {
            type: NameType,
            args: {
                id: {
                    type: GraphQLInt
                },
            },
            resolve: (previousValue, {id}) => axios
                .get(`http://localhost:7788/names/${id}`)
                .then(({data}) => data)
        }
    }
})

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        addName: {
            type: NameType,
            args: {
                first: {
                    type: new GraphQLNonNull(GraphQLString)
                },
                middle: {
                    type: GraphQLString
                },
                last: {
                    type: new GraphQLNonNull(GraphQLString)
                }
            },
            resolve: (previousValue, {first, last}) => axios
                .post(`http://localhost:7788/names`, {
                    first,
                    last
                })
                .then(({data}) => {
                    console.log('***********************')
                    console.log(data)
                    return data
                })
        }
    })
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation,
})
