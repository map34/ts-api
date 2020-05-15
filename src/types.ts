import { Model, ModelCtor } from 'sequelize';

export interface ModelsMap {
  [modelName: string]: ModelCtor<Model>;
}

export type BaseModel = typeof Model & {
  associate: (models: ModelsMap) => void;
};

export interface UserModel extends BaseModel {
  getUserByLogin: (username: string) => void;
}

export interface FileModel extends BaseModel {
  getFiles: (username: String) => void;
}
