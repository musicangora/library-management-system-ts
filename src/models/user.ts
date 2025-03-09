/** Roleの列挙 */
export enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
  GUEST = "GUEST",
}

/** Userインターフェイス */
export interface User {
  /** 主キー */
  id: number;

  /** ユーザー名 */
  username: string;

  /** パスワード */
  password: string;

  /** 有効フラグ */
  enabled: boolean;

  /** ロック状態フラグ */
  accountNonLocked: boolean;

  /** 失敗回数 */
  failedAttempt: number;

  /** ロックされた日時 (Date型) */
  lockTime?: Date;

  /** ユーザーの権限（JavaではSet<Role>だった部分） */
  roles: Set<Role>;
}