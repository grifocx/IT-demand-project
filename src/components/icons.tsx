import { type LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import dynamic from 'next/dynamic';

const defaultSize = 20;

type IconName = keyof typeof dynamicIconImports;

interface IconProps extends Omit<LucideProps, 'ref'> {
  name: IconName;
}

export const Icons = {
  logo: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2v4" />
      <path d="M12 18v4" />
      <path d="M4.93 4.93l2.83 2.83" />
      <path d="M16.24 16.24l2.83 2.83" />
      <path d="M2 12h4" />
      <path d="M18 12h4" />
      <path d="M4.93 19.07l2.83-2.83" />
      <path d="M16.24 7.76l2.83-2.83" />
    </svg>
  ),
  dashboard: dynamic(dynamicIconImports.layoutDashboard),
  fileText: dynamic(dynamicIconImports.fileText),
  folderKanban: dynamic(dynamicIconImports.folderKanban),
  users: dynamic(dynamicIconImports.users),
  barChart: dynamic(dynamicIconImports.barChart),
  bell: dynamic(dynamicIconImports.bell),
  user: dynamic(dynamicIconImports.user),
  settings: dynamic(dynamicIconImports.settings),
  logOut: dynamic(dynamicIconImports.logOut),
  plus: dynamic(dynamicIconImports.plus),
  search: dynamic(dynamicIconImports.search),
  filter: dynamic(dynamicIconImports.filter),
  chevronDown: dynamic(dynamicIconImports.chevronDown),
  chevronUp: dynamic(dynamicIconImports.chevronUp),
  chevronLeft: dynamic(dynamicIconImports.chevronLeft),
  chevronRight: dynamic(dynamicIconImports.chevronRight),
  x: dynamic(dynamicIconImports.x),
  check: dynamic(dynamicIconImports.check),
  alertCircle: dynamic(dynamicIconImports.alertCircle),
  info: dynamic(dynamicIconImports.info),
  calendar: dynamic(dynamicIconImports.calendar),
  clock: dynamic(dynamicIconImports.clock),
  tag: dynamic(dynamicIconImports.tag),
  tags: dynamic(dynamicIconImports.tags),
  externalLink: dynamic(dynamicIconImports.externalLink),
  link: dynamic(dynamicIconImports.link),
  download: dynamic(dynamicIconImports.download),
  upload: dynamic(dynamicIconImports.upload),
  trash: dynamic(dynamicIconImports.trash2),
  edit: dynamic(dynamicIconImports.edit2),
  copy: dynamic(dynamicIconImports.copy),
  eye: dynamic(dynamicIconImports.eye),
  eyeOff: dynamic(dynamicIconImports.eyeOff),
  lock: dynamic(dynamicIconImports.lock),
  mail: dynamic(dynamicIconImports.mail),
  messageSquare: dynamic(dynamicIconImports.messageSquare),
  send: dynamic(dynamicIconImports.send),
  paperclip: dynamic(dynamicIconImports.paperclip),
  image: dynamic(dynamicIconImports.image),
  file: dynamic(dynamicIconImports.file),
  fileTextIcon: dynamic(dynamicIconImports.fileText),
  fileSpreadsheet: dynamic(dynamicIconImports.fileSpreadsheet),
  fileCode: dynamic(dynamicIconImports.fileCode),
  fileArchive: dynamic(dynamicIconImports.fileArchive),
  fileAudio: dynamic(dynamicIconImports.fileAudio),
  fileVideo: dynamic(dynamicIconImports.fileVideo),
  filePdf: dynamic(dynamicIconImports.filePdf),
  fileWord: dynamic(dynamicIconImports.fileWord),
  fileExcel: dynamic(dynamicIconImports.fileExcel),
  filePowerpoint: dynamic(dynamicIconImports.filePowerpoint),
  moreHorizontal: dynamic(dynamicIconImports.moreHorizontal),
  moreVertical: dynamic(dynamicIconImports.moreVertical),
  menu: dynamic(dynamicIconImports.menu),
  grid: dynamic(dynamicIconImports.grid),
  list: dynamic(dynamicIconImports.list),
  columns: dynamic(dynamicIconImports.columns),
  arrowUp: dynamic(dynamicIconImports.arrowUp),
  arrowDown: dynamic(dynamicIconImports.arrowDown),
  arrowLeft: dynamic(dynamicIconImports.arrowLeft),
  arrowRight: dynamic(dynamicIconImports.arrowRight),
  arrowUpRight: dynamic(dynamicIconImports.arrowUpRight),
  arrowDownRight: dynamic(dynamicIconImports.arrowDownRight),
  arrowDownLeft: dynamic(dynamicIconImports.arrowDownLeft),
  arrowUpLeft: dynamic(dynamicIconImports.arrowUpLeft),
  move: dynamic(dynamicIconImports.move),
  maximize: dynamic(dynamicIconImports.maximize2),
  minimize: dynamic(dynamicIconImports.minimize2),
  refreshCw: dynamic(dynamicIconImports.refreshCw),
  rotateCcw: dynamic(dynamicIconImports.rotateCcw),
  rotateCw: dynamic(dynamicIconImports.rotateCw),
  save: dynamic(dynamicIconImports.save),
  share: dynamic(dynamicIconImports.share2),
  shield: dynamic(dynamicIconImports.shield),
  star: dynamic(dynamicIconImports.star),
  sun: dynamic(dynamicIconImports.sun),
  moon: dynamic(dynamicIconImports.moon),
  zap: dynamic(dynamicIconImports.zap),
  github: dynamic(dynamicIconImports.github),
  gitlab: dynamic(dynamicIconImports.gitlab),
  slack: dynamic(dynamicIconImports.slack),
  twitter: dynamic(dynamicIconImports.twitter),
  facebook: dynamic(dynamicIconImports.facebook),
  instagram: dynamic(dynamicIconImports.instagram),
  linkedin: dynamic(dynamicIconImports.linkedin),
  youtube: dynamic(dynamicIconImports.youtube),
  twitch: dynamic(dynamicIconImports.twitch),
  dribbble: dynamic(dynamicIconImports.dribbble),
  behance: dynamic(dynamicIconImports.behance),
  figma: dynamic(dynamicIconImports.figma),
  trello: dynamic(dynamicIconImports.trello),
  slackIcon: dynamic(dynamicIconImports.slack),
  git: dynamic(dynamicIconImports.git),
  gitBranch: dynamic(dynamicIconImports.gitBranch),
  gitCommit: dynamic(dynamicIconImports.gitCommit),
  gitMerge: dynamic(dynamicIconImports.gitMerge),
  gitPullRequest: dynamic(dynamicIconImports.gitPullRequest),
  gitCompare: dynamic(dynamicIconImports.gitCompare),
  gitFork: dynamic(dynamicIconImports.gitFork),
  gitCommitIcon: dynamic(dynamicIconImports.gitCommit),
  gitMergeIcon: dynamic(dynamicIconImports.gitMerge),
  gitPullRequestIcon: dynamic(dynamicIconImports.gitPullRequest),
  gitCompareIcon: dynamic(dynamicIconImports.gitCompare),
  gitForkIcon: dynamic(dynamicIconImports.gitFork),
  gitBranchIcon: dynamic(dynamicIconImports.gitBranch),
};

export function Icon({ name, size = defaultSize, ...props }: IconProps) {
  const LucideIcon = Icons[name];
  return <LucideIcon size={size} {...props} />;
}
