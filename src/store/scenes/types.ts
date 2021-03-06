export interface Section {
  id: number;
  name: string;
  component: string;
  ref: string;
  active: boolean;
}

export interface Scene {
  id: number;
  name: string;
  sections: Section[];
}

export interface UserScenes {
  id: number;
  username: string;
  scenes: Scene[];
}
