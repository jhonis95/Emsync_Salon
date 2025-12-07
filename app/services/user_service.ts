import User from '#models/user'
import { TcreatUserInputs } from '#validators/user'
import UserDto from '../dtos/user.js'

export class UserService {
  public async getUser(id: UserDto['id']) {
    return await User.find(id)
  }
  // [fix]correção de TCreateUserProps, melhor chamar pelo validator TcreatUserInputs
  public async createUser(data: TcreatUserInputs) {
    return await User.create({
      fullName: data.fullname,
      email: data.email,
      password: data.password,
    })
  }
  public async getTenant(id: UserDto['id'] | undefined) {
    const user = await User.find(id)
    return user?.storeData
  }
  async listUsers() {}

  async deleteUser() {}

  async findUserById() {}

  async findUserByEmail() {}

  async logout() {}
}
