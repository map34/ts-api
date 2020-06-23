
import {
  Model,
  User,
  File
} from '../models';

export const executeDBTransaction = async () => {
  const file1 = new File();
  file1.description = 'This is a file';
  file1.sha256 = '12342124';
  file1.sizeBytes = 899;

  await Model.getConnection().manager.save(file1);

  const user = new User();
  user.username = 'prananda0203@gmail.com';
  user.fileLimit = 123;
  user.files = [file1];
  await Model.getConnection().manager.save(user);

  const foundUser = await Model.getConnection().manager.findOne(User);
  const files = await Model.getConnection().getRepository(File).find({
    where: { user: { id: foundUser.id } }
  });
  console.log(`Loaded files for user: ${foundUser.id}`, files);
};
