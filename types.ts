
export interface Directive {
  id: number;
  type: 'Allow' | 'Disallow';
  path: string;
}

export type ModalType = 'about' | 'contact' | 'guide' | 'privacy' | 'terms' | 'dmca' | null;
