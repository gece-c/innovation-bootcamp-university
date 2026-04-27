"use client";

import { useEffect } from "react";

const TARGET_SELECTOR = "h1, h2, h3, h4, h5, h6, p, li, blockquote, figcaption";
const NBSP = "\u00A0";

function bindLastTwoWords(text: string): string {
  const normalized = text.replace(/\u00A0/g, " ");
  return normalized.replace(/(\S+)\s+(\S+)\s*$/, `$1${NBSP}$2`);
}

function applyNoOrphans(root: ParentNode): void {
  const elements = root.querySelectorAll<HTMLElement>(TARGET_SELECTOR);

  elements.forEach((element) => {
    if (element.dataset.noOrphanFix === "off") {
      return;
    }

    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
    const textNodes: Text[] = [];
    let current = walker.nextNode();

    while (current) {
      const text = current.nodeValue ?? "";
      if (text.trim()) {
        textNodes.push(current as Text);
      }
      current = walker.nextNode();
    }

    const textNode = textNodes[textNodes.length - 1];
    if (!textNode || !textNode.nodeValue) {
      return;
    }

    const raw = textNode.nodeValue;
    if (!raw.trim()) {
      return;
    }

    const fixed = bindLastTwoWords(raw);
    if (fixed !== raw) {
      textNode.nodeValue = fixed;
    }
  });
}

export function NoOrphanWords(): null {
  useEffect(() => {
    let frame = 0;
    const scheduleApply = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => applyNoOrphans(document.body));
    };

    scheduleApply();

    const resizeHandler = () => scheduleApply();
    window.addEventListener("resize", resizeHandler, { passive: true });

    const observer = new MutationObserver(() => scheduleApply());
    observer.observe(document.body, { subtree: true, childList: true, characterData: true });

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return null;
}
