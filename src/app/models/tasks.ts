import {User} from './user';

export class Tasks {
  idTask: number;
  description: string;
  statustype: string;
  storypoint: number;
  startDate: string;
  endDate: string;
  timeSpent: number;
  user: User[];
}
