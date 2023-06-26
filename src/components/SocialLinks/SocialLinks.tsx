import styles from './SocialLinks.module.sass';
import { ReactComponent as Vk } from 'assets/social_icons/vk.svg';
import { ReactComponent as Instagram } from 'assets/social_icons/instagram.svg';
import { ReactComponent as Github } from 'assets/social_icons/github.svg';
import { ReactComponent as Telegram } from 'assets/social_icons/telegram.svg';
import { ReactComponent as Linkedin } from 'assets/social_icons/linkedin.svg';

const links = [
  {
    href: 'https://vk.com/evgeniykolmak/',
    icon: <Vk />,
  },
  { href: 'https://www.instagram.com/evgeniykolmak/', icon: <Instagram /> },
  { href: 'https://github.com/evgeniy-kolmak/', icon: <Github /> },
  { href: 'https://t.me/evgeniykolmak/', icon: <Telegram /> },
  {
    href: 'https://www.linkedin.com/in/evgeniy-kolmak-372b43227/',
    icon: <Linkedin />,
  },
];

export const SocialLinks = () => {
  const { socialLinks, link } = styles;
  return (
    <div className={socialLinks}>
      {links.map((item) => (
        <a
          key={item.href}
          href={item.href}
          target="blank"
          rel="noopener noreferrer"
        >
          <div className={link}>{item.icon}</div>
        </a>
      ))}
    </div>
  );
};
