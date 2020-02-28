export interface IRoomConfig {
  Color: string;
}

export interface IRoomMeta {
  Id: string;
  Name: string;
  Config?: IRoomConfig;
}
