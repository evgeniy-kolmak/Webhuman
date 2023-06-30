import styles from './SectionTitle.module.sass';

export type SectionTitleProps = {
  cn?: string;
  children: React.ReactNode;
};

export const SectionTitle = ({ cn, children }: SectionTitleProps) => {
  return <div className={[styles.sectionTitle, cn].join(' ')}>{children}</div>;
};
