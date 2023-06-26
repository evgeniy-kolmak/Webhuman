import styles from './Button.module.sass';

export type ButtonProps = {
  text: string;
  cn: string | string[];
  href?: string;
  target?: string;
  download: boolean;
};

export const Button = ({ text, cn, target, href, download }: ButtonProps) => {
  return (
    <a
      rel={target ? 'noopener noreferrer' : undefined}
      href={href}
      target={target}
      download={download}
      className={[
        styles.button,
        typeof cn === 'string' ? cn : cn.join(' '),
      ].join(' ')}
    >
      {text}
    </a>
  );
};
