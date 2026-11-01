import SplitText from "@/components/SplitText/SplitText";
import Tag from "@/components/Tag/Tag";
import styles from "./SectionHeader.module.css";

type SectionHeaderProps = {
  tag: string;
  title: React.ReactNode;
  lead?: string;
  align?: "left" | "center" | "split" | "row" | "about";
  small?: boolean;
  className?: string;
  action?: React.ReactNode;
};

export default function SectionHeader({
  tag,
  title,
  lead,
  align = "left",
  small = false,
  className = "",
  action,
}: SectionHeaderProps) {
  return (
    <div className={`${styles.header} ${styles[align]} ${small ? styles.small : ""} ${className}`}>
      <div className={styles.titleBlock}>
        <Tag>[{tag}]</Tag>
        <SplitText as="h2" className={styles.heading}>{title}</SplitText>
      </div>
      {lead && <SplitText as="p" className={styles.lead}>{lead}</SplitText>}
      {action}
    </div>
  );
}
