import { IRoomMeta, IRoomConfig } from './contracts';

export interface RoomConfig extends IRoomConfig {
  Color: string;
}

export interface RoomState extends IRoomMeta {
  Id: string;
  Name: string;
  Config?: RoomConfig;
}
