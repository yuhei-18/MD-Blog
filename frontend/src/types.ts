export interface CommonType {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserType extends CommonType {
  name: string;
  email: string;
  password: string;
}

export interface PostType extends CommonType {
  text: string;
  author: UserType;
  isPublish: boolean;
}

export interface PostNodeType {
  node: PostType;
}
