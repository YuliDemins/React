export enum ErrorName {
  field = 'This field is required',
  name = 'The first letter must be capitalized and more 1 letter',
  country = 'Choose the country',
  birthday = 'Choose the correct date',
  image = 'Choose the file .png, .jpg or .webp',
  gender = 'Choose the gender',
  agree = 'must be chosen',
}

export enum Countries {
  Russia = 'Russia',
  Spain = 'Spain',
  France = 'France',
}

export interface IFormValues {
  id: string;
  name: string;
  country: Countries;
  birthday: string;
  image: FileList;
  gender: string;
  agree: boolean;
}

export interface IFormData {
  id: string;
  name: string;
  country: Countries;
  birthday: string;
  image: string;
  gender: string;
  agree: boolean;
}
