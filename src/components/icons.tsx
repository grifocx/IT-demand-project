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
  dashboard: dynamic(dynamicIconImports['layout-dashboard']),
  fileText: dynamic(dynamicIconImports['file-text']),
  folderKanban: dynamic(dynamicIconImports['folder-kanban']),
  users: dynamic(dynamicIconImports.users),
  barChart: dynamic(dynamicIconImports['bar-chart']),
  bell: dynamic(dynamicIconImports.bell),
  user: dynamic(dynamicIconImports.user),
  settings: dynamic(dynamicIconImports.settings),
  logOut: dynamic(dynamicIconImports['log-out']),
  plus: dynamic(dynamicIconImports.plus),
  search: dynamic(dynamicIconImports.search),
  filter: dynamic(dynamicIconImports.filter),
  chevronDown: dynamic(dynamicIconImports['chevron-down']),
  chevronUp: dynamic(dynamicIconImports['chevron-up']),
  chevronLeft: dynamic(dynamicIconImports['chevron-left']),
  chevronRight: dynamic(dynamicIconImports['chevron-right']),
  x: dynamic(dynamicIconImports.x),
  check: dynamic(dynamicIconImports.check),
  alertCircle: dynamic(dynamicIconImports['alert-circle']),
  checkCircle: dynamic(dynamicIconImports['check-circle']),
  xCircle: dynamic(dynamicIconImports['x-circle']),
  info: dynamic(dynamicIconImports.info),
  helpCircle: dynamic(dynamicIconImports['help-circle']),
  externalLink: dynamic(dynamicIconImports['external-link']),
  link: dynamic(dynamicIconImports.link),
  download: dynamic(dynamicIconImports.download),
  upload: dynamic(dynamicIconImports.upload),
  trash: dynamic(dynamicIconImports['trash-2']),
  edit: dynamic(dynamicIconImports['edit-2']),
  copy: dynamic(dynamicIconImports.copy),
  eye: dynamic(dynamicIconImports.eye),
  eyeOff: dynamic(dynamicIconImports['eye-off']),
  mail: dynamic(dynamicIconImports.mail),
  messageSquare: dynamic(dynamicIconImports['message-square']),
  send: dynamic(dynamicIconImports.send),
  paperclip: dynamic(dynamicIconImports.paperclip),
  image: dynamic(dynamicIconImports.image),
  file: dynamic(dynamicIconImports.file),
  fileTextIcon: dynamic(dynamicIconImports['file-text']),
  fileSpreadsheet: dynamic(dynamicIconImports['file-spreadsheet']),
  fileCode: dynamic(dynamicIconImports['file-code']),
  fileArchive: dynamic(dynamicIconImports['file-archive']),
  fileAudio: dynamic(dynamicIconImports['file-audio']),
  fileVideo: dynamic(dynamicIconImports['file-video']),
  filePdf: dynamic(dynamicIconImports['file-pdf']),
  fileWord: dynamic(dynamicIconImports['file-word']),
  fileExcel: dynamic(dynamicIconImports['file-excel']),
  filePowerpoint: dynamic(dynamicIconImports['file-powerpoint']),
  moreHorizontal: dynamic(dynamicIconImports['more-horizontal']),
  moreVertical: dynamic(dynamicIconImports['more-vertical']),
  menu: dynamic(dynamicIconImports.menu),
  grid: dynamic(dynamicIconImports['grid'] || dynamicIconImports['layout-grid']),
  list: dynamic(dynamicIconImports.list),
  columns: dynamic(dynamicIconImports.columns),
  arrowUp: dynamic(dynamicIconImports['arrow-up']),
  arrowDown: dynamic(dynamicIconImports['arrow-down']),
  arrowLeft: dynamic(dynamicIconImports['arrow-left']),
  arrowRight: dynamic(dynamicIconImports['arrow-right']),
  arrowUpRight: dynamic(dynamicIconImports['arrow-up-right']),
  arrowDownRight: dynamic(dynamicIconImports['arrow-down-right']),
  arrowDownLeft: dynamic(dynamicIconImports['arrow-down-left']),
  arrowUpLeft: dynamic(dynamicIconImports['arrow-up-left']),
  move: dynamic(dynamicIconImports.move),
  maximize: dynamic(dynamicIconImports['maximize-2']),
  minimize: dynamic(dynamicIconImports['minimize-2']),
  refreshCw: dynamic(dynamicIconImports['refresh-cw']),
  rotateCcw: dynamic(dynamicIconImports['rotate-ccw']),
  rotateCw: dynamic(dynamicIconImports['rotate-cw']),
  save: dynamic(dynamicIconImports.save),
  share: dynamic(dynamicIconImports['share-2']),
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
  behance: dynamic(dynamicIconImports['behance'] || dynamicIconImports['brand-behance']),
  figma: dynamic(dynamicIconImports.figma),
  trello: dynamic(dynamicIconImports.trello),
  slackIcon: dynamic(dynamicIconImports.slack),
  git: dynamic(dynamicIconImports['git']),
  gitBranch: dynamic(dynamicIconImports['git-branch']),
  gitCommit: dynamic(dynamicIconImports['git-commit']),
  gitMerge: dynamic(dynamicIconImports['git-merge']),
  gitPullRequest: dynamic(dynamicIconImports['git-pull-request']),
  gitCompare: dynamic(dynamicIconImports['git-compare']),
  gitFork: dynamic(dynamicIconImports['git-fork']),
  gitCommitIcon: dynamic(dynamicIconImports['git-commit']),
  gitMergeIcon: dynamic(dynamicIconImports['git-merge']),
  gitPullRequestIcon: dynamic(dynamicIconImports['git-pull-request']),
  gitCompareIcon: dynamic(dynamicIconImports['git-compare']),
  gitForkIcon: dynamic(dynamicIconImports['git-fork']),
  gitBranchIcon: dynamic(dynamicIconImports['git-branch']),
};

export function Icon({ name, size = defaultSize, ...props }: IconProps) {
  const LucideIcon = Icons[name];
  return <LucideIcon size={size} {...props} />;
}
