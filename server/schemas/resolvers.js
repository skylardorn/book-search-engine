const { Users, books, author } = require('../models');

const resolvers = {
  Query: {
    Users: async () => {
      return await Users.find({}).populate('books').populate({
        path: 'books',
        populate: 'author'
      });
    },
    books: async () => {
      return await Class.find({}).populate('author');
    },
    authors: async () => {
      // Populate the books subdocument on every instance of Author
      return await Author.find({}).populate('books');
    }
  },
  Mutation: {
    addUsers: async (parent, { name, location, bookCount }) => {
      return await Users.create({ name, location, bookCount });
    },
    updateBooks: async (parent, { id, author }) => {
      // Find and update the matching class using the destructured args
      return await Class.findOneAndUpdate(
        { _id: id }, 
        { bookCount },
        // Return the newly updated object instead of the original
        { new: true }
      );
    }
  }
};

module.exports = resolvers;