import { type LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import dynamic from 'next/dynamic';

const defaultSize = 20;

/**
 * The name of the icon to display.
 */
type IconName = keyof typeof dynamicIconImports;

/**
 * The props for the icon component.
 */
interface IconProps extends Omit<LucideProps, 'ref'> {
  /**
   * The name of the icon to display.
   */
  name: IconName;
}

/**
 * A collection of icons that can be used in the application.
 */
export const Icons = {
  /**
   * The logo icon.
   *
   * @param props - The props for the component.
   * @returns The logo icon component.
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
   * The dashboard icon.
   */
  dashboard: dynamic(dynamicIconImports['layout-dashboard']),
  /**
   * The file text icon.
   */
  fileText: dynamic(dynamicIconImports['file-text']),
  /**
   * The folder kanban icon.
   */
  folderKanban: dynamic(dynamicIconImports['folder-kanban']),
  /**
   * The users icon.
   */
  users: dynamic(dynamicIconImports.users),
  /**
   * The bar chart icon.
   */
  barChart: dynamic(dynamicIconImports['bar-chart']),
  /**
   * The bell icon.
   */
  bell: dynamic(dynamicIconImports.bell),
  /**
   * The user icon.
   */
  user: dynamic(dynamicIconImports.user),
  /**
   * The settings icon.
   */
  settings: dynamic(dynamicIconImports.settings),
  /**
   * The log out icon.
   */
  logOut: dynamic(dynamicIconImports['log-out']),
  /**
   * The plus icon.
   */
  plus: dynamic(dynamicIconImports.plus),
  /**
   * The search icon.
   */
  search: dynamic(dynamicIconImports.search),
  /**
   * The filter icon.
   */
  filter: dynamic(dynamicIconImports.filter),
  /**
   * The chevron down icon.
   */
  chevronDown: dynamic(dynamicIconImports['chevron-down']),
  /**
   * The chevron up icon.
   */
  chevronUp: dynamic(dynamicIconImports['chevron-up']),
  /**
   * The chevron left icon.
   */
  chevronLeft: dynamic(dynamicIconImports['chevron-left']),
  /**
   * The chevron right icon.
   */
  chevronRight: dynamic(dynamicIconImports['chevron-right']),
  /**
   * The x icon.
   */
  x: dynamic(dynamicIconImports.x),
  /**
   * The check icon.
   */
  check: dynamic(dynamicIconImports.check),
  /**
   * The alert circle icon.
   */
  alertCircle: dynamic(dynamicIconImports['alert-circle']),
  /**
   * The check circle icon.
   */
  checkCircle: dynamic(dynamicIconImports['check-circle']),
  /**
   * The x circle icon.
   */
  xCircle: dynamic(dynamicIconImports['x-circle']),
  /**
   * The info icon.
   */
  info: dynamic(dynamicIconImports.info),
  /**
   * The help circle icon.
   */
  helpCircle: dynamic(dynamicIconImports['help-circle']),
  /**
   * The external link icon.
   */
  externalLink: dynamic(dynamicIconImports['external-link']),
  /**
   * The link icon.
   */
  link: dynamic(dynamicIconImports.link),
  /**
   * The download icon.
   */
  download: dynamic(dynamicIconImports.download),
  /**
   * The upload icon.
   */
  upload: dynamic(dynamicIconImports.upload),
  /**
   * The trash icon.
   */
  trash: dynamic(dynamicIconImports['trash-2']),
  /**
   * The edit icon.
   */
  edit: dynamic(dynamicIconImports['edit-2']),
  /**
   * The copy icon.
   */
  copy: dynamic(dynamicIconImports.copy),
  /**
   * The eye icon.
   */
  eye: dynamic(dynamicIconImports.eye),
  /**
   * The eye off icon.
   */
  eyeOff: dynamic(dynamicIconImports['eye-off']),
  /**
   * The mail icon.
   */
  mail: dynamic(dynamicIconImports.mail),
  /**
   * The message square icon.
   */
  messageSquare: dynamic(dynamicIconImports['message-square']),
  /**
   * The send icon.
   */
  send: dynamic(dynamicIconImports.send),
  /**
   * The paperclip icon.
   */
  paperclip: dynamic(dynamicIconImports.paperclip),
  /**
   * The image icon.
   */
  image: dynamic(dynamicIconImports.image),
  /**
   * The file icon.
   */
  file: dynamic(dynamicIconImports.file),
  /**
   * The file text icon.
   */
  fileTextIcon: dynamic(dynamicIconImports['file-text']),
  /**
   * The file spreadsheet icon.
   */
  fileSpreadsheet: dynamic(dynamicIconImports['file-spreadsheet']),
  /**
   * The file code icon.
   */
  fileCode: dynamic(dynamicIconImports['file-code']),
  /**
   * The file archive icon.
   */
  fileArchive: dynamic(dynamicIconImports['file-archive']),
  /**
   * The file audio icon.
   */
  fileAudio: dynamic(dynamicIconImports['file-audio']),
  /**
   * The file video icon.
   */
  fileVideo: dynamic(dynamicIconImports['file-video']),
  /**
   * The file pdf icon.
   */
  filePdf: dynamic(dynamicIconImports['file-pdf']),
  /**
   * The file word icon.
   */
  fileWord: dynamic(dynamicIconImports['file-word']),
  /**
   * The file excel icon.
   */
  fileExcel: dynamic(dynamicIconImports['file-excel']),
  /**
   * The file powerpoint icon.
   */
  filePowerpoint: dynamic(dynamicIconImports['file-powerpoint']),
  /**
   * The more horizontal icon.
   */
  moreHorizontal: dynamic(dynamicIconImports['more-horizontal']),
  /**
   * The more vertical icon.
   */
  moreVertical: dynamic(dynamicIconImports['more-vertical']),
  /**
   * The menu icon.
   */
  menu: dynamic(dynamicIconImports.menu),
  /**
   * The grid icon.
   */
  grid: dynamic(dynamicIconImports['grid'] || dynamicIconImports['layout-grid']),
  /**
   * The list icon.
   */
  list: dynamic(dynamicIconImports.list),
  /**
   * The columns icon.
   */
  columns: dynamic(dynamicIconImports.columns),
  /**
   * The arrow up icon.
   */
  arrowUp: dynamic(dynamicIconImports['arrow-up']),
  /**
   * The arrow down icon.
   */
  arrowDown: dynamic(dynamicIconImports['arrow-down']),
  /**
   * The arrow left icon.
   */
  arrowLeft: dynamic(dynamicIconImports['arrow-left']),
  /**
   * The arrow right icon.
   */
  arrowRight: dynamic(dynamicIconImports['arrow-right']),
  /**
   * The arrow up right icon.
   */
  arrowUpRight: dynamic(dynamicIconImports['arrow-up-right']),
  /**
   * The arrow down right icon.
   */
  arrowDownRight: dynamic(dynamicIconImports['arrow-down-right']),
  /**
   * The arrow down left icon.
   */
  arrowDownLeft: dynamic(dynamicIconImports['arrow-down-left']),
  /**
   * The arrow up left icon.
   */
  arrowUpLeft: dynamic(dynamicIconImports['arrow-up-left']),
  /**
   * The move icon.
   */
  move: dynamic(dynamicIconImports.move),
  /**
   * The maximize icon.
   */
  maximize: dynamic(dynamicIconImports['maximize-2']),
  /**
   * The minimize icon.
   */
  minimize: dynamic(dynamicIconImports['minimize-2']),
  /**
   * The refresh cw icon.
   */
  refreshCw: dynamic(dynamicIconImports['refresh-cw']),
  /**
   * The rotate ccw icon.
   */
  rotateCcw: dynamic(dynamicIconImports['rotate-ccw']),
  /**
   * The rotate cw icon.
   */
  rotateCw: dynamic(dynamicIconImports['rotate-cw']),
  /**
   * The save icon.
   */
  save: dynamic(dynamicIconImports.save),
  /**
   * The share icon.
   */
  share: dynamic(dynamicIconImports['share-2']),
  /**
   * The shield icon.
   */
  shield: dynamic(dynamicIconImports.shield),
  /**
   * The star icon.
   */
  star: dynamic(dynamicIconImports.star),
  /**
   * The sun icon.
   */
  sun: dynamic(dynamicIconImports.sun),
  /**
   * The moon icon.
   */
  moon: dynamic(dynamicIconImports.moon),
  /**
   * The zap icon.
   */
  zap: dynamic(dynamicIconImports.zap),
  /**
   * The github icon.
   */
  github: dynamic(dynamicIconImports.github),
  /**
   * The gitlab icon.
   */
  gitlab: dynamic(dynamicIconImports.gitlab),
  /**
   * The slack icon.
   */
  slack: dynamic(dynamicIconImports.slack),
  /**
   * The twitter icon.
   */
  twitter: dynamic(dynamicIconImports.twitter),
  /**
   * The facebook icon.
   */
  facebook: dynamic(dynamicIconImports.facebook),
  /**
   * The instagram icon.
   */
  instagram: dynamic(dynamicIconImports.instagram),
  /**
   * The linkedin icon.
   */
  linkedin: dynamic(dynamicIconImports.linkedin),
  /**
   * The youtube icon.
   */
  youtube: dynamic(dynamicIconImports.youtube),
  /**
   * The twitch icon.
   */
  twitch: dynamic(dynamicIconImports.twitch),
  /**
   * The dribbble icon.
   */
  dribbble: dynamic(dynamicIconImports.dribbble),
  /**
   * The behance icon.
   */
  behance: dynamic(dynamicIconImports['behance'] || dynamicIconImports['brand-behance']),
  /**
   * The figma icon.
   */
  figma: dynamic(dynamicIconImports.figma),
  /**
   * The trello icon.
   */
  trello: dynamic(dynamicIconImports.trello),
  /**
   * The slack icon.
   */
  slackIcon: dynamic(dynamicIconImports.slack),
  /**
   * The git icon.
   */
  git: dynamic(dynamicIconImports['git']),
  /**
   * The git branch icon.
   */
  gitBranch: dynamic(dynamicIconImports['git-branch']),
  /**
   * The git commit icon.
   */
  gitCommit: dynamic(dynamicIconImports['git-commit']),
  /**
   * The git merge icon.
   */
  gitMerge: dynamic(dynamicIconImports['git-merge']),
  /**
   * The git pull request icon.
   */
  gitPullRequest: dynamic(dynamicIconImports['git-pull-request']),
  /**
   * The git compare icon.
   */
  gitCompare: dynamic(dynamicIconImports['git-compare']),
  /**
   * The git fork icon.
   */
  gitFork: dynamic(dynamicIconImports['git-fork']),
  /**
   * The git commit icon.
   */
  gitCommitIcon: dynamic(dynamicIconImports['git-commit']),
  /**
   * The git merge icon.
   */
  gitMergeIcon: dynamic(dynamicIconImports['git-merge']),
  /**
   * The git pull request icon.
   */
  gitPullRequestIcon: dynamic(dynamicIconImports['git-pull-request']),
  /**
   * The git compare icon.
   */
  gitCompareIcon: dynamic(dynamicIconImports['git-compare']),
  /**
   * The git fork icon.
   */
  gitForkIcon: dynamic(dynamicIconImports['git-fork']),
  /**
   * The git branch icon.
   */
  gitBranchIcon: dynamic(dynamicIconImports['git-branch']),
};

/**
 * A component that displays an icon.
 *
 * @param props - The props for the component.
 * @param props.name - The name of the icon to display.
 * @param props.size - The size of the icon.
 * @returns The icon component.
 */
export function Icon({ name, size = defaultSize, ...props }: IconProps) {
  const LucideIcon = Icons[name];
  return <LucideIcon size={size} {...props} />;
}
