export default interface IClip {
  id?: string;
  userId: string;
  displayName: string;
  title: string;
  fileName: string;
  url: string;
  screenshotUrl: string;
  screenshotFileName: string;
  createdAt: string;  // ISO date string
}
