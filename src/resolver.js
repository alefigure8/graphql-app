import {tasks} from './sample'

import User from './models/users'

export const resolver = {
    Query: {
        hello: ()=> {
            return 'Hello Wrold con GraphQL'
        },
        greet:(root, {name}, context)=>{
            console.log(context)
            return `hello ${name}`
        },
        tasks: ()=>{
            return tasks
        },
        Users: async () => {
            return await User.find()
            
        }
    },
    Mutation: {
        createTask: (_, {input})=>{
            input._id = tasks.length
            tasks.push(input)
            return tasks
        },
        CreateUser: async (_, {input}) => {
            const newUser = new User(input)
          await newUser.save()
            return newUser
        },
        DeleteUser: async (_, {_id}) => {
            return await User.findByIdAndDelete(_id)
        },
        UpdateUser: async (_, {_id, input}) => {
            return await User.findByIdAndUpdate(_id, input, {new: true})
        }
    }
}