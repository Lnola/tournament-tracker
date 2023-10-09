import { addMethod, object, string, array, number } from 'yup';

addMethod(
  array,
  'unique',
  function (message: string, mapper = (a: unknown) => a) {
    return this.test('unique', message, function (list) {
      return list?.length === new Set(list?.map(mapper)).size;
    });
  },
);

export { object, string, array, number };
