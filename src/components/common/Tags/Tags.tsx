type TagsProps = {
  tags: string[];
  className?: string;
};

export default function Tags(props: TagsProps) {
  return (
    <div className={`flex flex-wrap ${props.className}`}>
      {props.tags.map((tag) => (
        <TagItem key={tag} title={tag} />
      ))}
    </div>
  );
}

function TagItem({ title }: { title: string }) {
  return (
    <span className="text-xs bg-slate-50 text-slate-600 px-1 py-0.5 mr-1 mt-1 rounded-sm">
      {title}
    </span>
  );
}
