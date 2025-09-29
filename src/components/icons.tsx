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
 * The props for the Icon component.
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
   */
  gitBranchIcon: dynamic(dynamicIconImports['git-branch']),
};

/**
 * A component that displays an icon by name.
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