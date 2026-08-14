type SectionHeaderProps = {
  number: string;
  title: string;
  subtitle: string;
};

export default function SectionHeader({
  number,
  title,
  subtitle,
}: SectionHeaderProps) {
  return (
    <div className="sec-head">
      <span className="sec-num">{number}</span>

      <div>
        <h3 className="sec-title">{title}</h3>
        <div className="sec-sub">{subtitle}</div>
      </div>
    </div>
  );
}