export interface Tasks {
  tasks: Task[];
}

export interface Task {
  img: string;
  title: string;
  subtitle: string;
  progress: number;
}

export interface Actions {
  actions: Task[];
}
