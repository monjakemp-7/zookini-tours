type Fact = {
  label: string;
  value: string;
};

type FactBarProps = {
  facts: Fact[];
  enquireHref?: string;
  whatsappHref: string;
};

export function FactBar({ facts, enquireHref = "#enquire", whatsappHref }: FactBarProps) {
  return (
    <div className="fact-bar">
      <dl>
        {facts.map((fact) => (
          <div key={fact.label}>
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>
      <div className="fact-bar-actions">
        <a className="btn btn-solid" href={enquireHref}>
          Enquire
        </a>
        <a className="btn btn-line" href={whatsappHref}>
          WhatsApp
        </a>
      </div>
    </div>
  );
}
