export enum Title {
  Mr = 'M.',
  Mrs = 'Mme',
  Ms = 'Mlle',
  Dr = 'Dr',
  Pr = 'Pr'
}

interface PupilInterface {
  firstName: string;
  lastName: string;
  title: Title;
  age: number;
  jobTitle: string;
  address: string;
  phoneNumber: string;
}

const firstNames: string[] = [
  'Jean',
  'Jacques',
  'Marie',
  'Léa',
  'Rick'
];
const lastNames: string[] = [
  'Dupond',
  'Duchêne',
  'Dupont',
  'Leblanc'
];
const jobTitles: string[] = [
  'Développeur·euse',
  'Chef de projet',
  'Architecte',
  'Observateur·trice'
];

export class Pupil implements PupilInterface {
  public firstName: string = firstNames[Math.floor(Math.random() * firstNames.length)];
  public lastName: string = lastNames[Math.floor(Math.random() * lastNames.length)];
  public title: Title = Title[Object.keys(Title)[Math.floor(Math.random() * Object.getOwnPropertyNames(Title).length)]];
  public age: number = Math.floor(18 + (Math.random() * (65 - 18)));
  public jobTitle: string = jobTitles[Math.floor(Math.random() * jobTitles.length)];
  public address: string;
  public phoneNumber: string = '0' + Math.random().toString().slice(2, 11).replace(/^([00])/, '' + Math.round(Math.random() * 10));
  public arrivalDate: Date;
}
