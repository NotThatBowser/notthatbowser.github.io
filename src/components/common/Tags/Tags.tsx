type TagsProps = {
  tags: string[];
  frequencyByTag?: Map<string, number>;
  className?: string;
};

export default function Tags(props: TagsProps) {
  return (
    <div className={`flex flex-wrap ${props.className}`}>
      {props.tags.map((tag) => {
        const frequency = props.frequencyByTag?.get(tag) ?? 0;
        const isHighlight = frequency > 2;
        return <TagItem key={tag} title={tag} isHighlight={isHighlight} />;
      })}
    </div>
  );
}

function TagItem({
  title,
  isHighlight,
}: {
  title: string;
  isHighlight: boolean;
}) {
  return (
    <span className={`text-xs bg-slate-50 px-1 py-0.5 mr-1 mt-1 rounded-sm`}>
      {isHighlight ? (
        <em className="font-medium not-italic text-slate-700">{title}</em>
      ) : (
        <span className="text-slate-600">{title}</span>
      )}
    </span>
  );
}
