export class User {
  public id: number;
  public name: string;
  public email: string;

  constructor(attrs: Partial<User>) {
    Object.assign(this, attrs);
  }
}
