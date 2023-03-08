import styles from './Select.module.scss';

import { ReactNode, useEffect, useRef, useState } from 'react';

type SelectProps = {
  selected: string;
  items: string[];
  onSelected(item: string): void;
  formatItem?(item: string, index: number): ReactNode;
};

export default function Select({ items, selected, formatItem, onSelected }: SelectProps) {
  const [opened, setOpened] = useState(false);
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (hostRef.current?.contains(event.target as Element)) {
        return;
      }
      setOpened(false);
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const toggleOpen = () => {
    setOpened(!opened);
  };

  const handleItemClick = (item: string) => {
    setOpened(false);
    onSelected(item);
  };

  return (
    <div ref={hostRef} className={styles.root} onClick={toggleOpen}>
      <div className={styles.selected}>{selected.toUpperCase()}</div>
      {opened && (
        <div className={styles.items}>
          {items.map((it, i) => (
            <div
              className={styles.item}
              key={it}
              onClick={() => handleItemClick(it)}
            >
              {formatItem ? formatItem(it, i) : it}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}