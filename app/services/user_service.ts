import User from '#models/user'
import { TcreatUserInputs } from '#validators/user'

export class UserService {
  public async getUser(id: string): Promise<User> {
    const user = await User.findOrFail(id)
    return user
  }
  // [fix]correção de TCreateUserProps, melhor chamar pelo validator TcreatUserInputs
  public async createUser(data: TcreatUserInputs) {
    return await User.create({
      fullName: data.fullname,
      email: data.email,
      password: data.password,
    })
  }
  public async getTenant(id: string | undefined) {
    const user = await User.find(id)
    return user?.serialize()
  }
  async listUsers() {}

  async deleteUser() {}

  async findUserById() {}

  async findUserByEmail() {}

  async logout() {}
}
