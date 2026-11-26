import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import {
  useCurrentSidebarSiblings,
  filterDocCardListItems,
  useDocById,
} from '@docusaurus/plugin-content-docs/client';
import type {PropSidebarItem} from '@docusaurus/plugin-content-docs';

import styles from './styles.module.css';

// Replaces Docusaurus's card grid with a plain list:
// one row per page, title + description on the left, date on the right.

function Row({item}: {item: PropSidebarItem}): ReactNode {
  const doc = useDocById(item.type === 'link' ? item.docId ?? undefined : undefined);
  if (item.type === 'html') return null;
  const href = item.href;
  if (!href) return null;
  const description = item.description ?? doc?.description;
  const date = item.customProps?.date as string | undefined;
  return (
    <li className={styles.row}>
      <Link to={href} className={styles.link}>
        <span className={styles.title}>{item.label}</span>
        {description && <span className={styles.description}>{description}</span>}
      </Link>
      {date && <span className={styles.date}>{date}</span>}
    </li>
  );
}

export default function DocCardList({items}: {items?: PropSidebarItem[]}): ReactNode {
  const siblings = useCurrentSidebarSiblings();
  const list = filterDocCardListItems(items ?? siblings);
  return (
    <ul className={styles.list}>
      {list.map((item, i) => (
        <Row key={i} item={item} />
      ))}
    </ul>
  );
}
