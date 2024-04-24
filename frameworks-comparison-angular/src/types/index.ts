export type INavLink = {
  imgURL: string;
  route: string;
  label: string;
};

export type INewPost = {
  creator: {
    userId: string;
    imageUrl: string;
    userName: string;
  };
  caption: string;
  file: File[] | null;
  location?: string;
  tags?: string;
};

export type IPost = {
  userId: string;
  caption: string;
  imageUrl: string;
  likes: any;
  location?: string;
  tags?: string;
  createdAt: string;
  _id: string;
  creator: {
    userId: string;
    imageUrl: string;
    userName: string;
  };
};

export type IUpdatePost = {
  postId: string;
  caption: string;
  imageId: string;
  imageUrl: URL;
  location?: string;
  tags?: string;
};

export type IUser = {
  _id?: string;
  userName: string;
  email?: string;
  imageUrl?: string;
  bio: string;
};

export type INewUser = {
  email: string;
  userName: string;
  password: string;
};
