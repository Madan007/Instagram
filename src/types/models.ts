export interface IPost {
  id: string;
  createdAt: string | number;
  image?: string;
  images?: string[];
  video?: string;
  description: string;
  user: IUser;
  noOfComments: number;
  noOfLikes: number;
  comments: IComment[];
}

export interface IUser {
  id: string;
  username: string;
  image?: string;
  name?: string;
  bio?: string;
  posts?: IPost[];
  website?: string;
}

export interface IComment {
  id: string;
  comment: string;
  user: IUser;
}

export interface IProfilePost {
  id: string;
  createdAt: string;
  images?: string[];
  image?: string;
  description: string;
}

export interface IProfile {
  user: {
    id: string;
    image: string;
    name: string;
    bio: string;
    username: string;
    posts: IProfilePost[];
  };
}
