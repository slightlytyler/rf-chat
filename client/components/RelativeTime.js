import React from "react";

const Wrapper = "span";

const ms = 1;

const s = ms * 1000;

const m = s * 60;

const h = m * 60;

const d = h * 24;

const w = d * 7;

const mo = w * 4.333;

const y = m * 12;

const printRelativeTime = targetDate => {
  const currTime = new Date().getTime();
  const tarTime = new Date(targetDate).getTime();
  const delta = currTime - tarTime;
  if (delta < m) return `${Math.round(delta / s)} seconds`;
  if (delta < h) return `${Math.round(delta / m)} minutes`;
  if (delta < d) return `${Math.round(delta / h)} hours`;
  if (delta < w) return `${Math.round(delta / d)} days`;
  if (delta < mo) return `${Math.round(delta / w)} weeks`;
  if (delta < y) return `${Math.round(delta / mo)} months`;
  return `${Math.round(delta / y)} years`;
};

const RelativeTime = props => (
  <Wrapper>{printRelativeTime(props.date)}</Wrapper>
);

export default RelativeTime;
