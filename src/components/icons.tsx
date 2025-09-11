import { type LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import dynamic from 'next/dynamic';

const defaultSize = 20;

/**
 * @description The name of the icon to display.
 */
type IconName = keyof typeof dynamicIconImports;

/**
 * @description The props for the icon component.
 * @param {IconName} name - The name of the icon to display.
 */
interface IconProps extends Omit<LucideProps, 'ref'> {
  name: IconName;
}

/**
 * @description A collection of icons that can be used in the application.
 */
export const Icons = {
  /**
   * @description The logo icon.
   * @param {LucideProps} props - The props for the component.
   * @returns {React.ReactElement} - The logo icon component.
   */
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
  /**
   * @description The dashboard icon.
   */
  dashboard: dynamic(dynamicIconImports['layout-dashboard']),
  /**
   * @description The file text icon.
   */
  fileText: dynamic(dynamicIconImports['file-text']),
  /**
   * @description The folder kanban icon.
   */
  folderKanban: dynamic(dynamicIconImports['folder-kanban']),
  /**
   * @description The users icon.
   */
  users: dynamic(dynamicIconImports.users),
  /**
   * @description The bar chart icon.
   */
  barChart: dynamic(dynamicIconImports['bar-chart']),
  /**
   * @description The bell icon.
   */
  bell: dynamic(dynamicIconImports.bell),
  /**
   * @description The user icon.
   */
  user: dynamic(dynamicIconImports.user),
  /**
   * @description The settings icon.
   */
  settings: dynamic(dynamicIconImports.settings),
  /**
   * @description The log out icon.
   */
  logOut: dynamic(dynamicIconImports['log-out']),
  /**
   * @description The plus icon.
   */
  plus: dynamic(dynamicIconImports.plus),
  /**
   * @description The search icon.
   */
  search: dynamic(dynamicIconImports.search),
  /**
   * @description The filter icon.
   */
  filter: dynamic(dynamicIconImports.filter),
  /**
   * @description The chevron down icon.
   */
  chevronDown: dynamic(dynamicIconImports['chevron-down']),
  /**
   * @description The chevron up icon.
   */
  chevronUp: dynamic(dynamicIconImports['chevron-up']),
  /**
   * @description The chevron left icon.
   */
  chevronLeft: dynamic(dynamicIconImports['chevron-left']),
  /**
   * @description The chevron right icon.
   */
  chevronRight: dynamic(dynamicIconImports['chevron-right']),
  /**
   * @description The x icon.
   */
  x: dynamic(dynamicIconImports.x),
  /**
   * @description The check icon.
   */
  check: dynamic(dynamicIconImports.check),
  /**
   * @description The alert circle icon.
   */
  alertCircle: dynamic(dynamicIconImports['alert-circle']),
  /**
   * @description The check circle icon.
   */
  checkCircle: dynamic(dynamicIconImports['check-circle']),
  /**
   * @description The x circle icon.
   */
  xCircle: dynamic(dynamicIconImports['x-circle']),
  /**
   * @description The info icon.
   */
  info: dynamic(dynamicIconImports.info),
  /**
   * @description The help circle icon.
   */
  helpCircle: dynamic(dynamicIconImports['help-circle']),
  /**
   * @description The external link icon.
   */
  externalLink: dynamic(dynamicIconImports['external-link']),
  /**
   * @description The link icon.
   */
  link: dynamic(dynamicIconImports.link),
  /**
   * @description The download icon.
   */
  download: dynamic(dynamicIconImports.download),
  /**
   * @description The upload icon.
   */
  upload: dynamic(dynamicIconImports.upload),
  /**
   * @description The trash icon.
   */
  trash: dynamic(dynamicIconImports['trash-2']),
  /**
   * @description The edit icon.
   */
  edit: dynamic(dynamicIconImports['edit-2']),
  /**
   * @description The copy icon.
   */
  copy: dynamic(dynamicIconImports.copy),
  /**
   * @description The eye icon.
   */
  eye: dynamic(dynamicIconImports.eye),
  /**
   * @description The eye off icon.
   */
  eyeOff: dynamic(dynamicIconImports['eye-off']),
  /**
   * @description The mail icon.
   */
  mail: dynamic(dynamicIconImports.mail),
  /**
   * @description The message square icon.
   */
  messageSquare: dynamic(dynamicIconImports['message-square']),
  /**
   * @description The send icon.
   */
  send: dynamic(dynamicIconImports.send),
  /**
   * @description The paperclip icon.
   */
  paperclip: dynamic(dynamicIconImports.paperclip),
  /**
   * @description The image icon.
   */
  image: dynamic(dynamicIconImports.image),
  /**
   * @description The file icon.
   */
  file: dynamic(dynamicIconImports.file),
  /**
   * @description The file text icon.
   */
  fileTextIcon: dynamic(dynamicIconImports['file-text']),
  /**
   * @description The file spreadsheet icon.
   */
  fileSpreadsheet: dynamic(dynamicIconImports['file-spreadsheet']),
  /**
   * @description The file code icon.
   */
  fileCode: dynamic(dynamicIconImports['file-code']),
  /**
   * @description The file archive icon.
   */
  fileArchive: dynamic(dynamicIconImports['file-archive']),
  /**
   * @description The file audio icon.
   */
  fileAudio: dynamic(dynamicIconImports['file-audio']),
  /**
   * @description The file video icon.
   */
  fileVideo: dynamic(dynamicIconImports['file-video']),
  /**
   * @description The file pdf icon.
   */
  filePdf: dynamic(dynamicIconImports['file-pdf']),
  /**
   * @description The file word icon.
   */
  fileWord: dynamic(dynamicIconImports['file-word']),
  /**
   * @description The file excel icon.
   */
  fileExcel: dynamic(dynamicIconImports['file-excel']),
  /**
   * @description The file powerpoint icon.
   */
  filePowerpoint: dynamic(dynamicIconImports['file-powerpoint']),
  /**
   * @description The more horizontal icon.
   */
  moreHorizontal: dynamic(dynamicIconImports['more-horizontal']),
  /**
   * @description The more vertical icon.
   */
  moreVertical: dynamic(dynamicIconImports['more-vertical']),
  /**
   * @description The menu icon.
   */
  menu: dynamic(dynamicIconImports.menu),
  /**
   * @description The grid icon.
   */
  grid: dynamic(dynamicIconImports['grid'] || dynamicIconImports['layout-grid']),
  /**
   * @description The list icon.
   */
  list: dynamic(dynamicIconImports.list),
  /**
   * @description The columns icon.
   */
  columns: dynamic(dynamicIconImports.columns),
  /**
   * @description The arrow up icon.
   */
  arrowUp: dynamic(dynamicIconImports['arrow-up']),
  /**
   * @description The arrow down icon.
   */
  arrowDown: dynamic(dynamicIconImports['arrow-down']),
  /**
   * @description The arrow left icon.
   */
  arrowLeft: dynamic(dynamicIconImports['arrow-left']),
  /**
   * @description The arrow right icon.
   */
  arrowRight: dynamic(dynamicIconImports['arrow-right']),
  /**
   * @description The arrow up right icon.
   */
  arrowUpRight: dynamic(dynamicIconImports['arrow-up-right']),
  /**
   * @description The arrow down right icon.
   */
  arrowDownRight: dynamic(dynamicIconImports['arrow-down-right']),
  /**
   * @description The arrow down left icon.
   */
  arrowDownLeft: dynamic(dynamicIconImports['arrow-down-left']),
  /**
   * @description The arrow up left icon.
   */
  arrowUpLeft: dynamic(dynamicIconImports['arrow-up-left']),
  /**
   * @description The move icon.
   */
  move: dynamic(dynamicIconImports.move),
  /**
   * @description The maximize icon.
   */
  maximize: dynamic(dynamicIconImports['maximize-2']),
  /**
   * @description The minimize icon.
   */
  minimize: dynamic(dynamicIconImports['minimize-2']),
  /**
   * @description The refresh cw icon.
   */
  refreshCw: dynamic(dynamicIconImports['refresh-cw']),
  /**
   * @description The rotate ccw icon.
   */
  rotateCcw: dynamic(dynamicIconImports['rotate-ccw']),
  /**
   * @description The rotate cw icon.
   */
  rotateCw: dynamic(dynamicIconImports['rotate-cw']),
  /**
   * @description The save icon.
   */
  save: dynamic(dynamicIconImports.save),
  /**
   * @description The share icon.
   */
  share: dynamic(dynamicIconImports['share-2']),
  /**
   * @description The shield icon.
   */
  shield: dynamic(dynamicIconImports.shield),
  /**
   * @description The star icon.
   */
  star: dynamic(dynamicIconImports.star),
  /**
   * @description The sun icon.
   */
  sun: dynamic(dynamicIconImports.sun),
  /**
   * @description The moon icon.
   */
  moon: dynamic(dynamicIconImports.moon),
  /**
   * @description The zap icon.
   */
  zap: dynamic(dynamicIconImports.zap),
  /**
   * @description The github icon.
   */
  github: dynamic(dynamicIconImports.github),
  /**
   * @description The gitlab icon.
   */
  gitlab: dynamic(dynamicIconImports.gitlab),
  /**
   * @description The slack icon.
   */
  slack: dynamic(dynamicIconImports.slack),
  /**
   * @description The twitter icon.
   */
  twitter: dynamic(dynamicIconImports.twitter),
  /**
   * @description The facebook icon.
   */
  facebook: dynamic(dynamicIconImports.facebook),
  /**
   * @description The instagram icon.
   */
  instagram: dynamic(dynamicIconImports.instagram),
  /**
   * @description The linkedin icon.
   */
  linkedin: dynamic(dynamicIconImports.linkedin),
  /**
   * @description The youtube icon.
   */
  youtube: dynamic(dynamicIconImports.youtube),
  /**
   * @description The twitch icon.
   */
  twitch: dynamic(dynamicIconImports.twitch),
  /**
   * @description The dribbble icon.
   */
  dribbble: dynamic(dynamicIconImports.dribbble),
  /**
   * @description The behance icon.
   */
  behance: dynamic(dynamicIconImports['behance'] || dynamicIconImports['brand-behance']),
  /**
   * @description The figma icon.
   */
  figma: dynamic(dynamicIconImports.figma),
  /**
   * @description The trello icon.
   */
  trello: dynamic(dynamicIconImports.trello),
  /**
   * @description The slack icon.
   */
  slackIcon: dynamic(dynamicIconImports.slack),
  /**
   * @description The git icon.
   */
  git: dynamic(dynamicIconImports['git']),
  /**
   * @description The git branch icon.
   */
  gitBranch: dynamic(dynamicIconImports['git-branch']),
  /**
   * @description The git commit icon.
   */
  gitCommit: dynamic(dynamicIconImports['git-commit']),
  /**
   * @description The git merge icon.
   */
  gitMerge: dynamic(dynamicIconImports['git-merge']),
  /**
   * @description The git pull request icon.
   */
  gitPullRequest: dynamic(dynamicIconImports['git-pull-request']),
  /**
   * @description The git compare icon.
   */
  gitCompare: dynamic(dynamicIconImports['git-compare']),
  /**
   * @description The git fork icon.
   */
  gitFork: dynamic(dynamicIconImports['git-fork']),
  /**
   * @description The git commit icon.
   */
  gitCommitIcon: dynamic(dynamicIconImports['git-commit']),
  /**
   * @description The git merge icon.
   */
  gitMergeIcon: dynamic(dynamicIconImports['git-merge']),
  /**
   * @description The git pull request icon.
   */
  gitPullRequestIcon: dynamic(dynamicIconImports['git-pull-request']),
  /**
   * @description The git compare icon.
   */
  gitCompareIcon: dynamic(dynamicIconImports['git-compare']),
  /**
   * @description The git fork icon.
   */
  gitForkIcon: dynamic(dynamicIconImports['git-fork']),
  /**
   * @description The git branch icon.
   */
  gitBranchIcon: dynamic(dynamicIconImports['git-branch']),
};

/**
 * @description A component that displays an icon.
 * @param {IconProps} props - The props for the component.
 * @returns {React.ReactElement} - The icon component.
 */
export function Icon({ name, size = defaultSize, ...props }: IconProps) {
  const LucideIcon = Icons[name];
  return <LucideIcon size={size} {...props} />;
}
