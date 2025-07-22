
import User from '#models/user'
import UserDto from '../dtos/user.js'

type TCreateUserProps = {
  fullname: UserDto['fullName'],
  email: UserDto['email'],
  password: UserDto['password']
}

export class UserService {
  public async getUser(id: UserDto['id']) {
    return await User.find(id)
  }

  public async createUser(data:TCreateUserProps) {
    return await User.create({
      fullName: data.fullname,
      email: data.email,
      password: data.password,
    })
  }
  public async getTenant(id: UserDto['id']|undefined){
    const user = await User.find(id)
    return user?.tenant
  }
}