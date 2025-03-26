/**
 * 插件上下文
 */
export interface PluginContext {
  /**
   * 搜索关键词
   */
  keyword?: string;

  /**
   * 当前覆盖的应用
   */
  overlaidApp?: string;
}

/**
 * 插件动作
 */
export interface Action {
  /**
   * 动作ID
   */
  id: string;

  /**
   * 动作标题
   */
  title: string;

  /**
   * 动作描述
   */
  description: string;

  /**
   * 动作图标
   */
  icon?: string;
}

/**
 * 动作执行结果
 */
export interface ActionResult {
  /**
   * 结果消息
   */
  message: string;
}

/**
 * Git仓库状态
 */
export interface GitStatus {
  /**
   * 是否是Git仓库
   */
  isRepo: boolean;

  /**
   * 当前分支
   */
  branch: string;

  /**
   * 有变更的文件数量
   */
  changedFilesCount: number;

  /**
   * 有未提交的更改
   */
  hasChanges: boolean;

  /**
   * 有本地提交未推送
   */
  hasUnpushedCommits: boolean;
}
