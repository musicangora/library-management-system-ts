export interface Book {
  /** 主キー（必須項目）*/
  id: number;

  /** タイトル（必須項目） */
  title: string;

  /** 著者名（必須項目） */
  author: string;

  /** 出版社名（必須項目） */
  publisher: string;

  /** 分類（必須項目） */
  category: string;

  /** 在庫数（必須項目） */
  quantity: number;

  /** ISBNコード（ユニーク制約） */
  isbn: string;

  /** 出版年 */
  publicationYear?: number;

  /** 新しく追加するフィールド（在庫数） */
  stock: number;
}
