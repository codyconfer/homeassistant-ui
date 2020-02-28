import { IRoomMeta, IRoomConfig } from '../room/contracts';

export interface HomeRoomConfig extends IRoomConfig {
  Color: string;
}

export interface HomeRoomMeta extends IRoomMeta {
  Id: string;
  Name: string;
  Config?: HomeRoomConfig;
}

export interface HomeState {
  Rooms?: HomeRoomMeta[];
}
