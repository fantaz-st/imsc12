import { Children, cloneElement, isValidElement, type ReactNode } from "react";
import styles from "./SplitText.module.css";

function splitNode(node: ReactNode, path = "word"): ReactNode {
  if (typeof node === "string") {
    return node.split(/(\s+)/).map((part, index) =>
      /^\s+$/.test(part) ? (
        part
      ) : (
        <span className={styles.word} key={`${path}-${index}`}>
          <span className={styles.wordInner} data-word-inner>{part}</span>
        </span>
      ),
    );
  }

  if (Array.isArray(node)) {
    return node.map((child, index) => splitNode(child, `${path}-${index}`));
  }

  if (isValidElement<{ children?: ReactNode }>(node) && node.props.children) {
    return cloneElement(node, {
      key: node.key ?? path,
      children: Children.map(node.props.children, (child, index) =>
        splitNode(child, `${path}-${index}`),
      ),
    });
  }

  return node;
}

export default function SplitText({
  children,
  className = "",
  as: Element = "span",
  splitName,
}: {
  children: ReactNode;
  className?: string;
  as?: "span" | "p" | "h1" | "h2";
  splitName?: string;
}) {
  return (
    <Element className={className} data-split={splitName}>
      {splitNode(children)}
    </Element>
  );
}
