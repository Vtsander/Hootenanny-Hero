const User = require('../models/User');

const resolvers = {
  Query: {
    async getUserById(parent, { id }) {
      try {
        const user = await User.findById(id);
        return user;
      } catch (err) {
        console.log(err);
      }
    },
    async getAllUsers() {
      try {
        const users = await User.find();
        return users;
      } catch (err) {
        console.log(err);
      }
    },
  },
  Mutation: {
    async createUser(parent, { input }) {
      try {
        const user = new User({
          name: `${input.firstName} ${input.lastName}`,
          email: `${input.email}`,
          password: `${input.password}`,
        });
        await user.save();
        return user;
      } catch (err) {
        console.log(err);
      }
    },
    async updateUser(parent, { id, input }) {
      try {
        const user = await User.findByIdAndUpdate(
          id,
          {
            name: `${input.firstName} ${input.lastName}`,
            email: `${input.email}`,
            password: `${input.password}`,
          },
          { new: true }
        );
        return user;
      } catch (err) {
        console.log(err);
      }
    },
    async deleteUser(parent, { id }) {
      try {
        await User.findByIdAndDelete(id);
        return "User deleted successfully";
      } catch (err) {
        console.log(err);
      }
    },
  },
};

module.exports = resolvers;
