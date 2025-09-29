import { type LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import dynamic from 'next/dynamic';

const defaultSize = 20;

/**
 * The name of the icon to display.

 * This is a key of the `dynamicIconImports` object from `lucide-react`.

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

 * A collection of dynamically imported icons from `lucide-react`.
 * This allows for lazy loading of icons, which can improve performance.
 */
export const Icons = {
  /**
   * The application logo.
=======
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

   * Represents a dashboard.
   */
  dashboard: dynamic(dynamicIconImports['layout-dashboard']),
  /**
   * Represents a text file.
   */
  fileText: dynamic(dynamicIconImports['file-text']),
  /**
   * Represents a Kanban board in a folder.
   */
  folderKanban: dynamic(dynamicIconImports['folder-kanban']),
  /**
   * Represents a group of users.
   */
  users: dynamic(dynamicIconImports.users),
  /**
   * Represents a bar chart for statistics.
   */
  barChart: dynamic(dynamicIconImports['bar-chart']),
  /**
   * Represents a notification bell.
   */
  bell: dynamic(dynamicIconImports.bell),
  /**
   * Represents a single user.
   */
  user: dynamic(dynamicIconImports.user),
  /**
   * Represents settings or configuration.
   */
  settings: dynamic(dynamicIconImports.settings),
  /**
   * Represents a log out action.
   */
  logOut: dynamic(dynamicIconImports['log-out']),
  /**
   * Represents an add or create action.
   */
  plus: dynamic(dynamicIconImports.plus),
  /**
   * Represents a search action.
   */
  search: dynamic(dynamicIconImports.search),
  /**
   * Represents a filter action.
   */
  filter: dynamic(dynamicIconImports.filter),
  /**
   * Represents a downward-pointing chevron, often used for dropdowns or accordions.
   */
  chevronDown: dynamic(dynamicIconImports['chevron-down']),
  /**
   * Represents an upward-pointing chevron.
   */
  chevronUp: dynamic(dynamicIconImports['chevron-up']),
  /**
   * Represents a left-pointing chevron.
   */
  chevronLeft: dynamic(dynamicIconImports['chevron-left']),
  /**
   * Represents a right-pointing chevron.
   */
  chevronRight: dynamic(dynamicIconImports['chevron-right']),
  /**
   * Represents a close or cancel action.
   */
  x: dynamic(dynamicIconImports.x),
  /**
   * Represents a success or confirmation action.
   */
  check: dynamic(dynamicIconImports.check),
  /**
   * Represents an alert or warning.
   */
  alertCircle: dynamic(dynamicIconImports['alert-circle']),
  /**
   * Represents a successful action in a circle.
   */
  checkCircle: dynamic(dynamicIconImports['check-circle']),
  /**
   * Represents a close or cancel action in a circle.
   */
  xCircle: dynamic(dynamicIconImports['x-circle']),
  /**
   * Represents informational content.
   */
  info: dynamic(dynamicIconImports.info),
  /**
   * Represents a help or question mark icon.
   */
  helpCircle: dynamic(dynamicIconImports['help-circle']),
  /**
   * Represents an external link.
   */
  externalLink: dynamic(dynamicIconImports['external-link']),
  /**
   * Represents a link.
   */
  link: dynamic(dynamicIconImports.link),
  /**
   * Represents a download action.
   */
  download: dynamic(dynamicIconImports.download),
  /**
   * Represents an upload action.
   */
  upload: dynamic(dynamicIconImports.upload),
  /**
   * Represents a delete or trash action.
   */
  trash: dynamic(dynamicIconImports['trash-2']),
  /**
   * Represents an edit action.
   */
  edit: dynamic(dynamicIconImports['edit-2']),
  /**
   * Represents a copy action.
   */
  copy: dynamic(dynamicIconImports.copy),
  /**
   * Represents a view or visibility action.
   */
  eye: dynamic(dynamicIconImports.eye),
  /**
   * Represents a hidden or visibility off action.
   */
  eyeOff: dynamic(dynamicIconImports['eye-off']),
  /**
   * Represents an email.
   */
  mail: dynamic(dynamicIconImports.mail),
  /**
   * Represents a message or comment.
   */
  messageSquare: dynamic(dynamicIconImports['message-square']),
  /**
   * Represents a send action.
   */
  send: dynamic(dynamicIconImports.send),
  /**
   * Represents an attachment.
   */
  paperclip: dynamic(dynamicIconImports.paperclip),
  /**
   * Represents an image file.
   */
  image: dynamic(dynamicIconImports.image),
  /**
   * Represents a generic file.
   */
  file: dynamic(dynamicIconImports.file),
  /**
   * Represents a text file. (alias for fileText)
   */
  fileTextIcon: dynamic(dynamicIconImports['file-text']),
  /**
   * Represents a spreadsheet file.
   */
  fileSpreadsheet: dynamic(dynamicIconImports['file-spreadsheet']),
  /**
   * Represents a code file.
   */
  fileCode: dynamic(dynamicIconImports['file-code']),
  /**
   * Represents an archive file.
   */
  fileArchive: dynamic(dynamicIconImports['file-archive']),
  /**
   * Represents an audio file.
   */
  fileAudio: dynamic(dynamicIconImports['file-audio']),
  /**
   * Represents a video file.
   */
  fileVideo: dynamic(dynamicIconImports['file-video']),
  /**
   * Represents a PDF file.
   */
  filePdf: dynamic(dynamicIconImports['file-pdf']),
  /**
   * Represents a Word document file.
   */
  fileWord: dynamic(dynamicIconImports['file-word']),
  /**
   * Represents an Excel file.
   */
  fileExcel: dynamic(dynamicIconImports['file-excel']),
  /**
   * Represents a PowerPoint file.
   */
  filePowerpoint: dynamic(dynamicIconImports['file-powerpoint']),
  /**
   * Represents a "more options" horizontal icon.
   */
  moreHorizontal: dynamic(dynamicIconImports['more-horizontal']),
  /**
   * Represents a "more options" vertical icon.
   */
  moreVertical: dynamic(dynamicIconImports['more-vertical']),
  /**
   * Represents a menu.
   */
  menu: dynamic(dynamicIconImports.menu),
  /**
   * Represents a grid layout.
   */
  grid: dynamic(dynamicIconImports['grid'] || dynamicIconImports['layout-grid']),
  /**
   * Represents a list layout.
   */
  list: dynamic(dynamicIconImports.list),
  /**
   * Represents columns.
   */
  columns: dynamic(dynamicIconImports.columns),
  /**
   * Represents an upward arrow.
   */
  arrowUp: dynamic(dynamicIconImports['arrow-up']),
  /**
   * Represents a downward arrow.
   */
  arrowDown: dynamic(dynamicIconImports['arrow-down']),
  /**
   * Represents a leftward arrow.
   */
  arrowLeft: dynamic(dynamicIconImports['arrow-left']),
  /**
   * Represents a rightward arrow.
   */
  arrowRight: dynamic(dynamicIconImports['arrow-right']),
  /**
   * Represents an upward-right arrow.
   */
  arrowUpRight: dynamic(dynamicIconImports['arrow-up-right']),
  /**
   * Represents a downward-right arrow.
   */
  arrowDownRight: dynamic(dynamicIconImports['arrow-down-right']),
  /**
   * Represents a downward-left arrow.
   */
  arrowDownLeft: dynamic(dynamicIconImports['arrow-down-left']),
  /**
   * Represents an upward-left arrow.
   */
  arrowUpLeft: dynamic(dynamicIconImports['arrow-up-left']),
  /**
   * Represents a move action.
   */
  move: dynamic(dynamicIconImports.move),
  /**
   * Represents a maximize action.
   */
  maximize: dynamic(dynamicIconImports['maximize-2']),
  /**
   * Represents a minimize action.
   */
  minimize: dynamic(dynamicIconImports['minimize-2']),
  /**
   * Represents a clockwise refresh action.
   */
  refreshCw: dynamic(dynamicIconImports['refresh-cw']),
  /**
   * Represents a counter-clockwise rotation.
   */
  rotateCcw: dynamic(dynamicIconImports['rotate-ccw']),
  /**
   * Represents a clockwise rotation.
   */
  rotateCw: dynamic(dynamicIconImports['rotate-cw']),
  /**
   * Represents a save action.
   */
  save: dynamic(dynamicIconImports.save),
  /**
   * Represents a share action.
   */
  share: dynamic(dynamicIconImports['share-2']),
  /**
   * Represents a shield for security.
   */
  shield: dynamic(dynamicIconImports.shield),
  /**
   * Represents a star for favorites or ratings.
   */
  star: dynamic(dynamicIconImports.star),
  /**
   * Represents the sun, often for light mode.
   */
  sun: dynamic(dynamicIconImports.sun),
  /**
   * Represents the moon, often for dark mode.
   */
  moon: dynamic(dynamicIconImports.moon),
  /**
   * Represents a zap or lightning bolt.
   */
  zap: dynamic(dynamicIconImports.zap),
  /**
   * Represents GitHub.
   */
  github: dynamic(dynamicIconImports.github),
  /**
   * Represents GitLab.
   */
  gitlab: dynamic(dynamicIconImports.gitlab),
  /**
   * Represents Slack.
   */
  slack: dynamic(dynamicIconImports.slack),
  /**
   * Represents Twitter.
   */
  twitter: dynamic(dynamicIconImports.twitter),
  /**
   * Represents Facebook.
   */
  facebook: dynamic(dynamicIconImports.facebook),
  /**
   * Represents Instagram.
   */
  instagram: dynamic(dynamicIconImports.instagram),
  /**
   * Represents LinkedIn.
   */
  linkedin: dynamic(dynamicIconImports.linkedin),
  /**
   * Represents YouTube.
   */
  youtube: dynamic(dynamicIconImports.youtube),
  /**
   * Represents Twitch.
   */
  twitch: dynamic(dynamicIconImports.twitch),
  /**
   * Represents Dribbble.
   */
  dribbble: dynamic(dynamicIconImports.dribbble),
  /**
   * Represents Behance.
   */
  behance: dynamic(dynamicIconImports['behance'] || dynamicIconImports['brand-behance']),
  /**
   * Represents Figma.
   */
  figma: dynamic(dynamicIconImports.figma),
  /**
   * Represents Trello.
   */
  trello: dynamic(dynamicIconImports.trello),
  /**
   * Represents Slack. (alias for slack)
   */
  slackIcon: dynamic(dynamicIconImports.slack),
  /**
   * Represents Git.
   */
  git: dynamic(dynamicIconImports['git']),
  /**
   * Represents a Git branch.
   */
  gitBranch: dynamic(dynamicIconImports['git-branch']),
  /**
   * Represents a Git commit.
   */
  gitCommit: dynamic(dynamicIconImports['git-commit']),
  /**
   * Represents a Git merge.
   */
  gitMerge: dynamic(dynamicIconImports['git-merge']),
  /**
   * Represents a Git pull request.
   */
  gitPullRequest: dynamic(dynamicIconImports['git-pull-request']),
  /**
   * Represents a Git compare action.
   */
  gitCompare: dynamic(dynamicIconImports['git-compare']),
  /**
   * Represents a Git fork action.
   */
  gitFork: dynamic(dynamicIconImports['git-fork']),
  /**
   * Represents a Git commit. (alias for gitCommit)
   */
  gitCommitIcon: dynamic(dynamicIconImports['git-commit']),
  /**
   * Represents a Git merge. (alias for gitMerge)
   */
  gitMergeIcon: dynamic(dynamicIconImports['git-merge']),
  /**
   * Represents a Git pull request. (alias for gitPullRequest)
   */
  gitPullRequestIcon: dynamic(dynamicIconImports['git-pull-request']),
  /**
   * Represents a Git compare action. (alias for gitCompare)
   */
  gitCompareIcon: dynamic(dynamicIconImports['git-compare']),
  /**
   * Represents a Git fork action. (alias for gitFork)
   */
  gitForkIcon: dynamic(dynamicIconImports['git-fork']),
  /**
   * Represents a Git branch. (alias for gitBranch)
=======
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