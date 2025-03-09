// src/models/Book.ts

/**
 * Bookインターフェイス
 * JPAのエンティティをTypeScriptの型定義だけで置き換えたもの
 */
export interface Book {
    /** 主キー */
    id?: number; // DBが自動採番するなら省略可能にしておくなど
  
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
  
    /** ISBNコード */
    isbn: string;
      }
  