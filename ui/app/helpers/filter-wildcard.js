import { helper as buildHelper } from '@ember/component/helper';

export function filterWildcard([string, array]) {
  if (!string) {
    return;
  }
  if (!string.id && string) {
    string = { id: string };
  }
  let stringId = string.id;
  const filterBy = stringId =>
    array.filter(item => new RegExp('^' + stringId.replace(/\*/g, '.*') + '$').test(item));
  return filterBy(stringId).length;
}

export default buildHelper(filterWildcard);
